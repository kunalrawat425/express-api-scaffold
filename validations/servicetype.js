const Joi = require("joi");

exports.createServiceTypeSchema = Joi.object({
  name: Joi.string().required().min(4).max(256),
  platformId: Joi.number().required(),
  isEnabled: Joi.boolean().required(),
});

exports.updateServiceTypeSchema = Joi.object({
  name: Joi.string().min(4).max(256),
  platformId: Joi.number(),
  isEnabled: Joi.boolean(),
});
