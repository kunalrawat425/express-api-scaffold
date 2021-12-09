var express = require('express');
var router = express.Router();
const Promocodes = require('../controllers/promocodesController');
const Validator = require("../middlewares/schemaValidator");
const promocodes = new Promocodes();
router.get("/", promocodes.findAll);
router.get("/:id", promocodes.findById);
router.post("/",Validator('createPromocodeSchema'), promocodes.create);
router.patch("/:id",Validator('updatePromocodeSchema'), promocodes.update);
router.delete("/:id", promocodes.delete);

module.exports = router;