import { debounce, sortBy } from 'lodash'
import { useRouter } from 'next/router'
import React, { Dispatch, useState } from 'react'
import Select from 'react-select'
import { FieldData } from '../../utils/api/definitions/fields'
import type {
  BenefitResult,
  ResponseSuccess,
} from '../../utils/api/definitions/types'
import { validateIncome } from '../../utils/api/helpers/validator'
import { Input } from './Input'
import { Radio } from './Radio'
import { Tooltip } from '../Tooltip/tooltip'
import { useInternationalization } from '../Hooks'
import { FormSelect } from './Select'

interface FactoryProps {
  data: ResponseSuccess
  oas: Dispatch<BenefitResult>
  gis: Dispatch<BenefitResult>
  allowance: Dispatch<BenefitResult>
  afs: Dispatch<BenefitResult>
  setProgress: Dispatch<any>
  selectedTabIndex: Dispatch<number>
}

/** API endpoint for eligibility*/
const API_URL = `api/calculateEligibility`

/** form completion state */
let formCompletion = {}

/**
 * A component that will receive backend props from an API call and render the data as an interactive form.
 * `/interact` holds the swagger docs for the API response, and `fieldData` is the iterable that contains the form fields to be rendered.
 * @param props {FactoryProps}
 * @returns
 */
export const ComponentFactory: React.VFC<FactoryProps> = ({
  data,
  oas,
  gis,
  allowance,
  afs,
  selectedTabIndex,
  setProgress,
}) => {
  let lastCategory = null

  const router = useRouter()
  const query = router.query
  formCompletion = { ...query, ...formCompletion }

  const orderedFields = sortBy(data.fieldData, 'order')
  const [formState, setFormState] = useState(orderedFields)

  /**
   * send a GET request to the API, appended with query string data
   * @param queryString the query string to append to the APIs get request
   */
  const sendAPIRequest = (queryString: string) => {
    fetch(`${API_URL}?${queryString}`)
      .then((res) => res.json())
      .then((data) => {
        if (!data.error) {
          setFormState(data.fieldData)

          oas(data.oas)
          gis(data.gis)
          allowance(data.allowance)
          afs(data.afs)

          // set progress
          checkCompletion(data.fieldData, formCompletion, setProgress)
        } else {
          // handle error - validate per field once validation designs are complete
        }
      })
  }

  /**
   * Global change handler for the dynamic form elements in the eligibility form
   */
  const handleChange = async () => {
    const formData = retrieveFormData()
    if (!formData) return
    const qs = buildQueryStringFromFormData(formData, true)

    const income = formData
      .get('income')
      .toString()
      .replace('$', '')
      .replace(',', '')

    // client cannot use calculator, their income is too high
    if (validateIncome(income)) router.push(`/eligibility?${qs}`)
    router.push(`/eligibility?${qs}`)

    sendAPIRequest(qs)
  }

  return (
    <form name="ee-form" data-testid="ee-form" action="/eligibility">
      {/* <input
        type="hidden"
        name="lang"
        value={useInternationalization('lang')}
      /> */}
      {formState.map((field) => {
        const content = (
          <div key={field.key}>
            {field.category != lastCategory && (
              <h2 className="h2 mb-8">{field.category}</h2>
            )}
            {field.type == 'number' && (
              <div className="mb-10">
                <Input
                  type={field.type}
                  name={field.key}
                  label={field.label}
                  placeholder={field.placeholder ?? ''}
                  onChange={debounce(handleChange, 1000)}
                  defaultValue={formCompletion[field.key]}
                  data-category={field.category}
                  required
                />
              </div>
            )}
            {field.type == 'dropdown' && (
              <div className="mb-12">
                <FormSelect field={field} sendAPIRequest={sendAPIRequest} />
              </div>
            )}
            {(field.type == 'radio' || field.type == 'boolean') && (
              <div className="mb-12">
                <Radio
                  name={field.key}
                  values={
                    field.type == 'boolean' ? ['Yes', 'No'] : field.values
                  }
                  keyforid={field.key}
                  label={field.label}
                  onChange={handleChange}
                  category={field.category}
                  defaultValue={formCompletion[field.key]}
                  required
                />
              </div>
            )}
          </div>
        )
        lastCategory = field.category

        return content
      })}

      <div className="flex flex-col md:flex-row gap-x-8 mt-20">
        <button
          type="button"
          role="button"
          className="btn btn-default w-full md:w-40"
          onClick={(e) => router.push('/')}
        >
          Back
        </button>
        <button
          type="reset"
          className="btn btn-default w-full md:w-40 mt-4 md:mt-0"
          onClick={(e) => {
            const form: HTMLFormElement = document.querySelector(
              "form[name='ee-form']"
            )
            form.reset()
          }}
        >
          Clear
        </button>
        <button
          type="submit"
          role="button"
          className="btn btn-primary w-full md:w-40 mt-4 md:mt-0"
          onClick={(e) => {
            handleChange()
            selectedTabIndex(1)
          }}
        >
          Estimate
        </button>
      </div>
    </form>
  )
}

/**
 * Checks the completion fo the form
 *
 * @param fields The fields retrieved from the API
 * @param formCompletion the global form completion state
 * @param setProgress a Dispathc that will set the progress bar's state
 */
const checkCompletion = (
  fields: FieldData[],
  formCompletion: any,
  setProgress: any
) => {
  const personal = fields
    .filter(
      (field) =>
        field.category == 'Personal Information' ||
        field.category == 'Partner Details'
    )
    .map((p) => p.key)
  const personalComplete = personal.every((item) => formCompletion[item])

  const legal = fields
    .filter((field) => field.category == 'Legal Status')
    .map((p) => p.key)
  const legalComplete = legal.every((item) => formCompletion[item])

  setProgress({ personal: personalComplete, legal: legalComplete })
}

/**
 * Builds a query string to the API
 *
 * @param formData Data residing in the eligibility estimator form
 * @param updateFormCompletion optionally update global form completion state
 * @returns
 */
export const buildQueryStringFromFormData = (
  formData: FormData,
  updateFormCompletion = true
) => {
  let qs = ''
  for (const [key, value] of formData.entries()) {
    if (value == '') {
      continue
    }
    // remove masking from currency
    let val = value.toString().replace('$', '').replace(',', '')

    // build query string
    if (qs !== '') qs += '&'
    qs += `${key}=${val}`

    // update global for completion state
    if (updateFormCompletion) formCompletion[key] = val
  }
  return qs
}

/**
 * Retrieves a form's internal representation of itself.
 *
 * @param formName The form to retrieve, if no option given it will attempt to retrieve the ee-form
 * @returns the eligibility estimator's form data
 */
export const retrieveFormData = (formName = 'form[name="ee-form"]') => {
  const form: HTMLFormElement = document.querySelector(formName)
  if (!form) return

  return new FormData(form)
}
