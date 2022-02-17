// noinspection SpellCheckingInspection

import {
  Language,
  LinkLocation,
  Locale,
} from '../../utils/api/definitions/enums'
import { Translations } from './index'

const fr: Translations = {
  _language: Language.FR,
  _locale: Locale.FR,
  benefit: {
    oas: 'Sécurité de la vieillesse (SV)',
    gis: 'Supplément de revenu garanti (SRG)',
    allowance: 'Allocation',
    afs: 'Allocation au survivant',
  },
  category: {
    incomeDetails: 'Revenu',
    personalInformation: 'Renseignements personnels',
    partnerDetails: 'Renseignements sur votre conjoint',
    legalStatus: 'Statut légal',
    socialAgreement: "Pays de l'accords de sécurité sociale",
  },
  result: {
    eligible: 'Admissible',
    ineligible: 'Non admissible',
    unavailable: 'Non disponible',
    moreInfo: "Besoin de plus d'information...",
    invalid: "Votre demande n'est pas valide!",
  },
  question: {
    income: 'Quel est votre revenu annuel net actuel en dollars canadiens?',
    age: 'Quel est votre âge actuel?',
    maritalStatus: 'Quel est votre état civil actuel?',
    livingCountry: 'Dans quel pays résidez-vous actuellement?',
    legalStatus: 'Quel est votre statut légal actuel?',
    legalStatusOther: 'Veuillez préciser:',
    canadaWholeLife:
      "Depuis l'âge de 18 ans, avez-vous seulement habité au Canada?",
    yearsInCanadaSince18:
      "Depuis l'âge de 18 ans, combien d'années avez-vous vécu au Canada?",
    everLivedSocialCountry:
      'Avez-vous déjà vécu dans un pays ayant un {LINK_SOCIAL_AGREEMENT} avec le Canada?',
    partnerBenefitStatus: "Laquelle des options suivantes s'applique à vous?",
    partnerIncome:
      'Quel est le revenu annuel net de votre conjoint en dollars canadiens?',
    partnerAge: "Quel est l'âge actuel de votre conjoint?",
    partnerLivingCountry: 'Dans quel pays habite actuellement votre conjoint?',
    partnerLegalStatus: 'Quel est le statut légal actuel de votre conjoint?',
    partnerCanadaWholeLife:
      "Depuis l'âge de 18 ans, est-ce que votre conjoint a seulement habité au Canada?",
    partnerYearsInCanadaSince18:
      "Depuis l'âge de 18 ans, combien d'années votre conjoint a-t-il habité au Canada?",
    partnerEverLivedSocialCountry:
      'FRENCH: Has your partner ever lived in a country with an established {LINK_SOCIAL_AGREEMENT}?',
  },
  questionOptions: {
    legalStatus: [
      { key: 'canadianCitizen', text: 'Citoyen canadien' },
      {
        key: 'permanentResident',
        text: 'Résident permanent ou immigrant reçu (non parrainé)',
      },
      {
        key: 'sponsored',
        text: 'Résident permanent ou immigrant reçu (parrainé)',
      },
      { key: 'indianStatus', text: "Statut d'Indien ou carte de statut" },
      {
        key: 'other',
        text: 'Autre (par exemple, résident temporaire, étudiant, travailleur temporaire)',
      },
    ],
    maritalStatus: [
      { key: 'single', text: 'Célibataire' },
      { key: 'married', text: 'Marié(e)' },
      { key: 'commonLaw', text: 'Conjoint(e) de fait' },
      { key: 'widowed', text: 'Partenaire survivant(e)/veuf(ve)' },
      { key: 'divorced', text: 'Divorcé(e)' },
      { key: 'separated', text: 'Séparé(e)' },
    ],
    partnerBenefitStatus: [
      {
        key: 'fullOas',
        text: 'Mon conjoint reçoit la pleine pension de la Sécurité de la vieillesse',
      },
      {
        key: 'fullOasGis',
        text: 'Mon conjoint reçoit la pleine pension de la Sécurité de la vieillesse et le Supplément de revenu garanti',
      },
      {
        key: 'partialOas',
        text: 'Mon conjoint reçoit une pension partielle de la Sécurité de la vieillesse',
      },
      {
        key: 'partialOasGis',
        text: 'Mon conjoint reçoit une pension partielle de la Sécurité de la vieillesse et le Supplément de revenu garanti',
      },
      { key: 'alw', text: "Mon conjoint reçoit l'Allocation" },
      { key: 'none', text: 'Aucune de ces réponses' },
      { key: 'helpMe', text: 'Aidez-moi à trouver' },
    ],
    livingCountry: [
      { key: 'CAN', text: 'Canada' },
      { key: 'AFG', text: 'Afghanistan' },
      { key: 'ALB', text: 'Albanie' },
      { key: 'DZA', text: 'Algérie' },
      { key: 'AND', text: 'Andorre' },
      { key: 'AGO', text: 'Angola' },
      { key: 'ATG', text: 'Antigua et Barbuda' },
      { key: 'ARG', text: 'Argentine' },
      { key: 'ARM', text: 'Arménie' },
      { key: 'AUS', text: 'Australie' },
      { key: 'AUT', text: 'Autriche' },
      { key: 'AZE', text: 'Azerbaïdjan' },
      { key: 'BHS', text: 'Bahamas' },
      { key: 'BHR', text: 'Bahreïn' },
      { key: 'BGD', text: 'Bangladesh' },
      { key: 'BRB', text: 'Barbade' },
      { key: 'BLR', text: 'Bélarus' },
      { key: 'BEL', text: 'Belgique' },
      { key: 'BLZ', text: 'Belize' },
      { key: 'BEN', text: 'Bénin' },
      { key: 'BTN', text: 'Bhoutan' },
      { key: 'BOL', text: 'Bolivie' },
      { key: 'BIH', text: 'Bosnie-Herzégovine' },
      { key: 'BWA', text: 'Botswana' },
      { key: 'BRA', text: 'Brésil' },
      { key: 'BRN', text: 'Brunei' },
      { key: 'BGR', text: 'Bulgarie' },
      { key: 'BFA', text: 'Burkina Faso' },
      { key: 'BDI', text: 'Burundi' },
      { key: 'CPV', text: 'Cabo Verde' },
      { key: 'KHM', text: 'Cambodge' },
      { key: 'CMR', text: 'Cameroun' },
      { key: 'CAF', text: 'République Centrafricaine' },
      { key: 'TCD', text: 'Tchad' },
      { key: 'CHL', text: 'Chili' },
      { key: 'CHN', text: 'Chine' },
      { key: 'COL', text: 'Colombie' },
      { key: 'COM', text: 'Comores' },
      { key: 'COG', text: 'Congo (Congo-Brazzaville)' },
      { key: 'CRI', text: 'Costa Rica' },
      { key: 'CIV', text: "Côte d'Ivoire" },
      { key: 'HRV', text: 'Croatie' },
      { key: 'CUB', text: 'Cuba' },
      { key: 'CYP', text: 'Chypre (Cyprus)' },
      { key: 'CZE', text: 'Tchécoslovaquie (République tchèque)' },
      { key: 'COD', text: 'La République démocratique du Congo' },
      { key: 'DNK', text: 'Danemark' },
      { key: 'DJI', text: 'Djibouti' },
      { key: 'DMA', text: 'Dominique' },
      { key: 'DOM', text: 'République Dominicaine' },
      { key: 'ECU', text: 'Équateur' },
      { key: 'EGY', text: 'Égypte' },
      { key: 'SLV', text: 'El Salvador' },
      { key: 'GNQ', text: 'Guinée équatoriale' },
      { key: 'ERI', text: 'Erythrée' },
      { key: 'EST', text: 'Estonie' },
      { key: 'SWZ', text: 'Eswatini ' },
      { key: 'ETH', text: 'Éthiopie' },
      { key: 'FJI', text: 'Fidji' },
      { key: 'FIN', text: 'Finlande' },
      { key: 'FRA', text: 'France' },
      { key: 'GAB', text: 'Gabon' },
      { key: 'GMB', text: 'Gambie' },
      { key: 'GEO', text: 'Géorgie' },
      { key: 'DEU', text: 'Allemagne' },
      { key: 'GHA', text: 'Ghana' },
      { key: 'GRC', text: 'Grèce' },
      { key: 'GRD', text: 'Grenade' },
      { key: 'GTM', text: 'Guatemala' },
      { key: 'GIN', text: 'Guinée' },
      { key: 'GNB', text: 'Guinée-Bissau' },
      { key: 'GUY', text: 'Guyana' },
      { key: 'HTI', text: 'Haïti' },
      { key: 'VAT', text: 'Saint-Siège' },
      { key: 'HND', text: 'Honduras' },
      { key: 'HUN', text: 'Hongrie' },
      { key: 'ISL', text: 'Islande' },
      { key: 'IND', text: 'Inde' },
      { key: 'IDN', text: 'Indonésie' },
      { key: 'IRN', text: 'Iran' },
      { key: 'IRQ', text: 'Irak' },
      { key: 'IRL', text: 'Irlande' },
      { key: 'ISR', text: 'Israël' },
      { key: 'ITA', text: 'Italie' },
      { key: 'JAM', text: 'Jamaïque' },
      { key: 'JPN', text: 'Japon' },
      { key: 'JOR', text: 'Jordanie' },
      { key: 'KAZ', text: 'Kazakhstan' },
      { key: 'KEN', text: 'Kenya' },
      { key: 'KIR', text: 'Kiribati' },
      { key: 'KWT', text: 'Koweït' },
      { key: 'KGZ', text: 'Kirghizistan' },
      { key: 'LAO', text: 'Laos' },
      { key: 'LVA', text: 'Lettonie' },
      { key: 'LBN', text: 'Liban' },
      { key: 'LSO', text: 'Lesotho' },
      { key: 'LBR', text: 'Liberia' },
      { key: 'LBY', text: 'Libye' },
      { key: 'LIE', text: 'Liechtenstein' },
      { key: 'LTU', text: 'Lituanie' },
      { key: 'LUX', text: 'Luxembourg' },
      { key: 'MDG', text: 'Madagascar' },
      { key: 'MWI', text: 'Malawi' },
      { key: 'MYS', text: 'Malaisie' },
      { key: 'MDV', text: 'Maldives' },
      { key: 'MLI', text: 'Mali' },
      { key: 'MLT', text: 'Malte' },
      { key: 'MHL', text: 'Marshall (Îles)' },
      { key: 'MRT', text: 'Mauritanie' },
      { key: 'MUS', text: 'Maurice' },
      { key: 'MEX', text: 'Mexique' },
      { key: 'FSM', text: 'Micronésie' },
      { key: 'MDA', text: 'Moldavie' },
      { key: 'MCO', text: 'Monaco' },
      { key: 'MNG', text: 'Mongolie' },
      { key: 'MNE', text: 'Monténégro' },
      { key: 'MAR', text: 'Maroc' },
      { key: 'MOZ', text: 'Mozambique' },
      { key: 'MMR', text: 'Myanmar (anciennement Birmanie)' },
      { key: 'NAM', text: 'Namibie' },
      { key: 'NRU', text: 'Nauru' },
      { key: 'NPL', text: 'Népal' },
      { key: 'NLD', text: 'Pays-Bas' },
      { key: 'NZL', text: 'Nouvelle-Zélande' },
      { key: 'NIC', text: 'Nicaragua' },
      { key: 'NER', text: 'Niger' },
      { key: 'NGA', text: 'Nigeria' },
      { key: 'PRK', text: 'Corée du Nord' },
      { key: 'MKD', text: 'Macédoine du Nord' },
      { key: 'NOR', text: 'Norvège' },
      { key: 'OMN', text: 'Oman' },
      { key: 'PAK', text: 'Pakistan' },
      { key: 'PLW', text: 'Palau' },
      { key: 'PSE', text: 'Palestine (État)' },
      { key: 'PAN', text: 'Panama' },
      { key: 'PNG', text: 'Papouasie-Nouvelle-Guinée' },
      { key: 'PRY', text: 'Paraguay' },
      { key: 'PER', text: 'Pérou' },
      { key: 'PHL', text: 'Philippines' },
      { key: 'POL', text: 'Pologne' },
      { key: 'PRT', text: 'Portugal' },
      { key: 'QAT', text: 'Qatar' },
      { key: 'ROU', text: 'Roumanie' },
      { key: 'RUS', text: 'Russie' },
      { key: 'RWA', text: 'Rwanda' },
      { key: 'KNA', text: 'Saint-Kitts-et-Nevis' },
      { key: 'LCA', text: 'Sainte-Lucie' },
      { key: 'VCT', text: 'Saint Vincent et les Grenadines' },
      { key: 'WSM', text: 'Samoa' },
      { key: 'SMR', text: 'Saint-Marin' },
      { key: 'STP', text: 'Sao Tomé et Principe' },
      { key: 'SAU', text: 'Arabie Saoudite' },
      { key: 'SEN', text: 'Sénégal' },
      { key: 'SRB', text: 'Serbie' },
      { key: 'SYC', text: 'Seychelles' },
      { key: 'SLE', text: 'Sierra Leone' },
      { key: 'SGP', text: 'Singapour' },
      { key: 'SVK', text: 'Slovaquie' },
      { key: 'SVN', text: 'Slovénie' },
      { key: 'SLB', text: 'Salomon (Îles)' },
      { key: 'SOM', text: 'Somalie' },
      { key: 'ZAF', text: 'Afrique du Sud' },
      { key: 'KOR', text: 'Corée du Sud' },
      { key: 'SSD', text: 'Soudan du Sud' },
      { key: 'ESP', text: 'Espagne' },
      { key: 'LKA', text: 'Sri Lanka' },
      { key: 'SDN', text: 'Soudan' },
      { key: 'SUR', text: 'Suriname' },
      { key: 'SWE', text: 'Suède' },
      { key: 'CHE', text: 'Suisse' },
      { key: 'SYR', text: 'Syrie' },
      { key: 'TJK', text: 'Tadjikistan' },
      { key: 'TZA', text: 'Tanzanie' },
      { key: 'THA', text: 'Thaïlande' },
      { key: 'TLS', text: 'Timor-Leste' },
      { key: 'TGO', text: 'Togo' },
      { key: 'TON', text: 'Tonga' },
      { key: 'TTO', text: 'Trinité-et-Tobago' },
      { key: 'TUN', text: 'Tunisie' },
      { key: 'TUR', text: 'Turquie' },
      { key: 'TKM', text: 'Turkménistan' },
      { key: 'TUV', text: 'Tuvalu' },
      { key: 'UGA', text: 'Ouganda' },
      { key: 'UKR', text: 'Ukraine' },
      { key: 'ARE', text: 'Emirats Arabes Unis' },
      { key: 'GBR', text: 'Royaume-Uni' },
      { key: 'USA', text: "Etats-Unis d'Amérique" },
      { key: 'URY', text: 'Uruguay' },
      { key: 'UZB', text: 'Ouzbékistan' },
      { key: 'VUT', text: 'Vanuatu' },
      { key: 'VEN', text: 'Venezuela' },
      { key: 'VNM', text: 'Vietnam' },
      { key: 'YEM', text: 'Yémen' },
      { key: 'ZMB', text: 'Zambie' },
      { key: 'ZWE', text: 'Zimbabwe' },
    ],
  },
  detail: {
    eligible:
      "D'après les informations fournies, vous êtes probablement admissible à cette prestation.",
    eligibleOas65to69:
      'Vous êtes probablement admissible à cette prestation. Pour en savoir plus sur la possibilité de reporter votre premier paiement, {LINK_OAS_DEFER}.',
    eligibleEntitlementUnavailable:
      "Vous êtes probablement admissible à cette prestation, mais une estimation du droit à cette prestation n'est pas disponible. Vous devriez communiquer avec {LINK_SERVICE_CANADA} pour obtenir plus de renseignements sur le montant de vos paiements.",
    eligiblePartialOas:
      'Vous êtes probablement admissible à une pension partielle de la Sécurité de la vieillesse.',
    eligiblePartialOas65to69:
      'Vous êtes probablement admissible à une pension partielle de la Sécurité de la vieillesse. Pour en savoir plus sur la possibilité de reporter votre premier paiement, {LINK_OAS_DEFER}.',
    eligibleWhen60ApplyNow:
      'Vous serez probablement admissible à votre 60e anniversaire. Par contre, vous pourriez être en mesure de présenter une demande dès maintenant. Veuillez communiquer avec {LINK_SERVICE_CANADA} pour en savoir plus.',
    eligibleWhen65ApplyNowOas:
      'Vous serez probablement admissible à votre 65e anniversaire. Par contre, vous pourriez être en mesure de présenter une demande dès maintenant. Veuillez communiquer avec {LINK_SERVICE_CANADA} pour en savoir plus. Pour en savoir plus sur la possibilité de reporter votre premier paiement, {LINK_OAS_DEFER}.',
    eligibleWhen60:
      'Vous serez probablement admissible à votre 60e anniversaire.',
    eligibleWhen65:
      'Vous serez probablement admissible à votre 65e anniversaire.',
    mustBe60to64:
      'Vous devez avoir entre 60 et 64 ans pour être admissible à cette prestation.',
    mustBeInCanada:
      'Vous devez vivre au Canada pour être admissible à cette prestation.',
    mustBeOasEligible:
      'Vous devez être admissible à la Sécurité de la vieillesse pour être admissible à cette prestation.',
    mustCompleteOasCheck:
      "Vous devez d'abord compléter l'évaluation d'admissibilité à la Sécurité de la vieillesse.",
    mustBeWidowed:
      'Vous devez être un partenaire survivant ou un veuf pour être admissible à cette prestation.',
    mustBePartnered:
      'Vous devez être conjoint de fait ou marié pour être admissible à cette prestation.',
    mustHavePartnerWithGis:
      'Votre partenaire doit recevoir le supplément de revenu garanti pour être admissible à cette prestation.',
    mustMeetIncomeReq:
      'Votre revenu est trop élevé pour que vous soyez admissible à cette prestation.',
    mustMeetYearReq:
      "Vous n'avez pas vécu au Canada pendant le nombre d'années requis pour être admissible à cette prestation.",
    conditional:
      'Vous pourriez être admissible à cette prestation. Nous vous invitons à communiquer avec Service Canada pour obtenir une meilleure évaluation.',
    dependingOnAgreement:
      "Vous pourriez être admissible à cette prestation, selon l'accord que le Canada a avec ce pays. Nous vous invitons à communiquer avec Service Canada pour obtenir une meilleure évaluation.",
    dependingOnAgreementWhen60:
      "Vous pourriez avoir droit à cette prestation à votre 60e anniversaire, selon l'entente entre le Canada et ce pays. Nous vous invitons à communiquer avec Service Canada  pour obtenir une meilleure évaluation.",
    dependingOnAgreementWhen65:
      "Vous pourriez être admissible à cette prestation à votre 65e anniversaire, selon l'entente entre le Canada et ce pays. Nous vous invitons à communiquer avec Service Canada pour obtenir une meilleure évaluation.",
    dependingOnLegal:
      'Vous pourriez être admissible à cette prestation, selon votre statut légal au Canada. Nous vous invitons à communiquer avec Service Canada pour obtenir une meilleure évaluation.',
    dependingOnLegalSponsored:
      'Vous pourriez être admissible à cette prestation. Nous vous invitons à communiquer avec Service Canada pour obtenir une meilleure évaluation.',
    dependingOnLegalWhen60:
      'Vous pourriez être admissible à cette prestation à votre 60e anniversaire, selon votre statut légal au Canada. Nous vous invitons à communiquer avec Service Canada pour obtenir une meilleure évaluation.',
    dependingOnLegalWhen65:
      'Vous pourriez être admissible à cette prestation à votre 65e anniversaire, selon votre statut légal au Canada. Nous vous invitons à communiquer avec Service Canada pour obtenir une meilleure évaluation.',
    additionalReasons:
      "{LINK_MORE_REASONS} pour les raisons additionnelles possibles d'inéligibilité.",
  },
  summaryTitle: {
    moreInfo: 'Plus de renseignements sont nécessaires',
    unavailable: 'Impossible de fournir une estimation',
    availableEligible: 'Probablement admissible aux prestations',
    availableIneligible: 'Probablement non admissible aux prestations',
  },
  summaryDetails: {
    moreInfo:
      "Veuillez remplir le formulaire. Selon les renseignements que vous fournirez aujourd'hui, l'application estimera votre admissibilité. Si vous êtes admissible, l'application fournira également une estimation de votre paiement mensuel.",
    unavailable:
      "Selon les renseignements que vous avez fournis aujourd'hui, nous sommes incapables de déterminer votre admissibilité. Nous vous invitons à communiquer avec {LINK_SERVICE_CANADA}.",
    availableEligible:
      "Selon les renseignements que vous avez fournis aujourd'hui, vous êtes probablement admissible à un montant mensuel total estimé à {ENTITLEMENT_AMOUNT}. Notez que les montants ne sont qu'une estimation de votre paiement mensuel. Des changements dans votre situation peuvent affecter vos résultats.",
    availableIneligible:
      "Selon les renseignements que vous avez fournis aujourd'hui, vous n'avez probablement pas droit à des prestations. Voir les détails ci-dessous pour en savoir plus.",
    availableIneligibleIncome:
      "Vous ne semblez pas avoir droit à l'une de ces prestations parce que votre revenu annuel est supérieur à {MAX_OAS_INCOME}.",
  },
  links: {
    contactSC: {
      text: 'Communiquer avec Service Canada',
      url: 'https://www.canada.ca/fr/emploi-developpement-social/ministere/coordonnees/sv.html',
      order: 1,
      location: LinkLocation.QUESTIONS_ONLY,
    },
    oasOverview: {
      text: 'Pension de la Sécurité de vieillesse: Aperçu',
      url: 'https://www.canada.ca/fr/services/prestations/pensionspubliques/rpc/securite-vieillesse.ht',
      order: 2,
      location: LinkLocation.STANDARD,
    },
    cpp: {
      text: 'Pension de retraite du RPC: Aperçu',
      url: 'https://www.canada.ca/fr/services/prestations/pensionspubliques/rpc.html',
      order: 3,
      location: LinkLocation.RESULTS_ONLY,
    },
    cric: {
      text: 'Calculatrice du revenu de retraite canadienne',
      url: 'https://www.canada.ca/fr/services/prestations/pensionspubliques/rpc/calculatrice-revenu-retraite.html',
      order: 4,
      location: LinkLocation.RESULTS_ONLY,
    },
    oasApply: {
      text: 'Pension de la Sécurité de vieillesse: Demande',
      url: 'https://www.canada.ca/fr/services/prestations/pensionspubliques/rpc/securite-vieillesse/demande.html',
      order: 5,
      location: LinkLocation.RESULTS_APPLY,
    },
    alwApply: {
      text: 'Supplément de revenu garanti : Allocation',
      url: 'https://www.canada.ca/fr/services/prestations/pensionspubliques/rpc/securite-vieillesse/supplement-revenu-garanti/allocation/demande.html',
      order: 7,
      location: LinkLocation.RESULTS_APPLY,
    },
    afsApply: {
      text: 'Allocation au survivant: Demande',
      url: 'https://www.canada.ca/fr/services/prestations/pensionspubliques/rpc/securite-vieillesse/supplement-revenu-garanti/allocation-survivant/demande.html',
      order: 8,
      location: LinkLocation.RESULTS_APPLY,
    },
    oasMaxIncome: {
      text: 'FRENCH',
      url: 'https://www.canada.ca/fr/services/prestations/pensionspubliques/rpc/securite-vieillesse/montant-prestation.htm',
      order: 9,
      location: LinkLocation.STANDARD,
    },
    outsideCanada: {
      text: 'Personnes ayant vécu ou vivant à l’étranger – Pensions et prestations – Aperçu',
      url: 'https://www.canada.ca/fr/services/prestations/pensionspubliques/rpc/rpc-internationales.html',
      order: 10,
      location: LinkLocation.STANDARD,
    },
    workingOutsideCanada: {
      text: 'Canadiens travaillant à l’extérieur du Canada pour les employeurs canadiens',
      url: 'https://www.canada.ca/fr/services/prestations/pensionspubliques/rpc/securite-vieillesse/admissibilite.htm',
      order: 11,
      location: LinkLocation.STANDARD,
    },
    oasPartial: {
      text: 'Pension de la Sécurité de vieillesse: Combien vous pourriez recevoir si vous avez vécu au Canada moins de 40 ans',
      url: 'https://www.canada.ca/fr/services/prestations/pensionspubliques/rpc/securite-vieillesse/montant-prestation.htm',
      order: 12,
      location: LinkLocation.STANDARD,
    },
    oasEntitlement: {
      text: 'Pension de la Sécurité de vieillesse: Combien vous pourriez recevoir',
      url: 'https://www.canada.ca/fr/services/prestations/pensionspubliques/rpc/securite-vieillesse/montant-prestation.htm',
      order: 13,
      location: LinkLocation.STANDARD,
    },
    oasEntitlement2: {
      text: 'Montant des paiements de la Sécurité de la vieillesse',
      url: 'https://www.canada.ca/fr/services/prestations/pensionspubliques/rpc/securite-vieillesse/paiements.html',
      order: 14,
      location: LinkLocation.STANDARD,
    },
    gisEntitlement: {
      text: 'Montants du Supplément de revenu garanti (SRG)',
      url: 'https://www.canada.ca/fr/services/prestations/pensionspubliques/rpc/securite-vieillesse/paiements/tab1-1.html',
      order: 15,
      location: LinkLocation.STANDARD,
    },
    alwGisEntitlement: {
      text: "Montants du Supplément de revenu garanti (SRG) et de l'allocation ",
      url: 'https://www.canada.ca/fr/services/prestations/pensionspubliques/rpc/securite-vieillesse/paiements/tab4-1.html',
      order: 16,
      location: LinkLocation.STANDARD,
    },
    alwInfo: {
      text: 'Supplément de revenu garanti : Allocation',
      url: 'https://www.canada.ca/fr/services/prestations/pensionspubliques/rpc/securite-vieillesse/supplement-revenu-garanti/allocation/montant-prestation.html',
      order: 17,
      location: LinkLocation.STANDARD,
    },
    afsEntitlement: {
      text: "Montants de l'Allocation au survivant",
      url: 'https://www.canada.ca/fr/services/prestations/pensionspubliques/rpc/securite-vieillesse/paiements/tab5-35.html',
      order: 18,
      location: LinkLocation.STANDARD,
    },
    oasRecoveryTax: {
      text: 'Impôt de récupération de la Sécurité de la vieillesse',
      url: 'https://www.canada.ca/fr/services/prestations/pensionspubliques/rpc/securite-vieillesse/impot-recuperation.html',
      order: 19,
      location: LinkLocation.STANDARD,
    },
    oasDefer: {
      text: 'Devriez-vous attendez pour commencer à recevoir la sécurité de la vieillesse',
      url: 'https://www.canada.ca/fr/services/prestations/pensionspubliques/rpc/securite-vieillesse/montant-prestation.html',
      order: 20,
      location: LinkLocation.STANDARD,
    },
    oasRetroactive: {
      text: 'TBD',
      url: 'https://www.canada.ca/fr/services/prestations/pensionspubliques/rpc/securite-vieillesse/montant-prestation.html',
      order: 21,
      location: LinkLocation.STANDARD,
    },
    SC: {
      text: 'Service Canada',
      url: 'https://www.canada.ca/fr/emploi-developpement-social/ministere/coordonnees/sv.html',
      order: -1,
      location: LinkLocation.HIDDEN,
    },
    oasDeferClickHere: {
      text: 'cliquez ici',
      url: 'https://www.canada.ca/fr/services/prestations/pensionspubliques/rpc/securite-vieillesse/montant-prestation.html#h2.2',
      order: -1,
      location: LinkLocation.HIDDEN,
    },
    socialAgreement: {
      text: 'accord de sécurité sociale',
      url: 'https://www.canada.ca/fr/agence-revenu/services/impot/entreprises/sujets/retenues-paie/retenues-paie-cotisations/regime-pensions-canada-rpc/employes-employeurs-etrangers/accords-sociaux-canada-autres-pays.html',
      order: -1,
      location: LinkLocation.HIDDEN,
    },
    oasReasons: {
      text: 'Cliquez ici',
      url: 'TBD',
      order: -1,
      location: LinkLocation.HIDDEN,
    },
    gisReasons: {
      text: 'Cliquez ici',
      url: 'TBD',
      order: -1,
      location: LinkLocation.HIDDEN,
    },
    alwReasons: {
      text: 'Cliquez ici',
      url: 'TBD',
      order: -1,
      location: LinkLocation.HIDDEN,
    },
    afsReasons: {
      text: 'Cliquez ici',
      url: 'TBD',
      order: -1,
      location: LinkLocation.HIDDEN,
    },
  },
}
export default fr
