import { MaritalStatus } from '../definitions/enums'
import {
  MaritalStatusHelper,
  PartnerBenefitStatusHelper,
} from '../helpers/fieldClasses'
import roundToTwo from '../helpers/roundToTwo'
import { legalValues } from '../scrapers/output'

export enum GisSituation {
  SINGLE = 'SINGLE',
  PARTNER_OAS = 'PARTNER_OAS',
  PARTNER_NO_OAS = 'PARTNER_NO_OAS',
  PARTNER_ALW = 'PARTNER_ALW',
  ALW = 'ALW',
  AFS = 'AFS',
}

export class EntitlementFormula {
  private readonly gisIncrements: number = 24
  private readonly gisStatus: number

  // The variables below are admittedly extremely weird.
  // I don't understand the naming or logic behind them, this is simply what was provided to me.

  // 7824
  private incuta3: number =
    Math.round(legalValues.MAX_OAS_ENTITLEMENT / 4 + 0.5) *
    (this.gisIncrements * 2)

  // 10416
  private incuta5: number =
    Math.round(legalValues.MAX_OAS_ENTITLEMENT / 3 + 0.5) *
    (this.gisIncrements * 2)

  // 224.11
  private covpam = roundToTwo(
    legalValues.MAX_GIS_AMOUNT_SINGLE -
      legalValues.MAX_GIS_TOPUP_SINGLE -
      (legalValues.MAX_GIS_AMOUNT_PARTNER_OAS -
        legalValues.MAX_GIS_TOPUP_PARTNER) -
      (Math.round(legalValues.MAX_OAS_ENTITLEMENT / 3 + 0.5) -
        Math.round(legalValues.MAX_OAS_ENTITLEMENT / 4 + 0.5))
  )

  // 25632
  private covpin: number =
    Math.round(
      legalValues.MAX_GIS_AMOUNT_SINGLE -
        legalValues.MAX_GIS_TOPUP_SINGLE -
        2 * this.covpam +
        0.5
    ) *
      (this.gisIncrements * 2) +
    this.incuta3

  // 36384
  private covpin5: number =
    this.incuta5 +
    Math.round(
      legalValues.MAX_GIS_AMOUNT_PARTNER_OAS -
        legalValues.MAX_GIS_TOPUP_PARTNER +
        0.5
    ) *
      (this.gisIncrements * 2)

  // 669.73
  private covp5: number = roundToTwo(
    legalValues.MAX_GIS_AMOUNT_SINGLE_AFS -
      legalValues.MAX_GIS_TOPUP_SINGLE -
      legalValues.MAX_OAS_ENTITLEMENT
  )

  constructor(
    private income: number,
    private maritalStatus: MaritalStatusHelper,
    private partnerBenefitStatus: PartnerBenefitStatusHelper,
    private age: number
  ) {
    this.gisStatus = this.maritalStatus.single ? 1 : 2
  }

  /**
   * The main entrypoint for all the processing.
   */
  getEntitlementAmount(): number {
    return this.calculationMethod === 'STATIC'
      ? this.staticResult
      : roundToTwo(this.actualAmount() + this.actualTopup)
  }

  /**
   * There are six clear "situations" a client can fall into, depending on their partner.
   */
  private get gisSituation(): GisSituation {
    if (this.maritalStatus.single) {
      if (this.maritalStatus.value === MaritalStatus.SINGLE)
        return GisSituation.SINGLE
      else if (this.maritalStatus.value === MaritalStatus.WIDOWED)
        return GisSituation.AFS
    } else {
      if (this.partnerBenefitStatus.anyOas)
        return this.age >= 65 ? GisSituation.PARTNER_OAS : GisSituation.ALW
      else if (this.partnerBenefitStatus.alw) return GisSituation.PARTNER_ALW
      else return GisSituation.PARTNER_NO_OAS
    }
  }

  /**
   * Returns the method used for calculation.
   * This is because the calculation variables will change depending on the income.
   * As well, in the STATIC case, all logic will be skipped and a predefined amount will be used instead.
   */
  private get calculationMethod(): 'LOW' | 'HIGH' | 'STATIC' {
    if (this.income < this.incomeBrackets.low) return 'LOW'
    else if (this.income >= this.incomeBrackets.high) return 'HIGH'
    else return 'STATIC'
  }

  /**
   * The client's income will affect the calculation behaviors.
   * This returns the low/high points to determine which bracket the income falls under.
   */
  private get incomeBrackets(): { low: number; high: number } {
    switch (this.gisSituation) {
      case GisSituation.PARTNER_ALW:
        return { low: this.covpin, high: this.covpin5 }
      case GisSituation.ALW:
      case GisSituation.AFS:
        return {
          low: this.incuta5,
          high: this.incuta5 + this.gisIncrements * this.gisStatus,
        }
      case GisSituation.SINGLE:
      case GisSituation.PARTNER_OAS:
      case GisSituation.PARTNER_NO_OAS:
        // these cases don't have different behavior based on income, so use -1
        return { low: -1, high: -1 }
    }
  }

  /**
   * When calculationMethod is STATIC, this will be used instead of the calculations.
   */
  private get staticResult(): number {
    switch (this.gisSituation) {
      case GisSituation.PARTNER_ALW:
        return this.covpam
      case GisSituation.ALW:
        return this.actualMaxAmount
      case GisSituation.AFS:
        return this.covp5
      case GisSituation.SINGLE:
      case GisSituation.PARTNER_OAS:
      case GisSituation.PARTNER_NO_OAS:
        throw new Error('static amount not defined')
    }
  }

