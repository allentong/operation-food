const express = require("express");
const router = express.Router();

const slashCommandController = require("../controllers/slashCommandController");

router.get("/slash-command", slashCommandController.slashCommand);

module.exports = router;
