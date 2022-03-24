import { Language, Locale } from '../../utils/api/definitions/enums'
import en from './en'
import fr from './fr'

export const webDictionary = { en, fr }

export type WebTranslations = {
  _language: Language
  _locale: Locale

  oas: string
  gis: string
  alw: string
  afs: string
  testSiteTitle: string
  testSiteHeader: string
  otherLang: string
  otherLangCode: string
  langLong: string
  creator: string
  search: string
  breadcrumb1Title: string
  breadcrumb1URL: string
  breadcrumb2Title: string
  breadcrumb2URL: string
  title: string
  menuTitle: string
  clear: string
  back: string
  next: string
  questions: string
  results: string
  needHelp: string
  faq: string
  saveToCsv: string
  getResults: string
  applyHeader: string
  applyText: string
  applyForLabel: string
  required: string
  homePageHeader1: string
  homePageP1: string
  homePageP3: string
  homePageP4: string
  homePageP5: string
  homePageP6: string
  disclaimer: string
  disclaimerTitle: string
  footerlink1: string
  footerlink2: string
  footerlink3: string
  footerlink4: string
  footerlink5: string
  footerlink6: string
  footerlink7: string
  footerlink8: string
  footerlink9: string
  socialLink1: string
  socialLink2: string
  socialLink3: string
  socialLink4: string
  socialLink5: string
  category: {
    incomeDetails: string
    personalInformation: string
    legalStatus: string
  }

  //results page
  contactCTA: string
  resultsPage: {
    header: string
    tableHeader1: string
    tableHeader2: string
    tableHeader3: string
    tableTotalAmount: string
  }
  moreInfoHeader: string
  modifyAnswers: string
  modifyAnswersText: string
  errors: {
    empty: string
  }
  unavailableImageAltText: string
  govt: string
  yes: string
  no: string

  selectText: {
    maritalStatus: string
    livingCountry: string
    partnerLivingCountry: string
    default: string
  }
}
