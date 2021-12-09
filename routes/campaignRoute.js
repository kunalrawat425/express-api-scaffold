var express = require("express");
var router = express.Router();
const Campaigns = require("../controllers/campaignsController");
const campaigns = new Campaigns();
const Validator = require("../middlewares/schemaValidator");

router.get("/", campaigns.findAll);
router.get("/:id", campaigns.findById);
router.post("/", Validator('createCampaignSchema'), campaigns.create);
router.patch("/:id", Validator('updateCampaignSchema'), campaigns.update);
router.delete("/:id", campaigns.delete);

module.exports = router;
