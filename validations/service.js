const Joi = require("joi");

exports.createServiceSchema = Joi.object({
  name: Joi.string().min(4).max(256).required(),
  vendorId: Joi.number().required(),
  vendorServiceId: Joi.number().required(),
  platformId: Joi.number().required(),
  serviceTypeId: Joi.number().required(),
  isEnabled: Joi.boolean().required(),
  options: Joi.string().required(),
});

exports.updateServiceSchema = Joi.object({
  name: Joi.string().min(4).max(256),
  vendorId: Joi.number(),
  vendorServiceId: Joi.number(),
  platformId: Joi.number(),
  serviceTypeId: Joi.number(),
  isEnabled: Joi.boolean(),
  options: Joi.string(),
});
