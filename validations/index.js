const { registerSchema, loginSchema } = require("./user");
const { createVendorSchema, updateVendorSchema } = require("./vendor");
const { createCampaignSchema, updateCampaignSchema } = require("./campaign");
const {
  createCampaignOrderSchema,
  updateCampaignOrderSchema,
} = require("./campaignorder");
const { createPaymentSchema, updatePaymentSchema } = require("./payment");
const { createServiceSchema, updateServiceSchema } = require("./service");
const {
  createServiceTypeSchema,
  updateServiceTypeSchema,
} = require("./servicetype");
const {
  createPlatformSchema,
  updatePlatformSchema,
} = require("./platform");
const {
  createPromocodeSchema,
  updatePromocodeSchema,
} = require("./promocode");

module.exports = {
  registerSchema,
  loginSchema,
  createVendorSchema,
  updateVendorSchema,
  createCampaignSchema,
  updateCampaignSchema,
  createCampaignOrderSchema,
  updateCampaignOrderSchema,
  createPaymentSchema,
  updatePaymentSchema,
  createServiceSchema,
  updateServiceSchema,
  createServiceTypeSchema,
  updateServiceTypeSchema,
  createPlatformSchema,
  updatePlatformSchema,
  createPromocodeSchema,
  updatePromocodeSchema,
};
