var express = require('express');
var router = express.Router();
const Payments = require('../controllers/paymentsController');
const Validator = require("../middlewares/schemaValidator");
const payments = new Payments();
router.get("/", payments.findAll);
router.get("/:id", payments.findById);
router.post("/",Validator('createPaymentSchema'), payments.create);
router.patch("/:id",Validator('updatePaymentSchema'), payments.update);
router.delete("/:id", payments.delete);

module.exports = router;