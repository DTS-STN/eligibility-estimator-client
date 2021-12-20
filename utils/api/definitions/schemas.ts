import Joi from 'joi'
import { LegalStatus, LivingCountry, MaritalStatus, ResultKey } from './enums'

// This is what the API expects to receive, with the below exceptions due to normalization:
// - livingCountry accepts a string
// - partnerIncome will be added to income if it is present
//
// Note: When updating this, don't forget to update OpenAPI!
// Note: Do not require fields here, do it in the benefit-specific schemas.
export const RequestSchema = Joi.object({
  income: Joi.number().integer().min(0),
  age: Joi.number().integer().max(150),
  livingCountry: Joi.string().valid(...Object.values(LivingCountry)),
  legalStatus: Joi.string().valid(...Object.values(LegalStatus)),
  yearsInCanadaSince18: Joi.number()
    .integer()
    .ruleset.max(Joi.ref('age', { adjust: (age) => age - 18 }))
    .message('Years in Canada should be no more than age minus 18'),
  maritalStatus: Joi.string().valid(...Object.values(MaritalStatus)),
  partnerIncome: Joi.number().integer(),
  partnerReceivingOas: Joi.boolean(),
  everLivedSocialCountry: Joi.boolean(),
})

export const OasSchema = RequestSchema.concat(
  Joi.object({
    income: Joi.required(),
    age: Joi.when('income', {
      is: Joi.number().exist().greater(0).less(129757),
      then: Joi.required(),
    }),
    livingCountry: Joi.when('income', {
      is: Joi.number().exist().greater(0).less(129757),
      then: Joi.required(),
    }),
    legalStatus: Joi.when('income', {
      is: Joi.number().exist().greater(0).less(129757),
      then: Joi.required(),
    }),
    maritalStatus: Joi.when('income', {
      is: Joi.number().exist().greater(0).less(129757),
      then: Joi.required(),
    }),
    partnerIncome: Joi.when('income', {
      is: Joi.number().exist().greater(0).less(129757),
      then: Joi.number().when('maritalStatus', {
        is: Joi.exist().valid(MaritalStatus.MARRIED, MaritalStatus.COMMON_LAW),
        then: Joi.required(),
        otherwise: Joi.number().min(0).max(0),
      }),
    }),
    yearsInCanadaSince18: Joi.when('income', {
      is: Joi.number().exist().greater(0).less(129757),
      then: Joi.required(),
    }),
    everLivedSocialCountry: Joi.when('livingCountry', {
      switch: [
        {
          is: Joi.string().exist().valid(LivingCountry.CANADA),
          then: Joi.when('yearsInCanadaSince18', {
            is: Joi.number().exist().greater(0).less(10),
            then: Joi.required(),
          }),
        },
        {
          is: Joi.string().exist().valid(LivingCountry.NO_AGREEMENT),
          then: Joi.when('yearsInCanadaSince18', {
            is: Joi.number().exist().greater(0).less(20),
            then: Joi.required(),
          }),
        },
      ],
    }),
  })
)

export const GisSchema = RequestSchema.concat(
  Joi.object({
    _oasEligible: Joi.string()
      .valid(...Object.values(ResultKey))
      .required(),
    income: Joi.required(),
    age: Joi.when('income', {
      is: Joi.number().exist().max(43680),
      then: Joi.required(),
    }),
    livingCountry: Joi.when('income', {
      is: Joi.number().exist().max(43680),
      then: Joi.required(),
    }),
    legalStatus: Joi.when('income', {
      is: Joi.number().exist().greater(0).less(43680),
      then: Joi.required(),
    }),
    maritalStatus: Joi.when('income', {
      is: Joi.number().exist().greater(0).less(43680),
      then: Joi.when('_oasEligible', {
        not: Joi.valid(ResultKey.INELIGIBLE, ResultKey.MORE_INFO),
        then: Joi.required(),
      }),
    }),
    partnerIncome: Joi.when('income', {
      is: Joi.number().exist().greater(0).less(43680),
      then: Joi.number().when('maritalStatus', {
        is: Joi.exist().valid(MaritalStatus.MARRIED, MaritalStatus.COMMON_LAW),
        then: Joi.required(),
        otherwise: Joi.number().min(0).max(0),
      }),
    }),
    partnerReceivingOas: Joi.when('income', {
      is: Joi.number().exist().greater(0).less(43680),
      then: Joi.boolean().when('maritalStatus', {
        is: Joi.exist().valid(MaritalStatus.MARRIED, MaritalStatus.COMMON_LAW),
        then: Joi.required(),
        otherwise: Joi.boolean().falsy().valid(false),
      }),
      // })
      // .when('_oasEligible', {
      // is: Joi.valid(ResultKey.INELIGIBLE, ResultKey.MORE_INFO),
      // then: Joi.optional(),
    }),
  })
)

export const AllowanceSchema = RequestSchema.concat(
  Joi.object({
    income: Joi.required(),
    age: Joi.when('income', {
      is: Joi.number().exist().greater(0).less(35616),
      then: Joi.required(),
    }),
    livingCountry: Joi.when('income', {
      is: Joi.number().exist().greater(0).less(35616),
      then: Joi.required(),
    }),
    legalStatus: Joi.when('income', {
      is: Joi.number().exist().greater(0).less(35616),
      then: Joi.required(),
    }),
    yearsInCanadaSince18: Joi.when('income', {
      is: Joi.number().exist().greater(0).less(35616),
      then: Joi.required(),
    }),
    maritalStatus: Joi.when('income', {
      is: Joi.number().exist().greater(0).less(35616),
      then: Joi.required(),
    }),
    partnerIncome: Joi.number().when('maritalStatus', {
      is: Joi.exist().valid(MaritalStatus.MARRIED, MaritalStatus.COMMON_LAW),
      then: Joi.required(),
      otherwise: Joi.number().min(0).max(0),
    }),
    partnerReceivingOas: Joi.when('maritalStatus', {
      is: Joi.exist().valid(MaritalStatus.MARRIED, MaritalStatus.COMMON_LAW),
      then: Joi.required(),
      otherwise: Joi.boolean().falsy().valid(false),
    }),
  })
)

export const AfsSchema = RequestSchema.concat(
  Joi.object({
    income: Joi.required(),
    age: Joi.when('income', {
      is: Joi.number().exist().greater(0).less(25920),
      then: Joi.required(),
    }),
    livingCountry: Joi.when('income', {
      is: Joi.number().exist().greater(0).less(25920),
      then: Joi.required(),
    }),
    legalStatus: Joi.when('income', {
      is: Joi.number().exist().greater(0).less(25920),
      then: Joi.required(),
    }),
    yearsInCanadaSince18: Joi.when('income', {
      is: Joi.number().exist().greater(0).less(25920),
      then: Joi.required(),
    }),
    maritalStatus: Joi.when('income', {
      is: Joi.number().exist().greater(0).less(25920),
      then: Joi.required(),
    }),
  })
)
