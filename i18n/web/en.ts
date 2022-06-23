import { WebTranslations } from '.'
import {
  Language,
  Locale,
  ValidationErrors,
} from '../../utils/api/definitions/enums'
import apiEn from '../api/en'

const en: WebTranslations = {
  _language: Language.EN,
  _locale: Locale.EN,

  oas: 'Old Age Security',
  gis: 'Guaranteed Income Supplement',
  alw: 'Allowance',
  allowance: 'Allowance',
  afs: 'Allowance for the Survivor',
  testSiteTitle: 'TEST SITE',
  testSiteHeader:
    'You cannot apply for services or benefits through this test site. Parts of this site may not work and will change.',
  otherLang: 'Français',
  otherLangCode: 'FR',
  langLong: 'eng',
  creator: 'Employment and Social Development Canada',
  search: 'Search Canada.ca',
  breadcrumb1Title: 'Canada.ca',
  breadcrumb1URL: 'https://www.canada.ca',
  breadcrumb2Title: 'Service Canada',
  breadcrumb2URL:
    'https://www.canada.ca/en/employment-social-development/corporate/portfolio/service-canada.html',
  title: 'Canadian Old Age Benefits Estimator',
  menuTitle: 'Service Canada',
  clear: 'Clear',
  back: 'Back',
  next: 'Next',
  questions: 'Questions',
  results: 'Results',
  needHelp: 'Need help?',
  faq: 'Frequently Asked Questions',
  saveToCsv: 'Download',
  nextStep: 'Next step',
  getResults: 'Get Results',
  getEstimate: 'Estimate my benefits',
  applyHeader: 'Apply for benefits',
  applyText:
    'Now that you have estimated your benefits, please use the button(s) below to apply.',
  applyForLabel: 'Apply for',
  required: 'required',
  homePageP1:
    'Use this estimator to find out how much money you could get from old age benefit programs. You can enter your current information, or you can enter future information for planning purposes.',
  homePageHeader1: 'Who these benefits are for',
  youMayBeEligible: 'You may be eligible for old age benefits if you are:',
  atLeast60: 'at least 60 years old',
  haveNetIncomeLess: 'have a net income less than $133,141 CAD',
  headerWhatToKnow: 'What to know before you begin',
  pleaseNodeText:
    'Please note that this is an estimator and not an application for benefits.',
  estimatorIncludeQuestionText: "You'll need information about your:",
  ageText: '<b>age</b>',
  netIncomeText:
    '<b>net income</b> (you can find this on line 23600 of your income tax return)',
  legalStatusText:
    '<b>legal status</b> (such as Canadian citizen, Indian Status, or permanent resident)',
  residenceHistoryText:
    '<b>residence history</b> (number of years lived in Canada)',
  maritalStatusText: '<b>marital status</b>',
  partnerText: `if applicable, <b>your partner's</b> income (including their old age benefits), legal status, and residence history`,
  timeToCompleteText: 'Time to complete',
  startBenefitsEstimator: 'Start benefits estimator',
  estimatorTimeEstimate:
    'This estimator will take about 5 to 10 minutes to complete.',
  whatBenefitsTheEstimatorIsFor: 'What benefits the estimator is for',
  benefitAvailable: 'A benefit available to those 65 and older',
  learnMoreAboutOldAgeSecurity: `<a className="underline text-default-text" href="${apiEn.links.oasOverview.url}" target="_blank">Learn more about Old Age Security</a>`,
  gisDefinitionText:
    'A benefit available to those 65 and older. Learn more about Old Age Security Guaranteed Income Supplement A benefit available to those who receive Old Age Security benefits, are aged 65 and older, have a low income, and are living in Canada.',
  learnMoreAboutGis: `<a className="underline text-default-text" href="${apiEn.links.gisOverview.url}" target="_blank">Learn more about the Guaranteed Income Supplement</a>`,
  alwDefinitionText:
    'A benefit available to low-income individuals aged 60 to 64, whose spouse or common-law partner receives the Guaranteed Income Supplement.',
  learnMoreAboutAlw: `<a className="underline text-default-text" href="${apiEn.links.alwOverview.url}" target="_blank">Learn more about the Allowance</a>`,
  afsDefinitionText:
    'A benefit available to low-income individuals aged 60 to 64, who are living in Canada, and whose spouse or common-law partner has passed away.',
  learnMoreAboutAfs: `<a className="underline text-default-text" href="${apiEn.links.afsOverview.url}" target="_blank">Learn more about the Allowance for the Survivor</a>`,
  notIncludeCPP:
    'This estimator tool does not include the Canada Pension Plan (CPP) retirement pension.',
  learnMoreAboutCpp: `<a className="underline text-default-text" href="${apiEn.links.cpp.url}" target="_blank">Learn more about the Canada Pension Plan</a>`,
  aboutResultText: 'About the results',
  resultDefinition: `The results are estimates and not a final decision. For a more accurate assessment of your estimated benefits amount, please <a className='text-default-text underline' target='_blank' href='https://www.canada.ca/en/employment-social-development/corporate/contact/oas.html'>contact Service Canada</a>. The results are not financial advice.`,
  privacyHeading: 'Privacy',
  privacyDefinition:
    'Your information is private. The personal information provided is governed in accordance with the <a className="underline text-default-text" href="https://laws-lois.justice.gc.ca/eng/acts/P-21/index.html" target="_blank">Privacy Act</a>. The estimator does not collect information that would enable personal identification. Your anonymous results may be collected for research purposes.',
  homePageP3:
    'The Old Age Security pension is a monthly payment you can get if you are 65 and older. In most cases, Service Canada will be able to automatically enroll you. In other cases, you will have to apply. Service Canada will inform you if you have been automatically enrolled.',
  homePageP4:
    'The Guaranteed Income Supplement is a monthly non-taxable benefit for Old Age Security pension recipients aged 65 and older who have a low income and are living in Canada.',
  homePageP5:
    'The Allowance is a monthly benefit available to low-income individuals aged 60 to 64 whose spouse or common-law partner receives the Guaranteed Income Supplement.',
  homePageP6:
    'The Allowance for the Survivor is a monthly benefit available to individuals aged 60 to 64 who have a low income, who are living in Canada, and whose spouse or common-law partner has passed away.',
  disclaimerTitle: 'Privacy and terms of use',
  disclaimer: `The Canadian Old Age Benefits Estimator does not collect or transmit any personal information. Anonymous usage data may be collected for research purposes. The information provided is governed in accordance with the <a className="underline text-default-text" href="https://laws-lois.justice.gc.ca/eng/acts/P-21/index.html" target="_blank">Privacy Act</a>.</br></br>Please note that any information provided by this tool is only an estimate, and should not be considered financial advice. For an official assessment, you are encouraged to contact <a className='text-default-text underline' target='_blank' href='https://www.canada.ca/en/employment-social-development/corporate/contact/oas.html'>Service Canada</a>.`,
  footerlink1: 'Contact Us',
  footerlink2: 'Prime Minister',
  footerlink3: 'Treaties, laws and regulations',
  footerlink4: 'Public service and military',
  footerlink5: 'Open government',
  footerlink6: 'News',
  footerlink7: 'Departments and agencies',
  footerlink8: 'About government',
  footerlink9: 'Government-wide reporting',
  socialLink1: 'Social media',
  socialLink2: 'Mobile applications',
  socialLink3: 'About Canada.ca',
  socialLink4: 'Terms and conditions',
  socialLink5: 'Privacy',

  category: apiEn.category,

  contactCTA:
    'We encourage you to contact <a className="text-default-text underline" target="_blank" href="https://www.canada.ca/en/employment-social-development/corporate/contact/oas.html">Service Canada</a> for an official assessment of your application.',
  resultsPage: {
    header: 'Table of estimated monthly amounts',
    onThisPage: 'On This Page:',
    tableHeader1: 'Benefit',
    tableHeader2: 'Estimated monthly amount (CAD)',
    tableTotalAmount: 'Total',
    whatYouToldUs: 'What you told us',
    youMayBeEligible: 'You may be eligible at this time',
    basedOnYourInfo: 'Based on your information, you may be eligible for:',
    yourEstimatedTotal: 'Your estimated monthly total is ',
    basedOnYourInfoTotal:
      'Based on your information, your combined monthly amount for Old Age Security and Guaranteed Income Supplement is',
    nextSteps: 'Next steps for benefits you may be eligible for',
    youMayNotBeEligible: 'Benefits you may not be eligible for',
    noAnswersFound: 'No answers found',
    noBenefitsFound: 'No benefits found',
    edit: 'Edit',
    info: 'info',
    note: 'note',
    link: 'link',
    dollarSign: 'Dollars sign symbol',
    oas: {
      InfoUrl:
        'https://www.canada.ca/en/services/benefits/publicpensions/cpp/old-age-security.html',
      InfoText: 'Learn more about Old Age Security',
      Message:
        'Based on what you told us <strong>you do not need to apply to get this benefit</strong>. You will receive a letter in the mail letting you know of your <strong>automatic enrollment</strong> the month after you turn 64.',
    },
    gis: {
      InfoUrl:
        'https://www.canada.ca/en/services/benefits/publicpensions/cpp/old-age-security/guaranteed-income-supplement.html',
      InfoText: 'Learn more about Guaranteed Income Supplement',
      Message:
        'Based on income you told us, <strong>you may hve to apply for this benefit</strong>. We may not have enough information to enroll you automatically.',
      ApplyUrl:
        'https://www.canada.ca/en/services/benefits/publicpensions/cpp/old-age-security/guaranteed-income-supplement.html',
      ApplyText:
        'Determine if you need to apply to get Guaranteed Income Supplement',
    },
    allowance: {
      InfoUrl:
        'https://www.canada.ca/en/services/benefits/publicpensions/cpp/old-age-security/guaranteed-income-supplement/allowance.html',
      InfoText: 'Learn more about Allowance',
      Message: 'Allowance is for individuals between the ages of 60 and 64.',
      ApplyUrl:
        'https://www.canada.ca/en/services/benefits/publicpensions/cpp/old-age-security/guaranteed-income-supplement/allowance/apply.html',
      ApplyText: 'View the full eligibility criteria for Allowance',
    },
    afs: {
      InfoUrl:
        'https://www.canada.ca/en/services/benefits/publicpensions/cpp/old-age-security/guaranteed-income-supplement/allowance-survivor.html',
      InfoText: 'Learn more about Allowance for the Survivor',
      Message:
        'Allowance for the Survivor is for individuals between 60 and 64 years old whose partner (spouse or common-law) has died.',
      ApplyUrl:
        'https://www.canada.ca/en/services/benefits/publicpensions/cpp/old-age-security/guaranteed-income-supplement/allowance-survivor/apply.html',
      ApplyText:
        'View the full eligibility criteria for Allowance for the Survivor.',
    },
  },
  resultsQuestions: apiEn.questionShortText,
  moreInfoHeader: 'More Information',
  startOver: 'Start over',
  modifyAnswers: 'Modify answers',
  modifyAnswersText:
    'If you think you have made a mistake in filling out the form, or you would like to change your answers to see what would happen in a different scenario, please use the button below to modify your answers.',
  errors: {
    empty: 'This information is required',
  },
  validationErrors: {
    [ValidationErrors.incomeBelowZero]: 'Your income must be above zero.',
    [ValidationErrors.partnerIncomeBelowZero]:
      "Your partner's income must be above zero.",
    [ValidationErrors.incomeTooHigh]:
      'Your annual income must be less than {OAS_MAX_INCOME} to receive any of the benefits covered by this tool.',
    [ValidationErrors.partnerIncomeTooHigh]:
      "The sum of you and your partner's annual income must be less than {OAS_MAX_INCOME} to receive any of the benefits covered by this tool.",
    [ValidationErrors.ageUnder18]:
      'You must be at least 60 years old to receive Canadian old age benefits.',
    [ValidationErrors.partnerAgeUnder18]:
      "Your partner's age must be over 18 to be able to use this tool.",
    [ValidationErrors.ageOver150]: 'Your age should be less than 150.',
    [ValidationErrors.partnerAgeOver150]:
      "Your partner's age should be less than 150.",
    [ValidationErrors.oasAge65to70]: 'You must enter an age between 65 and 70.',
    [ValidationErrors.yearsInCanadaMinusAge]:
      'The number of years you have lived in Canada should be no more than your age minus 18.',
    [ValidationErrors.partnerYearsInCanadaMinusAge]:
      "Your partner's number of years in Canada should be no more than their age minus 18.",
    [ValidationErrors.maritalUnavailable]:
      'You have indicated a marital status that is not covered by this tool. For further help, please contact {LINK_SERVICE_CANADA}.',
    [ValidationErrors.legalUnavailable]:
      'You have indicated a legal status that is not covered by this tool. For further help, please contact {LINK_SERVICE_CANADA}.',
  },
  unableToProceed: 'Unable to proceed',
  unavailableImageAltText: 'Happy people',
  govt: 'Government of Canada',
  yes: 'Yes',
  no: 'No',
  year: 'Year',
  years: 'Years',
  unavailable: 'unavailable',

  selectText: {
    maritalStatus: 'Select a marital status',
    livingCountry: 'Select a country',
    partnerLivingCountry: 'Select a country',
    default: 'Select from',
  },
}

export default en
