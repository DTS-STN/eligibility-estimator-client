import { useRouter } from 'next/router'
import { InputHTMLAttributes, useEffect, useState } from 'react'
import { Tooltip } from '../Tooltip/tooltip'
import { ErrorLabel } from './validation/ErrorLabel'
import { observer } from 'mobx-react'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  keyforid: string
  values: any[]
  label: string
  category: string
  error?: string
}

/**
 * A form input radio field that is rendered by the component factory.
 * @param props {InputProps}
 * @returns
 */
export const Radio: React.VFC<InputProps> = observer((props) => {
  const { query } = useRouter()
  const { category, name, label, values, keyforid, error } = props
  return (
    <>
      <div className="radio" data-category={category}>
        <label
          htmlFor={name}
          aria-label={name}
          className="font-semibold inline-block mb-1.5 flex-nowrap"
        >
          <span className="text-danger">* </span>
          <span
            className="mb-1.5 font-semibold text-content question-link"
            dangerouslySetInnerHTML={{ __html: label }}
          ></span>
          <span className="text-danger font-bold ml-2">(required)</span>
          <Tooltip field={name} />
        </label>
        {error && <ErrorLabel errorMessage={error} />}
        {values.map((value, index) => (
          <div key={index} className="flex items-center my-3 md:my-0">
            <input
              type="radio"
              id={`${keyforid}-${index}`}
              name={`${keyforid}`}
              value={correctForBooleans(value)}
              // opacity-0 is important here, it allows us to tab through the inputs where display:none would make the radio's unselectable
              className="opacity-0 -ml-4"
              {...props}
            />
            <label
              htmlFor={`${keyforid}-${index}`}
              className="radio flex items-center"
            >
              <span className="w-6 h-6 inline-block mr-2 rounded-full border border-grey min-w-[24px]"></span>
              <p>{value}</p>
            </label>
          </div>
        ))}
      </div>
    </>
  )
})

const correctForBooleans = (value: string) => {
  switch (value) {
    case 'Yes':
      return 'true'
    case 'No':
      return 'false'
    default:
      return value
  }
}