  /**
   * The final GIS amount, before the topup is applied.
   * This is not used if the client's income is between the low and high range -
   * in that case, the static amount is used instead.
   */
  private actualAmount() {
    const differentialMultiplier =
      (this.gisSituation === GisSituation.ALW ||
        this.gisSituation === GisSituation.AFS) &&
      this.calculationMethod === 'LOW'
        ? 3
        : 1
    return roundToTwo(
      this.actualMaxAmount - this.incomeDifferential * differentialMultiplier
    )
  }

  /**
   * The final topup amount.
   * This number will be added to the final entitlement amount.
   */
  private get actualTopup() {
    const topupMethod: 'BASIC' | 'CALCULATED' =
      this.income < 2000 * this.gisStatus ? 'BASIC' : 'CALCULATED'
    switch (topupMethod) {
      case 'BASIC':
        return this.basicTopupAmount
      case 'CALCULATED':
        const gisTopupCalculatedAmount =
          this.basicTopupAmount -
          Math.floor(
            (this.income - 2000 * this.gisStatus) /
              (this.gisIncrements * this.gisStatus * 2)
          )
        return Math.max(0, gisTopupCalculatedAmount)
    }
  }

  /**
   * The max amount someone can receive.
   */
  private get actualMaxAmount() {
    if (
      this.gisSituation === GisSituation.PARTNER_ALW &&
      this.calculationMethod === 'HIGH'
    ) {
      return roundToTwo(
        legalValues.MAX_GIS_AMOUNT_SINGLE - legalValues.MAX_GIS_TOPUP_SINGLE
      )
    } else if (
      this.gisSituation === GisSituation.ALW &&
      this.calculationMethod === 'LOW'
    ) {
      return roundToTwo(
        legalValues.MAX_GIS_AMOUNT_PARTNER_ALW -
          legalValues.MAX_GIS_TOPUP_PARTNER +
          legalValues.MAX_OAS_ENTITLEMENT
      )
    } else if (
      this.gisSituation === GisSituation.AFS &&
      this.calculationMethod === 'HIGH'
    ) {
      return roundToTwo(this.covp5)
    } else {
      const gisMaxAmountAfterTopup = this.basicMaxAmount
      const gisTopup = this.basicTopupAmount
      return roundToTwo(gisMaxAmountAfterTopup - gisTopup)
    }
  }

  /**
   * Direct from government data.
   * This is the "default" max amount someone can receive.
   */
  private get basicMaxAmount() {
    switch (this.gisSituation) {
      case GisSituation.SINGLE:
        return legalValues.MAX_GIS_AMOUNT_SINGLE
      case GisSituation.PARTNER_OAS:
        return legalValues.MAX_GIS_AMOUNT_PARTNER_OAS
      case GisSituation.PARTNER_NO_OAS:
        return legalValues.MAX_GIS_AMOUNT_PARTNER_NO_OAS_NO_ALW
      case GisSituation.PARTNER_ALW:
        return legalValues.MAX_GIS_AMOUNT_PARTNER_ALW
      case GisSituation.ALW:
        return legalValues.MAX_GIS_AMOUNT_SINGLE_ALW
      case GisSituation.AFS:
        return legalValues.MAX_GIS_AMOUNT_SINGLE_AFS
    }
  }

  /**
   * Direct from government data.
   * This is the "default" topup amount, however in low-income cases,
   * the topup will be calculated instead.
   */
  private get basicTopupAmount() {
    switch (this.gisSituation) {
      case GisSituation.SINGLE:
      case GisSituation.AFS:
      case GisSituation.PARTNER_NO_OAS:
        return legalValues.MAX_GIS_TOPUP_SINGLE
      case GisSituation.PARTNER_OAS:
      case GisSituation.PARTNER_ALW:
      case GisSituation.ALW:
        return legalValues.MAX_GIS_TOPUP_PARTNER
    }
  }

  /**
   * This number will be subtracted from the maximum entitlement amount,
   * which will determine the client's true entitlement amount.
   */
  private get incomeDifferential() {
    return Math.max(
      0,
      Math.floor(
        (this.income - this.subFromIncome) /
          (this.gisIncrements * this.incomeIncrementMultiplier)
      )
    )
  }

  /**
   * Helper for incomeDifferential().
   * This number will be subtracted from the client's income.
   */
  private get subFromIncome() {
    switch (this.gisSituation) {
      case GisSituation.SINGLE:
      case GisSituation.PARTNER_OAS:
        return 0
      case GisSituation.PARTNER_NO_OAS:
        return this.incuta3
      case GisSituation.PARTNER_ALW:
        if (this.calculationMethod === 'LOW') return this.incuta5
        else if (this.calculationMethod === 'HIGH') return this.incuta3
        else return 0
      case GisSituation.ALW:
      case GisSituation.AFS:
        return this.calculationMethod === 'HIGH' ? this.incuta5 : 0
    }
  }
  /**
   * Helper for incomeDifferential().
   * This number will be multiplied by gisIncrements (24).
   */
  private get incomeIncrementMultiplier() {
    switch (this.gisSituation) {
      case GisSituation.SINGLE:
        return 1
      case GisSituation.PARTNER_OAS:
      case GisSituation.PARTNER_NO_OAS:
      case GisSituation.PARTNER_ALW:
      case GisSituation.ALW:
        return 2
      case GisSituation.AFS:
        return this.calculationMethod === 'HIGH' ? 1 : 2
    }
  }
}
