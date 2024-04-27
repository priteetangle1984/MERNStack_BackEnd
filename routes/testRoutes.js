const express = require("express")
const { testController } = require("../controllers/testController");

//ROUTER OBJECT
const router = express.Router();

//ROUTES
router.get('/', testController);

//EXPORT
module.exports = router;