import {
  EntitlementResultType,
  LegalStatus,
  LivingCountry,
  MaritalStatus,
  PartnerBenefitStatus,
  ResultKey,
  ResultReason,
} from '../../../utils/api/definitions/enums'
import { legalValues } from '../../../utils/api/scrapers/output'
import {
  canadaWholeLife,
  expectAfsEligible,
  expectAlwEligible,
  expectGisEligible,
  expectOasEligible,
  partnerNoHelpNeeded,
  partnerUndefined,
} from './expectUtils'
import { mockGetRequest, mockPartialGetRequest } from './factory'

describe('OAS entitlement scenarios', () => {
  it('returns "eligible for $619.38" when 39 years in Canada (rounding test)', async () => {
    const res = await mockGetRequest({
      income: 10000,
      age: 65,
      maritalStatus: MaritalStatus.SINGLE,
      livingCountry: LivingCountry.CANADA,
      legalStatus: LegalStatus.CANADIAN_CITIZEN,
      canadaWholeLife: false,
      yearsInCanadaSince18: 39,
      everLivedSocialCountry: undefined,
      ...partnerUndefined,
    })
    expectOasEligible(res, EntitlementResultType.PARTIAL, 632.45)
  })
})

describe('GIS entitlement scenarios', () => {
  it('returns "$394.68" when single and 10000 income', async () => {
    const res = await mockGetRequest({
      income: 10000,
      age: 65,
      maritalStatus: MaritalStatus.SINGLE,
      livingCountry: LivingCountry.CANADA,
      legalStatus: LegalStatus.CANADIAN_CITIZEN,
      ...canadaWholeLife,
      ...partnerUndefined,
    })
    expectGisEligible(res, 402.79)
  })
  it('returns "$959.26" when single and 0 income', async () => {
    const res = await mockGetRequest({
      income: 0,
      age: 65,
      maritalStatus: MaritalStatus.SINGLE,
      livingCountry: LivingCountry.CANADA,
      legalStatus: LegalStatus.CANADIAN_CITIZEN,
      ...canadaWholeLife,
      ...partnerUndefined,
    })
    expectGisEligible(res, 968.86)
  })
  it('returns "$850.26" when married and 10000 income and no partner OAS', async () => {
    const res = await mockGetRequest({
      income: 10000,
      age: 65,
      maritalStatus: MaritalStatus.MARRIED,
      livingCountry: LivingCountry.CANADA,
      legalStatus: LegalStatus.CANADIAN_CITIZEN,
      ...canadaWholeLife,
      partnerBenefitStatus: PartnerBenefitStatus.NONE,
      partnerIncome: 0,
      ...partnerNoHelpNeeded,
    })
    expectGisEligible(res, 861.86)
  })
  it('returns "$959.26" when married and 0 income and no partner OAS', async () => {
    const res = await mockGetRequest({
      income: 0,
      age: 65,
      maritalStatus: MaritalStatus.MARRIED,
      livingCountry: LivingCountry.CANADA,
      legalStatus: LegalStatus.CANADIAN_CITIZEN,
      ...canadaWholeLife,
      partnerBenefitStatus: PartnerBenefitStatus.NONE,
      partnerIncome: 0,
      ...partnerNoHelpNeeded,
    })
    expectGisEligible(res, 968.86)
  })
  it('returns "$819.26" when married and 10000 income + 1000 partner income and no partner OAS', async () => {
    const res = await mockGetRequest({
      income: 10000,
      age: 65,
      maritalStatus: MaritalStatus.MARRIED,
      livingCountry: LivingCountry.CANADA,
      legalStatus: LegalStatus.CANADIAN_CITIZEN,
      ...canadaWholeLife,
      partnerBenefitStatus: PartnerBenefitStatus.NONE,
      partnerIncome: 1000,
      ...partnerNoHelpNeeded,
    })
    expectGisEligible(res, 830.86)
  })
  it('returns "$306.33" when married and 10000 income + 1000 partner income and partner OAS', async () => {
    const res = await mockGetRequest({
      income: 10000,
      age: 65,
      maritalStatus: MaritalStatus.MARRIED,
      livingCountry: LivingCountry.CANADA,
      legalStatus: LegalStatus.CANADIAN_CITIZEN,
      ...canadaWholeLife,
      partnerBenefitStatus: PartnerBenefitStatus.OAS_GIS,
      partnerIncome: 1000,
      ...partnerNoHelpNeeded,
    })
    expectGisEligible(res, 311.68)
  })
  it('returns "$521.33" when married and 10000 income + 1000 partner income and partner Allowance', async () => {
    const res = await mockGetRequest({
      income: 10000,
      age: 65,
      maritalStatus: MaritalStatus.MARRIED,
      livingCountry: LivingCountry.CANADA,
      legalStatus: LegalStatus.CANADIAN_CITIZEN,
      ...canadaWholeLife,
      partnerBenefitStatus: PartnerBenefitStatus.ALW,
      partnerIncome: 1000,
      ...partnerNoHelpNeeded,
    })
    expectGisEligible(res, 528.68)
  })
  it('returns "$577.43" when married and 0 income + 0 partner income and partner OAS', async () => {
    const res = await mockGetRequest({
      income: 0,
      age: 65,
      maritalStatus: MaritalStatus.MARRIED,
      livingCountry: LivingCountry.CANADA,
      legalStatus: LegalStatus.CANADIAN_CITIZEN,
      ...canadaWholeLife,
      partnerBenefitStatus: PartnerBenefitStatus.OAS_GIS,
      partnerIncome: 0,
      ...partnerNoHelpNeeded,
    })
    expectGisEligible(res, 583.2)
  })
  it('returns "$577.43" when married and 0 income + 0 partner income and partner Allowance', async () => {
    const res = await mockGetRequest({
      income: 0,
      age: 65,
      maritalStatus: MaritalStatus.MARRIED,
      livingCountry: LivingCountry.CANADA,
      legalStatus: LegalStatus.CANADIAN_CITIZEN,
      ...canadaWholeLife,
      partnerBenefitStatus: PartnerBenefitStatus.ALW,
      partnerIncome: 0,
      ...partnerNoHelpNeeded,
    })
    expectGisEligible(res, 583.2)
  })
  it('returns "$1239.38" when single and 1000 income, only 20 years in Canada (Partial OAS)', async () => {
    const res = await mockGetRequest({
      income: 1000,
      age: 65,
      maritalStatus: MaritalStatus.SINGLE,
      livingCountry: LivingCountry.CANADA,
      legalStatus: LegalStatus.CANADIAN_CITIZEN,
      canadaWholeLife: false,
      yearsInCanadaSince18: 20,
      everLivedSocialCountry: undefined,
      ...partnerUndefined,
    })
    expectGisEligible(res, 1252.2)
  })
  it('returns "$1399.95" when single and 1000 income, only 10 years in Canada (Partial OAS)', async () => {
    const res = await mockGetRequest({
      income: 1000,
      age: 65,
      maritalStatus: MaritalStatus.SINGLE,
      livingCountry: LivingCountry.CANADA,
      legalStatus: LegalStatus.CANADIAN_CITIZEN,
      canadaWholeLife: false,
      yearsInCanadaSince18: 10,
      everLivedSocialCountry: undefined,
      ...partnerUndefined,
    })
    expectGisEligible(res, 1414.36)
  })
})

