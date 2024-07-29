const convertToCelsius = function(fahrenheitValue) {
  let resultCelsius = ((fahrenheitValue - 32) * (5/9));
  let roundedResultCelsius = Math.round(resultCelsius * 10)/10;
  return roundedResultCelsius;
  
};

const convertToFahrenheit = function(celsiusValue) {
  let resultFahrenheit = ((celsiusValue*(9*5))+32);
  let roundedResultFahrenheit = Math.round(resultFahrenheit * 10)/10;
  return roundedResultFahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
