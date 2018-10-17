const express = require("express");
const router = express.Router();

const slashCommandController = require("../controllers/slashCommandController");

router.post("/slash-command", slashCommandController.slashCommand);

module.exports = router;
