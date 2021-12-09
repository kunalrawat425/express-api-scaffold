const Joi = require("joi");

exports.createCampaignOrderSchema = Joi.object({
  campaignId: Joi.number().required(),
  serviceId: Joi.number().required(),
  quantity: Joi.number().required(),
  options: Joi.string().required(),
});

exports.updateCampaignOrderSchema = Joi.object({
  campaignId: Joi.number(),
  serviceId: Joi.number(),
  quantity: Joi.number(),
  options: Joi.string(),
});