describe('basic Allowance scenarios', () => {
  it('returns "ineligible" when widowed', async () => {
    const res = await mockGetRequest({
      income: 10000,
      age: 60,
      maritalStatus: MaritalStatus.WIDOWED,
      livingCountry: LivingCountry.CANADA,
      legalStatus: LegalStatus.CANADIAN_CITIZEN,
      canadaWholeLife: false,
      yearsInCanadaSince18: 10,
      everLivedSocialCountry: undefined,
      ...partnerUndefined,
    })
    expect(res.body.results.alw.eligibility.result).toEqual(
      ResultKey.INELIGIBLE
    )
    expect(res.body.results.alw.eligibility.reason).toEqual(
      ResultReason.MARITAL
    )
  })

  it('returns "ineligible" when partner not receiving OAS', async () => {
    const res = await mockGetRequest({
      income: 10000,
      age: 60,
      maritalStatus: MaritalStatus.MARRIED,
      livingCountry: LivingCountry.CANADA,
      legalStatus: LegalStatus.CANADIAN_CITIZEN,
      canadaWholeLife: false,
      yearsInCanadaSince18: 10,
      everLivedSocialCountry: undefined,
      partnerBenefitStatus: PartnerBenefitStatus.NONE,
      partnerIncome: 0,
      ...partnerNoHelpNeeded,
    })
    expect(res.body.results.alw.eligibility.result).toEqual(
      ResultKey.INELIGIBLE
    )
    expect(res.body.results.alw.eligibility.reason).toEqual(
      ResultReason.PARTNER
    )
  })

  it('returns "eligible" when living in No Agreement and 10 years in Canada', async () => {
    const res = await mockGetRequest({
      income: 10000,
      age: 60,
      maritalStatus: MaritalStatus.MARRIED,
      livingCountry: LivingCountry.NO_AGREEMENT,
      legalStatus: LegalStatus.CANADIAN_CITIZEN,
      canadaWholeLife: false,
      yearsInCanadaSince18: 10,
      everLivedSocialCountry: false,
      partnerBenefitStatus: PartnerBenefitStatus.OAS_GIS,
      partnerIncome: 0,
      ...partnerNoHelpNeeded,
    })
    expectAlwEligible(res)
  })
  it('returns "ineligible" when living in No Agreement and under 10 years in Canada', async () => {
    const res = await mockGetRequest({
      income: 10000,
      age: 60,
      maritalStatus: MaritalStatus.MARRIED,
      livingCountry: LivingCountry.NO_AGREEMENT,
      legalStatus: LegalStatus.CANADIAN_CITIZEN,
      canadaWholeLife: false,
      yearsInCanadaSince18: 9,
      everLivedSocialCountry: false,
      partnerBenefitStatus: PartnerBenefitStatus.OAS_GIS,
      partnerIncome: 0,
      ...partnerNoHelpNeeded,
    })
    expect(res.body.results.alw.eligibility.result).toEqual(
      ResultKey.INELIGIBLE
    )
    expect(res.body.results.alw.eligibility.reason).toEqual(
      ResultReason.YEARS_IN_CANADA
    )
  })
})

