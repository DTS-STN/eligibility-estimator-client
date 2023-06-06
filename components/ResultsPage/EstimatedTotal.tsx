import Image from 'next/image'
import { useRouter } from 'next/router'
import { getTranslations, numberToStringCurrency } from '../../i18n/api'
import { WebTranslations } from '../../i18n/web'
import { Language, SummaryState } from '../../utils/api/definitions/enums'
import { BenefitResult, SummaryObject } from '../../utils/api/definitions/types'
import { useTranslation } from '../Hooks'
import { EstimatedTotalItem } from './EstimatedTotalItem'

export const EstimatedTotal: React.VFC<{
  resultsEligible: BenefitResult[]
  entitlementSum: number
  state: SummaryState
  partner?: boolean
}> = ({ resultsEligible, entitlementSum, state, partner = false }) => {
  const tsln = useTranslation<WebTranslations>()
  const apiTrans = getTranslations(tsln._language)

  const language = useRouter().locale as Language

  const getText = (type) => {
    switch (type) {
      case 'header':
        return partner
          ? tsln.resultsPage.partnerEstimatedTotal
          : tsln.resultsPage.yourEstimatedTotal
      case 'intro':
        return partner
          ? tsln.resultsPage.basedOnPartnerInfoTotal
          : tsln.resultsPage.basedOnYourInfoTotal
      case 'total':
        return null
    }
  }

  return (
    <>
      <h2 id={partner ? 'partnerEstimated' : 'estimated'} className="h2 mt-12">
        {entitlementSum != 0 ? (
          <Image src="/money.png" alt="" width={30} height={30} />
        ) : (
          <Image src="/green-check-mark.svg" alt="" width={30} height={30} />
        )}
        {getText('header')}
      </h2>

      <div>
        <p
          className="pl-[35px]"
          dangerouslySetInnerHTML={{
            __html: getText('intro'),
          }}
        />

        <ul className="pl-[35px] ml-[20px] my-2 list-disc text-content">
          {resultsEligible.map((benefit) => (
            <EstimatedTotalItem
              key={benefit.benefitKey}
              heading={apiTrans.benefit[benefit.benefitKey]}
              result={benefit}
            />
          ))}
        </ul>

        {entitlementSum != 0 && (
          <p className="pl-[35px]">
            {partner ? tsln.resultsPage.partnerTotal : tsln.resultsPage.total}
            <strong>
              {numberToStringCurrency(entitlementSum, language)}
            </strong>. {getText('total')}
          </p>
        )}
      </div>
    </>
  )
}
