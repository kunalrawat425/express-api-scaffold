const Joi = require("joi");

exports.createPromocodeSchema = Joi.object({
    name: Joi.string().min(4).max(256).required(),
    description: Joi.string().min(4).required(),
    exipredAt: Joi.date().iso().required(),
    isEnabled: Joi.boolean().required(),
    options: Joi.string().required(),
  });
  
  exports.updatePromocodeSchema = Joi.object({
    name: Joi.string().min(4).max(256),
    description: Joi.string().min(4),
    exipredAt: Joi.date().iso().required(),
    isEnabled: Joi.boolean(),
    options: Joi.string(),
  });
  