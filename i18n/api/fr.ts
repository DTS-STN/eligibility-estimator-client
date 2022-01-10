// noinspection SpellCheckingInspection

import { Translations } from './index'

const fr: Translations = {
  benefit: {
    oas: 'Sécurité de la vieillesse (SV)',
    gis: 'Supplément de revenu garanti (SRG)',
    allowance: 'Allocation',
    afs: 'Allocation au survivant',
  },
  category: {
    incomeDetails: 'Revenu',
    personalInformation: 'Renseignements personnels',
    partnerDetails: 'Renseignements sur votre partenaire',
    legalStatus: 'Statut légal',
    socialAgreement: "Pays de l'accords de sécurité sociale",
  },
  result: {
    eligible: 'Admissible',
    ineligible: 'Non admissible',
    conditional: 'FRENCH: Conditionally eligible...',
    moreInfo: 'FRENCH: Need more information...',
    invalid: 'FRENCH: Request is invalid!',
  },
  question: {
    income: 'Quel est votre revenu net annuel actuel en dollars canadiens?',
    age: 'Quel est votre âge actuel?',
    livingCountry: 'Dans quel pays résidez-vous actuellement?',
    legalStatus: 'Quel est votre statut légal actuel?',
    legalStatusOther: 'Veuillez préciser:',
    yearsInCanadaSince18:
      "Combien d'années avez-vous vécu au Canada après avoir atteint l'âge de 18 ans?",
    maritalStatus: 'Quel est votre état civil actuel?',
    partnerIncome:
      'Quel est le revenu net annuel de votre partenaire en dollars canadiens?',
    partnerReceivingOas:
      'FRENCH: Does your partner receive a full OAS pension?',
    everLivedSocialCountry:
      'Avez-vous déjà vécu dans un pays avec un accord de <a href="https://www.canada.ca/fr/agence-revenu/services/impot/entreprises/sujets/retenues-paie/retenues-paie-cotisations/regime-pensions-canada-rpc/employes-employeurs-etrangers/accords-sociaux-canada-autres-pays.html" target="_blank">sécurité sociale</a> établi?',
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
        text: 'Résident permanent ou immigrant admis (parrainé)',
      },
      { key: 'indianStatus', text: "Statut d'Indien ou carte de statut" },
      {
        key: 'other',
        text: 'Autre (exemple: résident temporaire, étudiant, travailleur temporaire, etc.)',
      },
    ],
    maritalStatus: [
      { key: 'single', text: 'Célibataire' },
      { key: 'married', text: 'Marié(e)' },
      { key: 'commonLaw', text: 'Conjoint(e) de fait' },
      { key: 'widowed', text: 'Partenaire survivant/veuf(ve)' },
      { key: 'divorced', text: 'Divorcé(e)' },
      { key: 'separated', text: 'Séparé(e)' },
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
    eligibleWhen60ApplyNow:
      "Vous serez probablement admissible quand vous aurez 60 ans, mais il se peut que vous puissiez présenter une demande dès maintenant. Veuillez contacter Service Canada pour plus d'informations",
    eligibleWhen65ApplyNow:
      'Vous serez probablement admissible lorsque vous aurez 65 ans. Cependant, vous pouvez peut-être faire une demande dès maintenant. Veuillez communiquer avec Service Canada pour obtenir de plus amples informations.',
    eligibleWhen60:
      'Vous serez probablement admissible lorsque vous aurez 60 ans.',
    eligibleWhen65:
      'Vous serez probablement admissible lorsque vous aurez 65 ans.',
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
    mustHavePartnerWithOas:
      'Votre partenaire doit recevoir la prestation de sécurité de la vieillesse pour être admissible à cette prestation.',
    mustMeetIncomeReq:
      'Votre revenu est trop élevé pour que vous soyez admissible à cette prestation.',
    mustMeetYearReq:
      "Vous n'avez pas vécu au Canada pendant le nombre d'années requis pour être admissible à cette prestation.",
    ineligibleYearsOrCountry:
      "Vous ne semblez pas actuellement avoir droit à cette prestation, puisque vous avez indiqué que vous n'avez pas habité au Canada pendant la période minimale requise ou que vous avez habité dans un pays avec lequel le Canada a un accord de sécurité sociale. Cependant, vous pourriez devenir admissible à l'avenir si vous résidez au Canada pendant le nombre minimum d'années requis.",
    conditional:
      'Vous pourriez être admissible à cette prestation, mais nous vous invitons à communiquer avec Service Canada pour le confirmer.',
    dependingOnAgreement:
      "Vous pourriez être admissible à cette prestation, selon l'accord que le Canada a avec ce pays. Nous vous encourageons à communiquer avec Service Canada.",
    dependingOnAgreementWhen60:
      "Vous pourriez avoir droit à cette prestation à l'âge de 60 ans, selon l'entente entre le Canada et ce pays. Nous vous encourageons à communiquer avec Service Canada.",
    dependingOnAgreementWhen65:
      "Vous pourriez être admissible à cette prestation quand vous aurez 65 ans, selon l'entente entre le Canada et ce pays. Nous vous encourageons à communiquer avec Service Canada.",
    dependingOnLegal:
      'Vous pourriez être admissible à cette prestation, selon votre statut légal au Canada. Nous vous encourageons à communiquer avec Service Canada.',
    dependingOnLegalSponsored:
      'Vous pourriez être admissible à cette prestation, mais nous vous invitons à communiquer avec Service Canada pour le confirmer.',
    dependingOnLegalWhen60:
      'Vous pourriez être admissible à cette prestation quand vous aurez 60 ans, selon votre statut légal au Canada. Nous vous encourageons à communiquer avec Service Canada.',
    dependingOnLegalWhen65:
      'Vous pourriez avoir droit à cette prestation quand vous aurez 65 ans, selon votre statut juridique au Canada. Nous vous encourageons à communiquer avec Service Canada.',
  },
  summaryTitle: {
    moreInfo: 'FRENCH: More information needed',
    unavailable: 'FRENCH: Unable to provide an estimation',
    availableEligible: 'FRENCH: Likely eligible for benefits',
    availableIneligible: 'FRENCH: Likely not eligible for benefits',
  },
  summaryDetails: {
    moreInfo:
      'FRENCH: You need to answer the remaining questions on the previous tab before an estimation can be provided.',
    unavailable:
      "D'après les informations fournies, nous ne sommes pas en mesure de déterminer votre admissibilité. Nous vous encourageons à communiquer avec Service Canada en utilisant le lien ci-dessous.\nContactez Service Canada",
    availableEligible:
      'Selon les détails que vous avez indiqués, vous êtes probablement admissible aux prestations suivantes.',
    availableIneligible:
      "FRENCH: Given the answers you've provided, you are likely not eligible for any benefits. See the details below for more information.",
  },
}
export default fr
