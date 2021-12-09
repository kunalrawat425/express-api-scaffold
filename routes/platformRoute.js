var express = require('express');
var router = express.Router();
const Platforms = require('../controllers/platformsController');
const Validator = require("../middlewares/schemaValidator");
const platforms = new Platforms();
router.get("/", platforms.findAll);
router.get("/:id", platforms.findById);
router.post("/",Validator('createPlatformSchema'), platforms.create);
router.patch("/:id",Validator('updatePlatformSchema'), platforms.update);
router.delete("/:id", platforms.delete);

module.exports = router;