const places = require("../data/places.json").places;

module.exports = {
  getPlaces
};

function getPlaces() {
  try {
    return new Promise(resolve => {
      resolve(places);
    });
  } catch (ex) {
    console.log("Food Service - Failed!");
    throw ex;
  }
}
