// noinspection SpellCheckingInspection
import { WebTranslations } from '.'
import { Language, Locale } from '../../utils/api/definitions/enums'
import apiTranslation from '../api/fr'

const fr: WebTranslations = {
  _language: Language.FR,
  _locale: Locale.FR,

  oas: 'Sécurité de la vieillesse',
  gis: 'Supplément de revenu garanti',
  alw: 'Allocation',
  afs: 'Allocation au survivant',
  testSiteTitle: "SITE D'ESSAI",
  testSiteHeader:
    'Vous ne pouvez pas demander de services ou de prestations par l’intermédiaire de ce site d’essai. Certaines parties du site pourraient ne pas fonctionner et seront modifiées.',
  otherLang: 'English',
  otherLangCode: 'EN',
  langLong: 'fra',
  creator: 'Emploi et Développement social Canada',
  search: 'Rechercher dans Canada.ca',
  breadcrumb1Title: 'Canada.ca',
  breadcrumb1URL: 'https://www.canada.ca/fr.html',
  breadcrumb2Title: 'Service Canada',
  breadcrumb2URL:
    'https://www.canada.ca/en/employment-social-development/corporate/portfolio/service-canada.html',
  title: 'Estimateur de prestations de vieillesse canadiennes',
  menuTitle: 'Service Canada',
  clear: 'Effacer',
  back: 'Précédent',
  next: 'Suivant',
  questions: 'Questions',
  results: 'Résultats',
  needHelp: "Besoin d'aide?",
  faq: 'Foire Aux Questions',
  saveToCsv: 'Télécharger',
  getResults: 'Obtenir les résultats',
  applyHeader: 'Faire une demande de prestations',
  applyText:
    'Maintenant que vous avez estimé vos prestations, veuillez utiliser le(s) bouton(s) ci-dessous pour faire votre demande.',
  applyForLabel: 'Demander',
  required: 'obligatoire',
  homePageP1:
    "Utilisez cet outil afin de déterminer le montant que vous pourriez recevoir des programmes de prestations de vieillesse. Vous pouvez fournir vos renseignements actuels, ou des renseignements futurs si vous désirez utiliser l'outil à des fins de planification.",
  homePageHeader1: 'Qui peut recevoir ces prestations',
  youMayBeEligible:
    'Vous pourriez être admisible aux prestations de vieillesse si : ',
  atLeast60: 'vous avez au moins 60 ans',
  haveNetIncomeLess: 'votre revenu net est moins de 133 141 $ CAD',
  headerWhatToKnow: 'Ce que vous devez savoir avant de commencer',
  pleaseNodeText:
    "Veuillez noter qu'il s'agit d'un estimateur et non d'une demande de prestations.",
  estimatorIncludeQuestionText:
    "L'estimateur vous posera des questions au sujet de votre : ",
  ageText: '<b>âge</b>',
  netIncomeText:
    '<b>revenu net</b> (ligne 23600 de votre déclaration de revenus)',
  legalStatusText:
    "<b>statut légal</b> (par exemple, citoyen canadien, statut d'Indien ou résident permanent)",
  residenceHistoryText:
    '<b>historique de résidence</b> (depuis combien de temps vous vivez au Canada)',
  maritalStatusText: '<b>état civil</b>',
  partnerText: `<b>conjoint</b> (le cas échéant) : son revenu (y compris les prestations de vieillesse), statut légal et historique de résidence`,
  timeToCompleteText: 'Temps requis pour obtenir une estimation',
  startBenefitsEstimator: "Démarrer l'estimateur de prestations",
  estimatorTimeEstimate:
    'Il vous faudra environ 5 à 10 minutes pour répondre aux questions et obtenir une estimation.',
  whatBenefitsTheEstimatorIsFor: "Prestations incluses dans l'estimateur",
  benefitAvailable:
    'Une prestation disponible aux personnes de 65 ans et plus.',
  learnMoreAboutOldAgeSecurity: `<a className="underline text-default-text" href="${apiTranslation.links.oasOverview.url}" target="_blank">En savoir plus sur la Sécurité de la vieillesse</a>`,
  gisDefinitionText:
    'Une prestation disponible aux personnes qui reçoivent la Sécurité de la vieillesse, ont 65 ans et plus, ont un faible revenu, et habitent au Canada.',
  learnMoreAboutGis: `<a className="underline text-default-text" href="${apiTranslation.links.gisOverview.url}" target="_blank">En savoir plus sur le Supplément de revenu garanti </a>`,
  alwDefinitionText:
    'Une prestation disponible aux personnes âgées entre 60 et 64 ans ayant un faible revenu et dont le conjoint reçoit le Supplément de revenu garanti.',
  learnMoreAboutAlw: `<a className="underline text-default-text" href="${apiTranslation.links.alwOverview.url}" target="_blank">En savoir plus sur l'Allocation</a>`,
  afsDefinitionText:
    'Une prestation disponible aux personnes âgées entre entre 60 et 64 ans ayant un faible revenu et dont le conjoint est décédé.',
  learnMoreAboutAfs: `<a className="underline text-default-text" href="${apiTranslation.links.afsOverview.url}" target="_blank">En savoir plus sur l'Allocation au survivant</a>`,
  notIncludeCPP: `Cet estimateur n'inclut pas le Régime de pensions du Canada.`,
  learnMoreAboutCpp: `<a className="underline text-default-text" href="${apiTranslation.links.cpp.url}" target="_blank">En savoir plus sur le Régime de pensions du Canada</a>`,
  aboutResultText: 'À propos des estimations',
  resultDefinition: `Les estimations ne sont pas des décisions finales. Pour une évaluation plus précise de votre admissibilité, veuillez <a className='text-default-text underline' target='_blank' href='https://www.canada.ca/fr/emploi-developpement-social/ministere/coordonnees/sv.html'>communiquer avec Service Canada.</a> Les estimations ne doivent pas être considérées comme des conseils financiers.`,
  privacyHeading: 'Confidentialité',
  privacyDefinition: `Vos renseignements sont confidentiels. Les renseignements personnels que vous fournissez sont régis conformément à la <a className="underline text-default-text" href="https://laws-lois.justice.gc.ca/fra/lois/p-21/index.html" target="_blank">Loi sur la protection des renseignements personnels.</a> L'Estimateur de prestations de vieillesse canadiennes ne recueille et ne transmet aucun renseignement pouvant vous identifer. Vos estimations anonymes peuvent être utilisées pour des fins de recherche.`,
  homePageP3:
    "La pension de la Sécurité de la vieillesse est un paiement mensuel que vous pouvez recevoir si vous avez 65 ans et plus. Dans la plupart des cas, Service Canada sera en mesure de vous inscrire automatiquement. Dans d'autres cas, vous devrez présenter une demande. Service Canada vous informera si vous avez été inscrit automatiquement.",
  homePageP4:
    'Le Supplément de revenu garanti est une prestation mensuelle non imposable destinée aux bénéficiaires de la pension de la Sécurité de la vieillesse âgées de 65 et plus qui ont un faible revenu et qui vivent au Canada.',
  homePageP5:
    "L'Allocation est une prestation mensuelle offerte aux personnes à faible revenu âgées de 60 à 64 ans dont l'époux ou le conjoint de fait reçoit le Supplément de revenu garanti.",
  homePageP6:
    "L'Allocation au survivant est une prestation mensuelle offerte aux personnes âgées de 60 à 64 ans qui ont un faible revenu, qui vivent au Canada et dont l'époux ou le conjoint de fait est décédé.",
  disclaimerTitle: "Confidentialité et conditions d'utilisation",
  disclaimer: `L'Estimateur canadien de prestations de vieillesse ne recueille ni ne transmet aucun renseignement personnel. Les données d'utilisation anonymes peuvent être recueillies à des fins de recherche. Les renseignements fournis sont régis conformément à la <a className='underline text-default-text' href='https://laws-lois.justice.gc.ca/fra/lois/p-21/index.html' target='_blank'>Loi sur la protection des renseignements personnels</a>.</br></br>Veuillez noter que toutes les informations fournies par cet outil ne sont qu'une estimation et ne doivent pas être considérées comme des conseils financiers. Pour une évaluation officielle, nous vous encourageons à communiquer avec <a className='text-default-text underline' target='_blank' href='https://www.canada.ca/fr/emploi-developpement-social/ministere/coordonnees/sv.html'>Service Canada</a>.`,
  footerlink1: 'Contactez-nous',
  footerlink2: 'Premier ministre',
  footerlink3: 'Traités, lois et règlements',
  footerlink4: 'Fonction publique et force militaire',
  footerlink5: 'Gouvernement ouvert',
  footerlink6: 'Nouvelles',
  footerlink7: 'Ministères et organismes',
  footerlink8: 'À propos du gouvernement',
  footerlink9: "Rapports à l'échelle du gouvernement",
  socialLink1: 'Médias sociaux',
  socialLink2: 'Applications mobiles',
  socialLink3: 'À propos de Canada.ca',
  socialLink4: 'Avis',
  socialLink5: 'Confidentialité',

  category: {
    incomeDetails: 'Revenu',
    personalInformation: 'Renseignements personnels',
    legalStatus: 'Statut légal',
  },

  contactCTA:
    'Nous vous encourageons à contacter <a className="text-default-text underline" target="_blank" href="https://www.canada.ca/fr/emploi-developpement-social/ministere/coordonnees/sv.html">Service Canada</a> pour une évaluation officielle de votre demande.',
  resultsPage: {
    header: "Tableau des résultats d'estimation",
    tableHeader1: 'Exemples de prestations',
    tableHeader2: 'Admissibilité',
    tableHeader3: 'Montant mensuel estimé (CAD)',
    tableHeader4: 'Details',
    tableTotalAmount: 'Montant total des prestations mensuelles',
  },
  moreInfoHeader: "Besoin de plus d'information",
  modifyAnswers: 'Modifier vos réponses',
  modifyAnswersText:
    'Si vous avez fait une erreur en remplissant le formulaire, ou si vous souhaitez modifier vos réponses pour voir ce qui se passerait dans un scénario différent, veuillez utiliser le bouton ci-dessous pour modifier vos réponses.',
  errors: {
    empty: 'Ce renseignement est requis',
  },
  validationErrors: {
    incomeBelowZero: 'Vos revenus doivent être supérieurs à zéro.',
    incomeTooHigh:
      "Votre revenu annuel doit être inférieur à {MAX_OAS_INCOME} pour recevoir l'une des prestations couvertes par cet outil.",
    partnerIncomeBelowZero:
      'Les revenus de votre partenaire doivent être supérieurs à zéro.',
    partnerIncomeTooHigh:
      "La somme de votre revenu annuel et de celui de votre partenaire doit être inférieure à {MAX_OAS_INCOME} pour bénéficier de l'une des prestations couvertes par cet outil.",
    ageUnder18:
      'Vous devez avoir plus de 18 ans pour pouvoir utiliser cet outil.',
    ageOver150: 'Votre âge doit être inférieur à 150 ans.',
    oasAge65to70: 'Vous devez saisir un âge compris entre 65 et 70 ans.',
    partnerAgeUnder18:
      "L'âge de votre partenaire doit être supérieur à 18 ans pour pouvoir utiliser cet outil.",
    partnerAgeOver150:
      "L'âge de votre partenaire doit être inférieur à 150 ans.",
    yearsInCanadaMinusAge:
      "Le nombre d'années pendant lesquelles vous avez vécu au Canada ne doit pas dépasser votre âge moins 18 ans.",
    partnerYearsInCanadaMinusAge:
      "Le nombre d'années de votre partenaire au Canada ne doit pas dépasser son âge moins 18 ans.",
  },
  unavailableImageAltText: 'Gens Heureux',
  govt: 'Gouvernement du Canada',
  yes: 'Oui',
  no: 'Non',

  selectText: {
    maritalStatus: 'Sélectionner un état civil',
    livingCountry: 'Sélectionner un pays',
    partnerLivingCountry: 'Sélectionner un pays',
    default: 'Sélectionnez parmi',
  },
}

export default fr
