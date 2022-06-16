import { observer } from 'mobx-react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import React from 'react'
import { numberToStringCurrency } from '../../i18n/api'
import { WebTranslations } from '../../i18n/web'
import { getTranslations } from '../../i18n/api'
import { Locale } from '../../utils/api/definitions/enums'
import { useStore, useTranslation } from '../Hooks'
import { ResultsTableRow } from './ResultsTableRow'
import { MessageBox } from './MessageBox'

export const ResultsBoxes = observer(() => {
  const root = useStore()
  const answers = root.getInputObject()

  const tsln = useTranslation<WebTranslations>()
  const trans = getTranslations(answers._language)

  const currentLocale = useRouter().locale
  const locale = currentLocale == 'en' ? Locale.EN : Locale.FR

  let countEligible: number = 0

  // Send the details and eligibility results separately and create a new column
  return (
    <div>
      {/* Your may be eligible */}

      <h2 id="eligible" className="h2 mt-5">
        <Image
          src="/eligible.png"
          alt={trans.result.eligible}
          width={30}
          height={30}
        />{' '}
        {tsln.resultsPage.youMayBeEligible}
      </h2>

      <div className="pl-12">
        {tsln.resultsPage.basedOnYourInfo}

        <ul className="pl-5 list-disc text-content font-semibold">
          {root.oas?.eligibility?.detail?.result === trans.result.eligible ? (
            <>
              <li key={root.oas}>{tsln.oas}</li>
              {(countEligible += 1)}
            </>
          ) : (
            ''
          )}
          {root.gis?.eligibility?.detail?.result === trans.result.eligible ? (
            <>
              <li key={root.gis}>{tsln.gis}</li>
              {(countEligible += 1)}
            </>
          ) : (
            ''
          )}
          {root.allowance?.eligibility?.detail?.result ===
          trans.result.eligible ? (
            <>
              <li key={root.allowance}>{tsln.alw}</li>
              {(countEligible += 1)}
            </>
          ) : (
            ''
          )}
          {root.afs?.eligibility?.detail?.result === trans.result.eligible ? (
            <>
              <li key={root.afs}>{tsln.afs}</li>
              {(countEligible += 1)}
            </>
          ) : (
            ''
          )}
        </ul>
      </div>

      {/* Your estimated monthly total */}

      <h2 id="estimated" className="h2 mt-5">
        <Image
          src="/money.png"
          alt={tsln.resultsPage.dollarSign}
          width={30}
          height={30}
        />{' '}
        {tsln.resultsPage.yourEstimatedTotal}{' '}
        {numberToStringCurrency(root.summary.entitlementSum, locale)}
      </h2>

      <div className="pl-12">
        {tsln.resultsPage.basedOnYourInfoTotal}{' '}
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
            <ResultsTableRow
              heading={tsln.oas}
              data={root.oas}
              locale={locale}
              showEntitlement={!root.summary.zeroEntitlements}
            />
            <ResultsTableRow
              heading={tsln.gis}
              data={root.gis}
              locale={locale}
              showEntitlement={!root.summary.zeroEntitlements}
            />
            <ResultsTableRow
              heading={tsln.alw}
              data={root.allowance}
              locale={locale}
              showEntitlement={!root.summary.zeroEntitlements}
            />
            <ResultsTableRow
              heading={tsln.afs}
              data={root.afs}
              locale={locale}
              showEntitlement={!root.summary.zeroEntitlements}
            />
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

      {/* Next steps for benefits you may be eligible */}

      <hr className="my-12 border border-[#BBBFC5]" />

      <h2 id="next" className="h2 mt-5">
        {tsln.resultsPage.nextSteps}
      </h2>

      <MessageBox
        title={tsln.oas}
        eligible={true}
        eligibleText={trans.result.eligible}
        links={[
          {
            icon: 'info',
            url: tsln.resultsPage.oasInfoUrl,
            alt: tsln.resultsPage.info,
            text: tsln.resultsPage.oasInfoText,
          },
        ]}
      >
        <span
          dangerouslySetInnerHTML={{ __html: tsln.resultsPage.oasMessage }}
        ></span>
      </MessageBox>

      <MessageBox
        title={tsln.gis}
        eligible={true}
        eligibleText={trans.result.eligible}
        links={[
          {
            icon: 'info',
            url: tsln.resultsPage.gisInfoUrl,
            alt: tsln.resultsPage.info,
            text: tsln.resultsPage.gisInfoText,
          },
          {
            icon: 'link',
            url: tsln.resultsPage.gisApplyUrl,
            alt: tsln.resultsPage.link,
            text: tsln.resultsPage.gisApplyText,
          },
        ]}
      >
        <span
          dangerouslySetInnerHTML={{ __html: tsln.resultsPage.gisMessage }}
        ></span>
      </MessageBox>

      {/* Benefits you may not be eligible */}

      <h2 id="next" className="h2 mt-12">
        {tsln.resultsPage.youMayNotBeEligible}
      </h2>

      <MessageBox
        title={tsln.alw}
        eligible={false}
        eligibleText={trans.result.ineligible}
        links={[
          {
            icon: 'info',
            url: tsln.resultsPage.alwInfoUrl,
            alt: tsln.resultsPage.info,
            text: tsln.resultsPage.alwInfoText,
          },
          ,
          {
            icon: 'note',
            url: tsln.resultsPage.alwApplyUrl,
            alt: tsln.resultsPage.note,
            text: tsln.resultsPage.alwApplyText,
          },
        ]}
      >
        <span
          dangerouslySetInnerHTML={{ __html: tsln.resultsPage.alwMessage }}
        ></span>
      </MessageBox>

      <MessageBox
        title={tsln.afs}
        eligible={false}
        eligibleText={trans.result.ineligible}
        links={[
          {
            icon: 'info',
            url: tsln.resultsPage.afsInfoUrl,
            alt: tsln.resultsPage.info,
            text: tsln.resultsPage.afsInfoText,
          },
          {
            icon: 'note',
            url: tsln.resultsPage.afsApplyUrl,
            alt: tsln.resultsPage.note,
            text: tsln.resultsPage.afsApplyText,
          },
        ]}
      >
        <span
          dangerouslySetInnerHTML={{ __html: tsln.resultsPage.afsMessage }}
        ></span>
      </MessageBox>
    </div>
  )
})
