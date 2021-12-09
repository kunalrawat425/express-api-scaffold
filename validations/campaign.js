const Joi = require("joi");

exports.createCampaignSchema = Joi.object({
  userId: Joi.number(),
  amount: Joi.number().required().min(10),
  options: Joi.string().required(),
  isPaid: Joi.not().required(),
});

exports.updateCampaignSchema = Joi.object({
  userId: Joi.number(),
  amount: Joi.number(),
  options: Joi.string(),
  isPaid: Joi.boolean(),
});
