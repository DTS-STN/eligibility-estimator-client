import type { NextApiRequest, NextApiResponse } from 'next'
import checkAfs from '../../utils/api/checkAfs'
import checkAllowance from '../../utils/api/checkAllowance'
import checkGis from '../../utils/api/checkGis'
import checkOas from '../../utils/api/checkOas'
import { buildFieldData, FieldData } from '../../utils/api/fieldDefinitions'
import normalizeLivingCountry from '../../utils/api/socialAgreement'
import {
  Fields,
  RequestSchema,
  ResponseError,
  ResponseSuccess,
  ResultOptions,
} from '../../utils/api/types'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseSuccess | ResponseError>
) {
  try {
    console.log(`Processing request: `, req.query)

    // normalization
    // takes a country string, normalizes to Canada/Agreement/NoAgreement
    if (req.query.livingCountry) {
      req.query.livingCountry = normalizeLivingCountry(
        req.query.livingCountry as string
      )
    }

    // validation
    let { error, value } = RequestSchema.validate(req.query, {
      abortEarly: false,
    })
    if (error) {
      throw error
    }
    console.log('Passed validation.')

    // processing
    const resultOas = checkOas(value)
    console.log('OAS Result: ', resultOas)

    const resultGis = checkGis(value, resultOas)
    console.log('GIS Result: ', resultGis)

    const resultAllowance = checkAllowance(value)
    console.log('Allowance Result: ', resultAllowance)

    const resultAfs = checkAfs(value)
    console.log('Allowance for Survivor Result: ', resultAfs)

    const visibleFields: Array<Fields> = [
      ...new Set([
        ...([...Object.keys(value)] as Array<Fields>),
        ...(resultOas.missingFields ? resultOas.missingFields : []),
        ...(resultGis.missingFields ? resultGis.missingFields : []),
        ...(resultAllowance.missingFields ? resultAllowance.missingFields : []),
        ...(resultAfs.missingFields ? resultAfs.missingFields : []),
      ]),
    ]
    console.log('All visible fields:', visibleFields)

    const fieldData: Array<FieldData> = buildFieldData(visibleFields)

    // completion
    res.status(200).json({
      oas: resultOas,
      gis: resultGis,
      allowance: resultAllowance,
      afs: resultAfs,
      visibleFields,
      fieldData,
    })
  } catch (error) {
    res.status(400).json({
      error: ResultOptions.INVALID,
      detail: error.details || String(error),
    })
    console.log(error)
    return
  }
}
