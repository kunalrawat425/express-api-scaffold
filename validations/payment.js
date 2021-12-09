const Joi = require("joi");

exports.createPaymentSchema = Joi.object({
  userId: Joi.number().required(),
  campaignId: Joi.number().required(),
  type: Joi.string().required(),
  amount: Joi.number().required(),
  description: Joi.string().required(),
  options: Joi.string().required(),
});

exports.UpdatePaymentSchema = Joi.object({
  userId: Joi.number(),
  campaignId: Joi.number(),
  type: Joi.number(),
  amount: Joi.number(),
  description: Joi.string(),
  options: Joi.string(),
});
