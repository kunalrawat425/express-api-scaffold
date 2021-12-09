var express = require("express");
var router = express.Router();
const ServiceTypes = require("../controllers/serviceTypesController");
const Validator = require("../middlewares/schemaValidator");
const serviceTypes = new ServiceTypes();

router.get("/", serviceTypes.findAll);
router.get("/:id", serviceTypes.findById);
router.post("/", Validator("createServiceTypeSchema"), serviceTypes.create);
router.patch(
  "/:id",
  Validator("updateServiceTypeSchema"),
  serviceTypes.update
);
router.delete("/:id", serviceTypes.delete);

module.exports = router;
