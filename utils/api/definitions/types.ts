import { Language, Translations } from '../../../i18n/api'
import {
  LegalStatusHelper,
  LivingCountryHelper,
  MaritalStatusHelper,
  PartnerBenefitStatusHelper,
} from '../helpers/fieldClasses'
import {
  EstimationSummaryState,
  LegalStatus,
  MaritalStatus,
  PartnerBenefitStatus,
  ResultKey,
  ResultReason,
} from './enums'
import { FieldData, FieldKey } from './fields'

/**
 * What the API expects to receive. This is passed to Joi for validation.
 */
export interface RequestInput {
  income: number // personal income
  age: number
  maritalStatus: MaritalStatus
  livingCountry: string // country code
  legalStatus: LegalStatus
  legalStatusOther: string
  yearsInCanadaSince18: number
  everLivedSocialCountry: boolean
  partnerIncome: number // partner income
  partnerBenefitStatus: PartnerBenefitStatus
  _language?: Language
}

/**
 * After Joi validation and additional pre-processing, this is the object passed around to provide app logic.
 */
export interface ProcessedInput {
  income?: number // sum of personal and partner
  age?: number
  maritalStatus: MaritalStatusHelper
  livingCountry: LivingCountryHelper
  legalStatus: LegalStatusHelper
  legalStatusOther?: string
  yearsInCanadaSince18?: number
  everLivedSocialCountry?: boolean
  partnerBenefitStatus: PartnerBenefitStatusHelper
  _translations: Translations
}

export interface BenefitResult {
  eligibilityResult: ResultKey
  entitlementResult: number // -1 here means unavailable
  reason: ResultReason
  detail: string
}

export interface BenefitResultsObject {
  oas?: BenefitResult
  gis?: BenefitResult
  allowance?: BenefitResult
  afs?: BenefitResult
}

export interface ResponseSuccess {
  results: BenefitResultsObject
  summary: SummaryObject
  visibleFields: Array<FieldKey>
  missingFields: Array<FieldKey>
  fieldData: Array<FieldData>
}

export interface ResponseError {
  error: string
  detail: any
}

export interface Link {
  text: string
  url: string
  order: number
}

export interface SummaryObject {
  state: EstimationSummaryState
  title: string
  details: string
  links: Link[]
}
