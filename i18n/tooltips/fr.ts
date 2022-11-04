import { FieldKey } from '../../utils/api/definitions/fields'
import apiFr from '../api/fr'
import { TooltipTranslations } from './index'

const fr: TooltipTranslations = {
  [FieldKey.MARITAL_STATUS]: {
    heading: apiFr.category.marital,
    text: "<p style='padding-bottom: 12px;'><span style='font-weight: bold;'>Conjoint(e) de fait</span>: Vous vivez avec une autre personne dans une relation conjugale depuis au moins un an. </p> <p style='padding-bottom: 12px;'><span style='font-weight: bold;'>Divorcé(e)</span>: Vous êtes officiellement séparé et avez légalement mis fin à votre mariage. </p> <p style='padding-bottom: 12px;'><span style='font-weight: bold;'>Marié(e)</span>: Vous êtes unies officiellement au cours d’une cérémonie. Ce mariage doit être reconnu en vertu des lois du pays où il a été célébré et en vertu du droit canadien. </p> <p style='padding-bottom: 12px;'><span style='font-weight: bold;'>Célibataire </span>: Vous n'avez jamais été marié et ne vivez pas en union de fait. </p> <p style='padding-bottom: 12px;'><span style='font-weight: bold;'>Conjoint survivant/veuf</span>: Votre conjoint est décédé et vous ne vous êtes pas remarié ou engagé dans une union de fait.</p><p style='padding-bottom: 12px;'><span style='font-weight: bold;'>Séparé(e):</span> Vous vivez séparé de votre époux ou de votre conjoint à cause de la rupture de votre relation depuis au moins 90 jours et vous ne vous êtes pas réconcilié.</p>",
  },
  [FieldKey.LEGAL_STATUS]: {
    heading: apiFr.category.legal,
    text: "<p style='padding-bottom: 12px;'><span style='font-weight: bold;'>Citoyen canadien :</span> Vous êtes Canadien de naissance (né au Canada ou né à l’extérieur du Canada d’un parent citoyen canadien) ou avez obtenu la citoyenneté canadienne.</p><p style='padding-bottom: 12px;'><span style='font-weight: bold;'>Statut d'Indien :</span> Vous êtes inscrit en tant qu'Indien selon la définition qu'en donne la <em>Loi sur les Indiens</em>.</p><p style='padding-bottom: 12px;'><span style='font-weight: bold;'>Résident permanent ou immigrant reçu :</span> Vous avez obtenu le statut de résident permanent ou avez présenté une demande de résidence permanente au titre de la catégorie du regroupement familial.</p><p style='padding-bottom: 12px;'><span style='font-weight: bold;'>Réfugié :</span> Vous êtes hors de votre pays d’origine ou de résidence habituelle et ne pouvez y retourner, parce que vous craignez avec raison d’être persécuté pour des motifs liés à votre race, votre religion, votre nationalité, votre appartenance à un groupe social particulier ou vos opinions politiques.</p>",
  },
  [FieldKey.INCOME]: {
    heading: apiFr.category.income,
    text: '<div style="padding-top:8px;">You can find your net income on line 23600 of your personal income tax return (T1).</div><div style="padding-top:8px;">For a more accurate estimate, remove from this amount: </div> <ul class="list-disc" style="padding-left:12px"><li>any Old Age Security payments</li><li>your first 5,000$ of employment or self-employment income, and 50% of the next $10,000</li></ul>',
  },
  [FieldKey.PARTNER_LEGAL_STATUS]: {
    useDataFromKey: 'legalStatus',
  },
}

export default fr
