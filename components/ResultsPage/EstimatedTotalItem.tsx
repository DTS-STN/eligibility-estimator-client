import React from 'react'
import { numberToStringCurrency } from '../../i18n/api'
import { WebTranslations } from '../../i18n/web'
import { Language } from '../../utils/api/definitions/enums'
import { BenefitResult } from '../../utils/api/definitions/types'
import { useTranslation } from '../Hooks'

export const EstimatedTotalItem: React.VFC<{
  heading: string
  result: BenefitResult
}> = ({ heading, result }) => {
  const tsln = useTranslation<WebTranslations>()

  /*
    returns benefit name with from/de and proper article. ... french nuances.
  */
  function displayBenefitName(benefitName: string, result: number): string {
    if (tsln._language === Language.EN) {
      return result > 0 ? ` from the ${benefitName}` : ` the ${benefitName}`
    } else {
      switch (benefitName) {
        case tsln.oas:
          return result > 0 ? ` de la ${benefitName}` : ` la ${benefitName}`
        case tsln.gis:
          return result > 0 ? ` du ${benefitName}` : ` le ${benefitName}`
        default:
          return result > 0 ? ` de l'${benefitName}` : ` l'${benefitName}`
      }
    }
  }

  if (!result.entitlement) return null

  return (
    <li>
      <strong>
        {result.entitlement.result > 0
          ? numberToStringCurrency(
              result.entitlement.result ?? 0,
              tsln._language
            )
          : ''}
      </strong>

      {displayBenefitName(heading, result.entitlement.result)}
    </li>
  )
}
