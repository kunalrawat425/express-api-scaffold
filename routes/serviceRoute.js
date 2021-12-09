var express = require('express');
var router = express.Router();
const Services = require('../controllers/servicesController');
const Validator = require("../middlewares/schemaValidator");
const services= new Services();
router.get("/", services.findAll);
router.get("/:id", services.findById);
router.post("/",Validator('createServiceSchema'), services.create);
router.patch("/:id",Validator('updateServiceSchema'), services.update);
router.delete("/:id", services.delete);

module.exports = router;