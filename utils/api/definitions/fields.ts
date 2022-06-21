import { KeyAndText } from '../../../i18n/api'
import { FieldCategory } from './enums'

export enum FieldKey {
  INCOME = 'income',
  BIRTH_MONTH = 'birthMonth',
  BIRTH_YEAR = 'birthYear',
  AGE = 'age',
  OAS_DEFER = 'oasDefer',
  OAS_MONTH = 'oasMonth',
  OAS_YEAR = 'oasYear',
  OAS_AGE = 'oasAge',
  MARITAL_STATUS = 'maritalStatus',
  LIVING_COUNTRY = 'livingCountry',
  LEGAL_STATUS = 'legalStatus',
  LIVED_OUTSIDE_CANADA = 'livedOutsideCanada',
  YEARS_IN_CANADA_SINCE_18 = 'yearsInCanadaSince18',
  EVER_LIVED_SOCIAL_COUNTRY = 'everLivedSocialCountry',
  PARTNER_BENEFIT_STATUS = 'partnerBenefitStatus',
  PARTNER_INCOME = 'partnerIncome',
  PARTNER_BIRTH_MONTH = 'partnerBirthMonth',
  PARTNER_BIRTH_YEAR = 'partnerBirthYear',
  PARTNER_AGE = 'partnerAge',
  PARTNER_LIVING_COUNTRY = 'partnerLivingCountry',
  PARTNER_LEGAL_STATUS = 'partnerLegalStatus',
  PARTNER_LIVED_OUTSIDE_CANADA = 'partnerLivedOutsideCanada',
  PARTNER_YEARS_IN_CANADA_SINCE_18 = 'partnerYearsInCanadaSince18',
  PARTNER_EVER_LIVED_SOCIAL_COUNTRY = 'partnerEverLivedSocialCountry',
}

export enum FieldType {
  NUMBER = 'number',
  CURRENCY = 'currency',
  BOOLEAN = 'boolean',
  DROPDOWN = 'dropdown',
  DROPDOWN_SEARCHABLE = 'dropdownSearchable',
  RADIO = 'radio',
  STRING = 'string',
  CONTAINER = 'container',
}

