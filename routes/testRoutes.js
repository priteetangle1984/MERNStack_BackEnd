const express = require("express");
const { testController } = require("../controllers/testController");

const router = express.Router();

// Test route
router.get("/", testController);

module.exports = router;