describe('Allowance entitlement scenarios', () => {
  it('returns "eligible for $334.33" when 40 years in Canada and income=20000', async () => {
    const res = await mockGetRequest({
      income: 20000,
      age: 60,
      maritalStatus: MaritalStatus.MARRIED,
      livingCountry: LivingCountry.CANADA,
      legalStatus: LegalStatus.CANADIAN_CITIZEN,
      ...canadaWholeLife,
      partnerBenefitStatus: PartnerBenefitStatus.OAS_GIS,
      partnerIncome: 0,
      ...partnerNoHelpNeeded,
    })
    expectAlwEligible(res, 341.68)
  })

  it('returns "eligible for $565.35" when 40 years in Canada and income=10000', async () => {
    const res = await mockGetRequest({
      income: 10000,
      age: 60,
      maritalStatus: MaritalStatus.MARRIED,
      livingCountry: LivingCountry.CANADA,
      legalStatus: LegalStatus.CANADIAN_CITIZEN,
      ...canadaWholeLife,
      partnerBenefitStatus: PartnerBenefitStatus.OAS_GIS,
      partnerIncome: 0,
      ...partnerNoHelpNeeded,
    })
    expectAlwEligible(res, 565.35)
  })
  it('returns "eligible for $1231.87" when 40 years in Canada and income=0', async () => {
    const res = await mockGetRequest({
      income: 0,
      age: 60,
      maritalStatus: MaritalStatus.MARRIED,
      livingCountry: LivingCountry.CANADA,
      legalStatus: LegalStatus.CANADIAN_CITIZEN,
      ...canadaWholeLife,
      partnerBenefitStatus: PartnerBenefitStatus.OAS_GIS,
      partnerIncome: 0,
      ...partnerNoHelpNeeded,
    })
    expectAlwEligible(res, 1231.87)
  })
})

