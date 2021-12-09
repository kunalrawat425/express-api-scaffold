const Joi = require("joi");

exports.createVendorSchema = Joi.object({
  name: Joi.string().required().min(4).max(256),
  options: Joi.string().required(),
  isEnabled : Joi.boolean(),
});

exports.updateVendorSchema = Joi.object({
  name: Joi.string().min(4).max(256),
  options: Joi.string(),
  isEnabled : Joi.boolean(),
});
