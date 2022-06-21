import React from 'react'
import { WebTranslations } from '../../i18n/web'
import { getTranslations } from '../../i18n/api'
import { useStore, useTranslation } from '../Hooks'
import { MessageBox } from './MessageBox'
import { ResultKey } from '../../utils/api/definitions/enums'

export const BenefitMessageBox: React.VFC<{
  eligible: boolean
  benefits: Array<string>
}> = ({ eligible, benefits }) => {
  const root = useStore()
  const answers = root.getInputObject()

  const tsln = useTranslation<WebTranslations>()
  const trans = getTranslations(answers._language)

  const eligibleBenefit: string =
    eligible === true
      ? ResultKey.ELIGIBLE.toString()
      : ResultKey.INELIGIBLE.toString()

  return (
    <div className="my-16">
      {benefits.filter((x) => root[x]?.eligibility?.result === eligibleBenefit)
        .length >= 0 && (
        <>
          <h2 id="next" className="h2 mt-5">
            {tsln.resultsPage.nextSteps}
          </h2>

          {benefits
            .filter((x) => root[x]?.eligibility?.result === eligibleBenefit)
            .map((benefit, index) => (
              <div key={index}>
                <MessageBox
                  title={tsln[benefit]}
                  eligible={eligible}
                  eligibleText={
                    eligible === true
                      ? trans.result.eligible
                      : trans.result.ineligible
                  }
                  links={
                    benefit == 'oas'
                      ? [
                          {
                            icon: 'info',
                            alt: tsln.resultsPage.info,
                            url: tsln.resultsPage[benefit].InfoUrl,
                            text: tsln.resultsPage[benefit].InfoText,
                          },
                        ]
                      : benefit == 'gis'
                      ? [
                          {
                            icon: 'info',
                            alt: tsln.resultsPage.info,
                            url: tsln.resultsPage[benefit].InfoUrl,
                            text: tsln.resultsPage[benefit].InfoText,
                          },
                          {
                            icon: 'link',
                            alt: tsln.resultsPage.link,
                            url: tsln.resultsPage[benefit].InfoUrl,
                            text: tsln.resultsPage[benefit].InfoText,
                          },
                        ]
                      : [
                          {
                            icon: 'info',
                            alt: tsln.resultsPage.info,
                            url: tsln.resultsPage[benefit].InfoUrl,
                            text: tsln.resultsPage[benefit].InfoText,
                          },
                          {
                            icon: 'note',
                            alt: tsln.resultsPage.note,
                            url: tsln.resultsPage[benefit].InfoUrl,
                            text: tsln.resultsPage[benefit].InfoText,
                          },
                        ]
                  }
                >
                  <span
                    dangerouslySetInnerHTML={{
                      __html: tsln.resultsPage[benefit].Message,
                    }}
                  ></span>
                </MessageBox>
              </div>
            ))}
        </>
      )}
    </div>
  )
}