describe('basic Allowance for Survivor scenarios', () => {
  it(`returns "ineligible" when income equal to ${legalValues.MAX_AFS_INCOME}`, async () => {
    const res = await mockGetRequest({
      income: legalValues.MAX_AFS_INCOME,
      age: 60,
      maritalStatus: MaritalStatus.WIDOWED,
      livingCountry: LivingCountry.CANADA,
      legalStatus: LegalStatus.CANADIAN_CITIZEN,
      ...canadaWholeLife,
      ...partnerUndefined,
    })
    expect(res.body.results.afs.eligibility.result).toEqual(
      ResultKey.INELIGIBLE
    )
    expect(res.body.results.afs.eligibility.reason).toEqual(ResultReason.INCOME)
  })
  it('returns "ineligible due to age" when age 65 and high income', async () => {
    const res = await mockPartialGetRequest({
      income: 26257,
      age: 65,
      maritalStatus: MaritalStatus.WIDOWED,
      livingCountry: LivingCountry.CANADA,
      legalStatus: LegalStatus.CANADIAN_CITIZEN,
      ...canadaWholeLife,
      ...partnerUndefined,
    })
    expect(res.body.results.afs.eligibility.result).toEqual(
      ResultKey.INELIGIBLE
    )
    expect(res.body.results.afs.eligibility.reason).toEqual(ResultReason.AGE)
  })
  it('returns "ineligible" when age over 64', async () => {
    const res = await mockGetRequest({
      income: 10000,
      age: 65,
      maritalStatus: MaritalStatus.WIDOWED,
      livingCountry: LivingCountry.CANADA,
      legalStatus: LegalStatus.CANADIAN_CITIZEN,
      canadaWholeLife: false,
      yearsInCanadaSince18: 20,
      everLivedSocialCountry: undefined,
      ...partnerUndefined,
    })
    expect(res.body.results.afs.eligibility.result).toEqual(
      ResultKey.INELIGIBLE
    )
    expect(res.body.results.afs.eligibility.reason).toEqual(ResultReason.AGE)
  })
  it('returns "ineligible" when age under 60', async () => {
    const res = await mockGetRequest({
      income: 10000,
      age: 59,
      maritalStatus: MaritalStatus.WIDOWED,
      livingCountry: LivingCountry.CANADA,
      legalStatus: LegalStatus.CANADIAN_CITIZEN,
      canadaWholeLife: false,
      yearsInCanadaSince18: 20,
      everLivedSocialCountry: undefined,
      ...partnerUndefined,
    })
    expect(res.body.results.afs.eligibility.result).toEqual(
      ResultKey.INELIGIBLE
    )
    expect(res.body.results.afs.eligibility.reason).toEqual(
      ResultReason.AGE_YOUNG
    )
  })
  it('returns "unavailable" when not citizen (other)', async () => {
    const res = await mockGetRequest({
      income: 10000,
      age: 60,
      maritalStatus: MaritalStatus.WIDOWED,
      livingCountry: LivingCountry.CANADA,
      legalStatus: LegalStatus.OTHER,
      canadaWholeLife: false,
      yearsInCanadaSince18: 20,
      everLivedSocialCountry: undefined,
      ...partnerUndefined,
    })
    expect(res.body.results.afs.eligibility.result).toEqual(
      ResultKey.UNAVAILABLE
    )
    expect(res.body.results.afs.eligibility.reason).toEqual(
      ResultReason.LEGAL_STATUS
    )
  })
  it('returns "ineligible" when citizen and under 10 years in Canada', async () => {
    const res = await mockGetRequest({
      income: 10000,
      age: 60,
      maritalStatus: MaritalStatus.WIDOWED,
      livingCountry: LivingCountry.CANADA,
      legalStatus: LegalStatus.CANADIAN_CITIZEN,
      canadaWholeLife: false,
      yearsInCanadaSince18: 9,
      everLivedSocialCountry: false,
      ...partnerUndefined,
    })
    expect(res.body.results.afs.eligibility.result).toEqual(
      ResultKey.INELIGIBLE
    )
    expect(res.body.results.afs.eligibility.reason).toEqual(
      ResultReason.YEARS_IN_CANADA
    )
  })
  it('returns "ineligible" when married', async () => {
    const res = await mockGetRequest({
      income: 10000,
      age: 60,
      maritalStatus: MaritalStatus.MARRIED,
      livingCountry: LivingCountry.CANADA,
      legalStatus: LegalStatus.CANADIAN_CITIZEN,
      canadaWholeLife: false,
      yearsInCanadaSince18: 10,
      everLivedSocialCountry: undefined,
      partnerBenefitStatus: PartnerBenefitStatus.NONE,
      partnerIncome: 0,
      ...partnerNoHelpNeeded,
    })
    expect(res.body.results.afs.eligibility.result).toEqual(
      ResultKey.INELIGIBLE
    )
    expect(res.body.results.afs.eligibility.reason).toEqual(
      ResultReason.MARITAL
    )
  })
  it('returns "eligible" when widowed', async () => {
    const res = await mockGetRequest({
      income: 10000,
      age: 60,
      maritalStatus: MaritalStatus.WIDOWED,
      livingCountry: LivingCountry.CANADA,
      legalStatus: LegalStatus.CANADIAN_CITIZEN,
      canadaWholeLife: false,
      yearsInCanadaSince18: 10,
      everLivedSocialCountry: undefined,
      ...partnerUndefined,
    })
    expectAfsEligible(res)
  })
  it('returns "eligible" when living in Agreement and 10 years in Canada', async () => {
    const res = await mockGetRequest({
      income: 10000,
      age: 60,
      maritalStatus: MaritalStatus.WIDOWED,
      livingCountry: LivingCountry.AGREEMENT,
      legalStatus: LegalStatus.CANADIAN_CITIZEN,
      canadaWholeLife: false,
      yearsInCanadaSince18: 10,
      everLivedSocialCountry: undefined,
      ...partnerUndefined,
    })
    expectAfsEligible(res)
  })
  it('returns "unavailable" when living in Agreement and under 10 years in Canada', async () => {
    const res = await mockGetRequest({
      income: 10000,
      age: 60,
      maritalStatus: MaritalStatus.WIDOWED,
      livingCountry: LivingCountry.AGREEMENT,
      legalStatus: LegalStatus.CANADIAN_CITIZEN,
      canadaWholeLife: false,
      yearsInCanadaSince18: 9,
      everLivedSocialCountry: undefined,
      ...partnerUndefined,
    })
    expect(res.body.results.afs.eligibility.result).toEqual(
      ResultKey.UNAVAILABLE
    )
    expect(res.body.results.afs.eligibility.reason).toEqual(
      ResultReason.YEARS_IN_CANADA
    )
  })
  it('returns "eligible" when living in No Agreement and 10 years in Canada', async () => {
    const res = await mockGetRequest({
      income: 10000,
      age: 60,
      maritalStatus: MaritalStatus.WIDOWED,
      livingCountry: LivingCountry.NO_AGREEMENT,
      legalStatus: LegalStatus.CANADIAN_CITIZEN,
      canadaWholeLife: false,
      yearsInCanadaSince18: 10,
      everLivedSocialCountry: false,
      ...partnerUndefined,
    })
    expectAfsEligible(res)
  })
  it('returns "ineligible" when living in No Agreement and under 10 years in Canada', async () => {
    const res = await mockGetRequest({
      income: 10000,
      age: 60,
      maritalStatus: MaritalStatus.WIDOWED,
      livingCountry: LivingCountry.NO_AGREEMENT,
      legalStatus: LegalStatus.CANADIAN_CITIZEN,
      canadaWholeLife: false,
      yearsInCanadaSince18: 9,
      everLivedSocialCountry: false,
      ...partnerUndefined,
    })
    expect(res.body.results.afs.eligibility.result).toEqual(
      ResultKey.INELIGIBLE
    )
    expect(res.body.results.afs.eligibility.reason).toEqual(
      ResultReason.YEARS_IN_CANADA
    )
  })
  it('returns "ineligible" when under 60, legal=other', async () => {
    const res = await mockGetRequest({
      income: 10000,
      age: 55,
      maritalStatus: MaritalStatus.WIDOWED,
      livingCountry: LivingCountry.CANADA,
      legalStatus: LegalStatus.OTHER,
      canadaWholeLife: false,
      yearsInCanadaSince18: 10,
      everLivedSocialCountry: false,
      ...partnerUndefined,
    })
    expect(res.body.results.afs.eligibility.result).toEqual(
      ResultKey.INELIGIBLE
    )
    expect(res.body.results.afs.eligibility.reason).toEqual(
      ResultReason.AGE_YOUNG
    )
  })
})

