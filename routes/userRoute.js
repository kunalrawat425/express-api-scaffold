var express = require('express');
var router = express.Router();
const User = require('../controllers/usersController');
const Validator = require("../middlewares/schemaValidator");
const user = new User();
router.get("/", user.findAll);
router.get("/:id", user.findById);
router.post("/",  Validator("registerSchema"), user.create);
router.patch("/:id", user.update);
router.delete("/:id", user.delete);

module.exports = router;