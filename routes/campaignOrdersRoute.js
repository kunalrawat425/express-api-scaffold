var express = require('express');
var router = express.Router();
const CampaignOrders = require('../controllers/campaignOrdersController');
const Validator = require("../middlewares/schemaValidator");
const campaignOrders = new CampaignOrders();

router.get("/", campaignOrders.findAll);
router.get("/:id", campaignOrders.findById);
router.post("/", Validator('createCampaignOrderSchema'),campaignOrders.create);
router.patch("/:id",Validator('updateCampaignOrderSchema'), campaignOrders.update);
router.delete("/:id", campaignOrders.delete);

module.exports = router;