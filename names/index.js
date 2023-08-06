const arrayofNames = require("../country/state/city/index.js");
const firstNames = require("../utilities/utils/index.js");

console.log(arrayofNames);

console.log(firstNames);

const getPeopleInCity = (city) => {
  return firstNames(city);
};
module.exports = getPeopleInCity;
