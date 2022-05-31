import { Instance } from 'mobx-state-tree'
import * as nextRouter from 'next/router'
import { Form } from '../../client-state/models/Form'
import { FormField } from '../../client-state/models/FormField'
import { RootStore } from '../../client-state/store'
import {
  Language,
  LegalStatus,
  LivingCountry,
  MaritalStatus,
} from '../../utils/api/definitions/enums'
import { mockPartialGetRequest } from '../pages/api/factory'

describe('test the mobx state tree nodes', () => {
  let root: Instance<typeof RootStore>
  let useRouter

  beforeAll(() => {
    useRouter = jest.spyOn(nextRouter, 'useRouter')
    useRouter.mockImplementation(() => ({
      route: '/',
      pathname: '/',
      query: '',
      asPath: '',
      locale: 'en',
      locales: ['en', 'fr'],
    }))
  })

  beforeEach(() => {
    root = RootStore.create({
      form: {},
      oas: {},
      gis: {},
      afs: {},
      allowance: {},
      summary: {},
      langData: Language.EN,
      langBrowser: Language.EN,
      inputs: [],
    })
  })

  function fillOutForm(form: Instance<typeof Form>) {
    // TODO: this should NOT use numbered indexes to fill the form, as that makes ordering changes cause tests to fail.
    form.fields[0].setValue('65') //age
    form.fields[1].setValue(LivingCountry.CANADA)
    form.fields[2].setValue(LegalStatus.CANADIAN_CITIZEN)
    form.fields[3].setValue('false') // never lived outside Canada
    form.fields[4].setValue('20000') // income
    form.fields[5].setValue(MaritalStatus.SINGLE)
  }

  async function instantiateFormFields() {
    return await mockPartialGetRequest({
      income: '20000' as unknown as number,
    })
  }

  it('can add form fields via addField', () => {
    const form: Instance<typeof Form> = root.form

    expect(form.fields).toHaveLength(0)
    form.addField({
      key: 'income',
      type: 'currency',
      label: 'What is your net annual income?',
      helpText: '',
      category: {
        key: 'incomeDetails',
        text: 'Income Details',
      },
      order: 1,
    })
    expect(form.fields).toHaveLength(1)
  })

  it('can report if a form field is filled out or not', async () => {
    const res = await instantiateFormFields()
    const form: Instance<typeof Form> = root.form
    form.setupForm(res.body.fieldData)
    expect(form.fields[0].filled).toBe(false)
    form.fields[0].setValue('10000')
    expect(form.fields[0].filled).toBe(true)
  })

  it('can create a form via an api request', async () => {
    const res = await instantiateFormFields()
    const form: Instance<typeof Form> = root.form
    form.setupForm(res.body.fieldData)
    expect(form.fields).toHaveLength(6)
  })

  it("can clear an entire form's fields", async () => {
    const res = await instantiateFormFields()
    const form: Instance<typeof Form> = root.form
    form.setupForm(res.body.fieldData)
    expect(form.fields).toHaveLength(6)
    form.removeAllFields()
    expect(form.fields).toHaveLength(0)
  })

  it('can clear all values from a form', async () => {
    const res = await instantiateFormFields()
    const form: Instance<typeof Form> = root.form

    const sendReq = jest.spyOn(form, 'sendAPIRequest')
    sendReq.mockImplementationOnce(async () => res)

    form.setupForm(res.body.fieldData)
    expect(form.fields).toHaveLength(6)
    form.clearForm()

    for (const field of form.fields) {
      expect(field.value).toBeNull()
    }
  })

  it("can predictably retrieve a form field by it's key", async () => {
    const form: Instance<typeof Form> = root.form
    form.addField({
      key: 'income',
      type: 'currency',
      label: 'What is your current annual net income in Canadian Dollars?',
      helpText: '',
      category: { key: 'incomeDetails', text: 'Income Details' },
      order: 1,
      placeholder: '$20,000',
      default: undefined,
      value: null,
      options: [],
      error: undefined,
    })

    const field = form.getFieldByKey('income')

    expect(field.key).toEqual('income')
    expect(field.label).toEqual(
      'What is your current annual net income in Canadian Dollars?'
    )
  })

  it("can sanitize a form field's value as expected", async () => {
    const res = await instantiateFormFields()
    const field: Instance<typeof FormField> = FormField.create(
      res.body.fieldData[0]
    )
    field.setValue('$20,000.00')
    expect(field.sanitizeInput()).toEqual('20000.00')
  })

  it('can report on empty fields in a form as expected', async () => {
    const res = await instantiateFormFields()
    const form: Instance<typeof Form> = root.form
    form.setupForm(res.body.fieldData)
    fillOutForm(form)
    expect(form.validateAgainstEmptyFields('en')).toBe(false) // no errors exist
    form.fields[0].setValue(null)
    expect(form.validateAgainstEmptyFields('en')).toBe(true)
  })

  it('can build a consistent input object', async () => {
    const res = await instantiateFormFields()
    const form: Instance<typeof Form> = root.form
    form.setupForm(res.body.fieldData)
    let input = form.buildObjectWithFormData(Language.EN)
    expect(input).toEqual({ _language: 'en', livingCountry: 'CAN' }) // blank form includes default livingCountry
    fillOutForm(form)
    input = form.buildObjectWithFormData()
    expect(input.income).toEqual('20000')
    expect(input.age).toEqual('65')
    expect(input.maritalStatus).toEqual('single')
    expect(input.livingCountry).toEqual('CAN')
    expect(input.legalStatus).toEqual('canadianCitizen')
    expect(input.livedOutsideCanada).toEqual('false')
  })
})
