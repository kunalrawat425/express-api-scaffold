const Joi = require('joi')

exports.loginSchema = Joi.object({
    email: Joi.string().email().lowercase().required(),
    password: Joi.string().min(4).required()
});

exports.registerSchema = Joi.object({
  email: Joi.string().max(100).email().lowercase().required(),
  first_name: Joi.string().min(4).max(25).required(),
  last_name: Joi.string().min(4).max(25).required(),
  password: Joi.string().min(4).required()
});

exports.createUserSchema = Joi.object({
  first_name: Joi.string().required().min(4).max(25),
  last_name: Joi.string().required().min(4).max(25),
  email: Joi.string().max(100).email().lowercase().required(),
  password: Joi.string().min(4).required()
});

exports.updateUserSchema = Joi.object({
  first_name: Joi.string().min(4).max(25),
  last_name: Joi.string().min(4).max(25),
  email: Joi.not().required(),
});

