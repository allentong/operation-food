const foodService = require("../services/foodService");
const randomize = require("../utilities/randomize").randomize;
const createSlackWrapper = require("../utilities/slack").createSlackWrapper;

module.exports = {
  slashCommand
};

function slashCommand(req, res) {
  try {
    foodService.getPlaces().then(response => {
      const result = response[randomize(0, response.length - 1)];
      res.json(createSlackWrapper(result));
    });
  } catch (ex) {
    console.log("SlashCommandController: slashCommand - Failed");
    throw ex;
  }
}
