import en from '../../i18n/api/en'
import fr from '../../i18n/api/fr'
import { ALWSThresholds } from './thresholds'

const data = [
    {
      "testId": "CASE-AS1",
      "ageYears": 60,
      "ageMonths": 0,
      "receiveOAS": false,
      "delayYears": 0,
      "delayMonths": 0,
      "netWorldIncome": ALWSThresholds.maxIncome-1,
      "legalStatus": true,
      "countryResidence": "Canada",
      "inCanadaSince18": true,
      "yearsResided": 0,
      "marritalStatus": "Widowed",
      "alwsEligible": {en: en.result.eligible, fr: fr.result.eligible},
      "alwsDetail": {en: [en.detail.eligible], fr: [fr.detail.eligible], estimate: true},
    },
    {
      "testId": "CASE-AS2",
      "ageYears": 60,
      "ageMonths": 0,
      "receiveOAS": false,
      "delayYears": 0,
      "delayMonths": 0,
      "netWorldIncome": ALWSThresholds.maxIncome,
      "legalStatus": true,
      "countryResidence": "Canada",
      "inCanadaSince18": true,
      "yearsResided": 0,
      "marritalStatus": "Widowed",
      "alwsEligible": {en: en.result.eligible, fr: fr.result.eligible},
      "alwsDetail": {en: [en.detail.eligibleIncomeTooHigh], fr: [fr.detail.eligibleIncomeTooHigh], estimate: false},
      "nextSteps": {en: [en.detail.alwIfYouApply], fr: [fr.detail.alwIfYouApply], limit: true}
    },
    {
      "testId": "CASE-AS3",
      "ageYears": 59,
      "ageMonths": 0,
      "receiveOAS": false,
      "delayYears": 0,
      "delayMonths": 0,
      "netWorldIncome": ALWSThresholds.maxIncome-1,
      "legalStatus": true,
      "countryResidence": "Canada",
      "inCanadaSince18": true,
      "yearsResided": 0,
      "marritalStatus": "Widowed",
      "alwsEligible": {en: en.result.willBeEligible, fr: fr.result.willBeEligible},
      "alwsDetail": {en: [en.detail.futureEligible60], fr: [fr.detail.futureEligible60], estimate: true},
      "nextSteps": {en: [en.detail.alwsApply], fr: [fr.detail.alwsApply], limit: false}
    },
    {
      "testId": "CASE-AS4",
      "ageYears": 59,
      "ageMonths": 0,
      "receiveOAS": false,
      "delayYears": 0,
      "delayMonths": 0,
      "netWorldIncome": ALWSThresholds.maxIncome,
      "legalStatus": true,
      "countryResidence": "Canada",
      "inCanadaSince18": true,
      "yearsResided": 0,
      "marritalStatus": "Widowed",
      "alwsEligible": {en: en.result.willBeEligible, fr: fr.result.willBeEligible},
      "alwsDetail": {en: [en.detail.futureEligibleIncomeTooHigh2], fr: [fr.detail.futureEligibleIncomeTooHigh2], estimate: false},
      "nextSteps": {en: [en.detail.alwsApply, en.detail.alwIfYouApply], fr: [fr.detail.alwsApply, fr.detail.alwIfYouApply], limit: true}
    },
    {
      "testId": "CASE-AS5",
      "ageYears": 60,
      "ageMonths": 0,
      "receiveOAS": false,
      "delayYears": 0,
      "delayMonths": 0,
      "netWorldIncome": ALWSThresholds.maxIncome-1,
      "legalStatus": true,
      "countryResidence": "Mexico",
      "inCanadaSince18": true,
      "yearsResided": 0,
      "marritalStatus": "Widowed",
      "alwsEligible": {en: en.result.ineligible, fr: fr.result.ineligible},
      "alwsDetail": {en: [en.detail.mustBeInCanada], fr: [fr.detail.mustBeInCanada], estimate: false},
    },
    {
      "testId": "CASE-AS6",
      "ageYears": 60,
      "ageMonths": 0,
      "receiveOAS": false,
      "delayYears": 0,
      "delayMonths": 0,
      "netWorldIncome": ALWSThresholds.maxIncome-1,
      "legalStatus": true,
      "countryResidence": "Canada",
      "inCanadaSince18": true,
      "yearsResided": 0,
      "marritalStatus": "Single",
      "alwsEligible": {en: en.result.ineligible, fr: fr.result.ineligible},
      "alwsDetail": {en: [en.detail.afsNotEligible], fr: [fr.detail.afsNotEligible], estimate: false},
    }
]

export default data