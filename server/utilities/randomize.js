module.exports = {
  randomize
};

function randomize(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}