describe('AFS entitlement scenarios', () => {
  it('returns "eligible for $260.10" when 40 years in Canada and income=20000', async () => {
    const res = await mockGetRequest({
      income: 20000,
      age: 60,
      maritalStatus: MaritalStatus.WIDOWED,
      livingCountry: LivingCountry.CANADA,
      legalStatus: LegalStatus.CANADIAN_CITIZEN,
      ...canadaWholeLife,
      ...partnerUndefined,
    })
    expectAfsEligible(res, 270.73)
  })
  it('returns "eligible for $681.35" when 40 years in Canada and income=10000', async () => {
    const res = await mockGetRequest({
      income: 10000,
      age: 60,
      maritalStatus: MaritalStatus.WIDOWED,
      livingCountry: LivingCountry.CANADA,
      legalStatus: LegalStatus.CANADIAN_CITIZEN,
      ...canadaWholeLife,
      ...partnerUndefined,
    })
    expectAfsEligible(res, 694.4)
  })
  it('returns "eligible for $1468.47" when 40 years in Canada and income=0', async () => {
    const res = await mockGetRequest({
      income: 0,
      age: 60,
      maritalStatus: MaritalStatus.WIDOWED,
      livingCountry: LivingCountry.CANADA,
      legalStatus: LegalStatus.CANADIAN_CITIZEN,
      ...canadaWholeLife,
      ...partnerUndefined,
    })
    expectAfsEligible(res, 1468.47)
  })
})
