var express = require("express");
var router = express.Router();
const Vendors = require("../controllers/vendorsController");
const Validator = require("../middlewares/schemaValidator");
const vendors = new Vendors();
router.get("/", vendors.findAll);
router.get("/:id", vendors.findById);
router.post("/",Validator('createVendorSchema'), vendors.create);
router.patch("/:id",Validator('updateVendorSchema') , vendors.update);
router.delete("/:id", vendors.delete);

module.exports = router;
