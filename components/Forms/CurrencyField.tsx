import { useRouter } from 'next/router'
import { InputHTMLAttributes, useEffect, useState } from 'react'
import NumberFormat from 'react-number-format'
import Image from 'next/image'
import { Language } from '../../utils/api/definitions/enums'
import { ErrorLabel } from './validation/ErrorLabel'

export interface CurrencyFieldProps
  extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  label: string
  helpText?: string
  requiredText?: string
  error?: string
}

/**
 * A form input field rendered by the component factory. If the field is a currency field (income / partner receiving OAS) then use a NumberFormat to render the number masked as a currency
 * Currently support text and number fields
 * @param props {CurrencyFieldProps}
 * @returns
 */
export const CurrencyField: React.VFC<CurrencyFieldProps> = ({
  name,
  label,
  value,
  placeholder,
  onChange,
  helpText,
  requiredText,
  error,
}) => {
  const locale = useRouter().locale

  const [displayHelpText, setHelpTextState] = useState(false)

  const localizedIncome =
    locale == Language.EN
      ? { thousandSeparator: true, prefix: '$' }
      : { thousandSeparator: ' ', suffix: ' $', decimalSeparator: ',' }

  // only need to run this once at component render, so no need for deps
  useEffect(() => {
    // blur the input element on scroll instead of changing the value! Does not affect Keyboard input.
    document.addEventListener('wheel', function (event) {
      const el = document.activeElement as HTMLInputElement
      if (el?.type === 'number') {
        el.blur()
      }
    })
  }, [])

  return (
    <div>
      <div className="mb-2.5">
        <label
          htmlFor={name}
          aria-label={name}
          data-testid="currency-input-label"
          className="text-content font-bold inline"
        >
          {label}
          <span className="ml-2 font-medium">{requiredText}</span>
        </label>
        {helpText && (
          <button
            className="!bg-ds-gray5 ds-cursor-pointer ds-ml-auto md:ds-ml-0 ds-pl-8px"
            onClick={(e) => {
              e.preventDefault()
              setHelpTextState(!displayHelpText)
            }}
          >
            <Image
              tabIndex={-1}
              src={'/info.svg'}
              width="30"
              height="30"
              alt="Click on to show info"
            />
          </button>
        )}
        {displayHelpText && (
          <div
            id={'helpText'}
            className="ds-rounded ds-absolute ds-z-1 w-[340px] ml-96 -mt-10 ds-font-body text-small leading-5 ds-text-multi-neutrals-grey100  ds-bg-specific-cyan-cyan5 ds-border ds-border-specific-cyan-cyan50 ds-p-5px ds-pl-14px "
            dangerouslySetInnerHTML={{ __html: helpText }}
          />
        )}
      </div>
      {error && <ErrorLabel errorMessage={error} />}
      <NumberFormat
        id={name}
        name={name}
        {...localizedIncome}
        data-testid="currency-input"
        className={`form-control text-content border-form-border ${
          error ? ' border-danger' : ''
        }`}
        min={0}
        value={value != null ? (value as string) : ''}
        placeholder={placeholder}
        onChange={onChange}
        required
        autoComplete="off"
        enterKeyHint="done"
      />
    </div>
  )
}
