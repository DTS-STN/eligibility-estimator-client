import { observer } from 'mobx-react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'
import { getTranslations, numberToStringCurrency } from '../../i18n/api'
import { WebTranslations } from '../../i18n/web'
import { Locale } from '../../utils/api/definitions/enums'
import { BenefitResult } from '../../utils/api/definitions/types'
import { useStore, useTranslation } from '../Hooks'
import { BenefitCards } from './BenefitCards'
import { ResultsTableRow } from './ResultsTableRow'

export const ResultsBoxes = observer(() => {
  const root = useStore()
  const answers = root.getInputObject()

  const tsln = useTranslation<WebTranslations>()
  const apiTrans = getTranslations(answers._language)

  const currentLocale = useRouter().locale
  const locale = currentLocale == 'en' ? Locale.EN : Locale.FR

  // Didn't find a enum for the current benefits
  const benefits = ['oas', 'gis', 'allowance', 'afs']

  const resultsArray = root
    .getResultArray()
    .map((x) => x.toJSON()) as BenefitResult[]

  // Display the details and eligibility results separately, then create a new column
  return (
    <div>
      {/* You may be eligible */}

      <h2 id="eligible" className="h2 mt-8">
        <Image
          src="/eligible.png"
          alt={apiTrans.result.eligible}
          width={30}
          height={30}
        />{' '}
        {tsln.resultsPage.youMayBeEligible}
      </h2>

      <div className="pl-12">
        {tsln.resultsPage.basedOnYourInfo}

        <ul className="pl-5 list-disc text-content font-semibold">
          {benefits
            .filter(
              (x) =>
                root[x]?.eligibility?.result ===
                apiTrans.result.eligible.toLowerCase()
            )
            .map((benefit) => (
              <li key={root[benefit]}>{tsln[benefit]}</li>
            ))}
        </ul>
      </div>

      {/* Your estimated monthly total */}

      <h2 id="estimated" className="h2 mt-12">
        <Image
          src="/money.png"
          alt={tsln.resultsPage.dollarSign}
          width={30}
          height={30}
        />
        {tsln.resultsPage.yourEstimatedTotal}
        {numberToStringCurrency(root.summary.entitlementSum, locale)}
      </h2>

      <div className="pl-12">
        {tsln.resultsPage.basedOnYourInfoTotal}
        {numberToStringCurrency(root.summary.entitlementSum, locale)}
        <h3 className="my-6 font-semibold">{tsln.resultsPage.header}</h3>
        <table className="hidden md:block text-left">
          <thead className="font-bold border border-[#DDDDDD] bg-[#EEEEEE]">
            <tr>
              <th>{tsln.resultsPage.tableHeader1}</th>
              <th>{tsln.resultsPage.tableHeader2}</th>
            </tr>
          </thead>

          <tbody className="align-top">
            {benefits
              .filter(
                (x) =>
                  root[x]?.eligibility?.result ===
                  apiTrans.result.eligible.toLowerCase()
              )
              .map((benefit, index) => (
                <ResultsTableRow
                  key={index}
                  heading={tsln[benefit]}
                  data={root[benefit]}
                  locale={locale}
                  showEntitlement={!root.summary.zeroEntitlements}
                />
              ))}
            {!root.summary.zeroEntitlements && (
              <tr className="border border-[#DDDDDD]">
                <td>{tsln.resultsPage.tableTotalAmount}</td>
                <td className="text-right min-w-[68px]">
                  {numberToStringCurrency(root.summary.entitlementSum, locale)}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <hr className="my-12 border border-[#BBBFC5]" />

      <BenefitCards results={resultsArray} />
    </div>
  )
})
