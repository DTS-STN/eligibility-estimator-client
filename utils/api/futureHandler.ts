import { BenefitHandler } from './benefitHandler'
import { MaritalStatus } from './definitions/enums'
import { RequestSchema as schema } from './definitions/schemas'
import { buildQuery, getAgeArray } from './helpers/utils'

export class FutureHandler {
  maritalStatus: string
  query: { [key: string]: string | string[] }
  newQuery: { [key: string]: string | string[] }
  locale: string
  futureResultsObj: any
  constructor(query, locale) {
    this.maritalStatus = query.maritalStatus
    this.query = query
    this.newQuery = { ...query }
    this.locale = locale
    this.futureResultsObj = { client: null, partner: null }
  }

  get benefitResults() {
    if (this.maritalStatus === MaritalStatus.SINGLE) {
      this.futureResultsObj = this.getSingleResults()
    } else if (this.maritalStatus === MaritalStatus.WIDOWED) {
      this.futureResultsObj = this.getWidowedResults()
    } else if (this.maritalStatus === MaritalStatus.PARTNERED) {
      this.futureResultsObj = this.getPartneredResults()
    }

    return this.futureResultsObj
  }

  private getSingleResults() {
    let result = this.futureResultsObj
    if (Number(this.query.age) < 65) {
      this.newQuery['age'] = '65'
      this.newQuery['receiveOAS'] = 'false'

      if (
        this.query.livedOnlyInCanada === 'false' &&
        this.query.yearsInCanadaSince18
      ) {
        this.newQuery['yearsInCanadaSince18'] = String(
          Math.min(
            40,
            65 -
              Math.floor(Number(this.query.age)) +
              Number(this.query.yearsInCanadaSince18)
          )
        )
      }

      const { value } = schema.validate(this.newQuery, { abortEarly: false })
      const handler = new BenefitHandler(value, true)

      const eligibleBenefits = this.getEligibleBenefits(
        handler.benefitResults.client
      )

      const clientResult = [{ 65: eligibleBenefits }]

      result = {
        ...this.futureResultsObj,
        client: clientResult,
      }
    }
    return result
  }

  private getWidowedResults() {
    const age = Number(this.query.age)
    let futureAges = []
    if (age < 60) {
      futureAges = [60, 65]
    } else if (age >= 60 && age < 65) {
      futureAges = [65]
    }

    const clientResult =
      futureAges.length !== 0
        ? futureAges.map((age) => {
            this.newQuery['age'] = age

            if (age === 65) {
              this.newQuery['receiveOAS'] = 'false'
            }

            if (
              this.query.livedOnlyInCanada === 'false' &&
              this.query.yearsInCanadaSince18
            ) {
              this.newQuery['yearsInCanadaSince18'] = String(
                Math.min(
                  40,
                  65 -
                    Math.floor(Number(this.query.age)) +
                    Number(this.query.yearsInCanadaSince18)
                )
              )
            }

            const { value } = schema.validate(this.newQuery, {
              abortEarly: false,
            })
            const handler = new BenefitHandler(value, true)

            const eligibleBenefits = this.getEligibleBenefits(
              handler.benefitResults.client
            )

            return { [age]: eligibleBenefits }
          })
        : null

    return {
      ...this.futureResultsObj,
      client: clientResult,
    }
  }

  private getPartneredResults() {
    const age = Number(this.query.age)
    const partnerAge = Number(this.query.partnerAge)
    const ageFloored = Math.floor(age)
    const partnerAgeFloored = Math.floor(partnerAge)

    const ages = [ageFloored, partnerAgeFloored]
    if (ages.some((age) => isNaN(age))) return this.futureResultsObj
    const futureAges = getAgeArray(ages)

    let result = this.futureResultsObj
    if (futureAges.length !== 0) {
      const clientResults = []
      const partnerResults = []
      let benefitCounter = { oas: 0, gis: 0, alw: 0, alws: 0 }

      futureAges.forEach((ageSet) => {
        const [userAge, partnerAge] = ageSet
        const newQuery = buildQuery(this.query, ageSet)
        const { value } = schema.validate(newQuery, { abortEarly: false })
        const handler = new BenefitHandler(value, true)

        const clientEligibleBenefits = this.getEligibleBenefits(
          handler.benefitResults.client
        )

        if (clientEligibleBenefits) {
          Object.keys(clientEligibleBenefits).forEach((benefit) => {
            benefitCounter[benefit] += 1
          })
        }

        const partnerEligibleBenefits = this.getEligibleBenefits(
          handler.benefitResults.partner
        )

        if (clientEligibleBenefits) {
          clientResults.push({ [userAge]: clientEligibleBenefits })
        }
        if (partnerEligibleBenefits) {
          partnerResults.push({ [partnerAge]: partnerEligibleBenefits })
        }
      })

      // TEMPORARY: For any benefit that appears twice in future estimates, add text to indicate that these results may be different in the future since BenefitCards component will only show one occurence of each benefit.
      Object.keys(benefitCounter).forEach((benefit) => {
        if (benefitCounter[benefit] > 1) {
          const val = Object.values(clientResults[0])[0]
          const mainText = val[benefit].cardDetail.mainText
          const textToAdd =
            this.locale === 'en'
              ? `This may change in the future based on your situation.`
              : `Ceci pourrait changer dans l'avenir selon votre situation.`

          val[benefit].cardDetail.mainText = textToAdd + '</br></br>' + mainText
        }
      })

      result = {
        client: clientResults.length !== 0 ? clientResults : null,
        partner: partnerResults.length !== 0 ? partnerResults : null,
      }
    }
    return result
  }

  private getEligibleBenefits(benefits) {
    const newObj = {}
    for (const key in benefits) {
      if (benefits[key].eligibility?.result === 'eligible') {
        newObj[key] = benefits[key]
      }
    }
    return Object.keys(newObj).length === 0 ? null : newObj
  }
}