// the order of fields here will define the order within the application
export const fieldDefinitions: FieldDefinitions = {
  [FieldKey.BIRTH_MONTH]: {
    key: FieldKey.BIRTH_MONTH,
    category: { key: FieldCategory.AGE },
    type: FieldType.NUMBER,
  },
  [FieldKey.BIRTH_YEAR]: {
    key: FieldKey.BIRTH_YEAR,
    category: { key: FieldCategory.AGE },
    type: FieldType.NUMBER,
  },
  [FieldKey.AGE]: {
    key: FieldKey.AGE,
    category: { key: FieldCategory.AGE },
    type: FieldType.CONTAINER,
    subFields: [
      {
        key: FieldKey.BIRTH_MONTH,
        category: { key: FieldCategory.AGE },
        type: FieldType.NUMBER,
      },
      {
        key: FieldKey.BIRTH_YEAR,
        category: { key: FieldCategory.AGE },
        type: FieldType.NUMBER,
      },
    ],
  },
  [FieldKey.OAS_DEFER]: {
    key: FieldKey.OAS_DEFER,
    category: { key: FieldCategory.AGE },
    type: FieldType.RADIO,
  },
  [FieldKey.OAS_MONTH]: {
    key: FieldKey.OAS_MONTH,
    category: { key: FieldCategory.AGE },
    type: FieldType.NUMBER,
  },
  [FieldKey.OAS_YEAR]: {
    key: FieldKey.OAS_YEAR,
    category: { key: FieldCategory.AGE },
    type: FieldType.NUMBER,
  },
  [FieldKey.OAS_AGE]: {
    key: FieldKey.OAS_AGE,
    category: { key: FieldCategory.AGE },
    type: FieldType.CONTAINER,
    subFields: [
      {
        key: FieldKey.BIRTH_MONTH,
        category: { key: FieldCategory.AGE },
        type: FieldType.NUMBER,
      },
      {
        key: FieldKey.BIRTH_YEAR,
        category: { key: FieldCategory.AGE },
        type: FieldType.NUMBER,
      },
    ],
  },
  [FieldKey.INCOME]: {
    key: FieldKey.INCOME,
    category: { key: FieldCategory.INCOME },
    type: FieldType.CURRENCY,
  },
  [FieldKey.LEGAL_STATUS]: {
    key: FieldKey.LEGAL_STATUS,
    category: { key: FieldCategory.LEGAL },
    type: FieldType.RADIO,
    default: undefined,
  },
  [FieldKey.LIVING_COUNTRY]: {
    key: FieldKey.LIVING_COUNTRY,
    category: { key: FieldCategory.RESIDENCE },
    type: FieldType.DROPDOWN_SEARCHABLE,
    default: { key: 'CAN', text: 'Canada' },
  },
  [FieldKey.LIVED_OUTSIDE_CANADA]: {
    key: FieldKey.LIVED_OUTSIDE_CANADA,
    category: { key: FieldCategory.RESIDENCE },
    type: FieldType.RADIO,
  },
  [FieldKey.YEARS_IN_CANADA_SINCE_18]: {
    key: FieldKey.YEARS_IN_CANADA_SINCE_18,
    category: { key: FieldCategory.RESIDENCE },
    type: FieldType.NUMBER,
  },
  [FieldKey.EVER_LIVED_SOCIAL_COUNTRY]: {
    key: FieldKey.EVER_LIVED_SOCIAL_COUNTRY,
    category: { key: FieldCategory.RESIDENCE },
    type: FieldType.BOOLEAN,
    default: undefined,
  },
  [FieldKey.MARITAL_STATUS]: {
    key: FieldKey.MARITAL_STATUS,
    category: { key: FieldCategory.MARITAL },
    type: FieldType.RADIO,
    default: undefined,
  },
  [FieldKey.PARTNER_INCOME]: {
    key: FieldKey.PARTNER_INCOME,
    relatedKey: FieldKey.INCOME,
    category: { key: FieldCategory.MARITAL },
    type: FieldType.CURRENCY,
  },
  [FieldKey.PARTNER_BENEFIT_STATUS]: {
    key: FieldKey.PARTNER_BENEFIT_STATUS,
    category: { key: FieldCategory.MARITAL },
    type: FieldType.RADIO,
    default: undefined,
  },
  [FieldKey.PARTNER_BIRTH_MONTH]: {
    key: FieldKey.PARTNER_BIRTH_MONTH,
    category: { key: FieldCategory.MARITAL },
    type: FieldType.NUMBER,
  },
  [FieldKey.PARTNER_BIRTH_YEAR]: {
    key: FieldKey.PARTNER_BIRTH_YEAR,
    category: { key: FieldCategory.MARITAL },
    type: FieldType.NUMBER,
  },
  [FieldKey.PARTNER_AGE]: {
    key: FieldKey.PARTNER_AGE,
    relatedKey: FieldKey.AGE,
    category: { key: FieldCategory.MARITAL },
    type: FieldType.CONTAINER,
    subFields: [
      {
        key: FieldKey.BIRTH_MONTH,
        category: { key: FieldCategory.MARITAL },
        type: FieldType.NUMBER,
      },
      {
        key: FieldKey.BIRTH_YEAR,
        category: { key: FieldCategory.MARITAL },
        type: FieldType.NUMBER,
      },
    ],
  },
  [FieldKey.PARTNER_LEGAL_STATUS]: {
    key: FieldKey.PARTNER_LEGAL_STATUS,
    relatedKey: FieldKey.LEGAL_STATUS,
    category: { key: FieldCategory.MARITAL },
    type: FieldType.RADIO,
    default: undefined,
  },
  [FieldKey.PARTNER_LIVING_COUNTRY]: {
    key: FieldKey.PARTNER_LIVING_COUNTRY,
    relatedKey: FieldKey.LIVING_COUNTRY,
    category: { key: FieldCategory.MARITAL },
    type: FieldType.DROPDOWN_SEARCHABLE,
    default: { key: 'CAN', text: 'Canada' },
  },
  [FieldKey.PARTNER_LIVED_OUTSIDE_CANADA]: {
    key: FieldKey.PARTNER_LIVED_OUTSIDE_CANADA,
    relatedKey: FieldKey.LIVED_OUTSIDE_CANADA,
    category: { key: FieldCategory.MARITAL },
    type: FieldType.RADIO,
  },
  [FieldKey.PARTNER_YEARS_IN_CANADA_SINCE_18]: {
    key: FieldKey.PARTNER_YEARS_IN_CANADA_SINCE_18,
    relatedKey: FieldKey.YEARS_IN_CANADA_SINCE_18,
    category: { key: FieldCategory.MARITAL },
    type: FieldType.NUMBER,
    placeholder: '40',
  },
  [FieldKey.PARTNER_EVER_LIVED_SOCIAL_COUNTRY]: {
    key: FieldKey.PARTNER_EVER_LIVED_SOCIAL_COUNTRY,
    category: { key: FieldCategory.MARITAL },
    type: FieldType.BOOLEAN,
    default: undefined,
  },
}

export type FieldData =
  | FieldDataCurrency
  | FieldDataNumber
  | FieldDataBoolean
  | FieldDataRadio
  | FieldDataDropdown
  | FieldDataString
  | FieldDataContainer

interface FieldDataGeneric {
  key: FieldKey
  relatedKey?: FieldKey // in case certain props should use those of another key when missing
  label?: string // applied via translator
  helpText?: string
  category: {
    key: FieldCategory
    text?: string // applied via translator
  }
}

interface FieldDataContainer extends FieldDataGeneric {
  type: FieldType.CONTAINER
  subFields: FieldData[]
}

interface FieldDataCurrency extends FieldDataGeneric {
  type: FieldType.CURRENCY
  placeholder?: string
}

interface FieldDataNumber extends FieldDataGeneric {
  type: FieldType.NUMBER
  placeholder?: string
}

interface FieldDataBoolean extends FieldDataGeneric {
  type: FieldType.BOOLEAN
  default?: string
}

interface FieldDataRadio extends FieldDataGeneric {
  type: FieldType.RADIO
  values?: Array<KeyAndText> // applied via translator
  default?: KeyAndText
}

export interface FieldDataDropdown extends FieldDataGeneric {
  type: FieldType.DROPDOWN | FieldType.DROPDOWN_SEARCHABLE
  values?: Array<KeyAndText> // applied via translator
  default?: KeyAndText
}

interface FieldDataString extends FieldDataGeneric {
  type: FieldType.STRING
  placeholder?: string
}

type FieldDefinitions = {
  [x in FieldKey]: FieldData
}
