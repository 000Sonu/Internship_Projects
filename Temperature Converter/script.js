// script.js

document.getElementById('convert-btn').addEventListener('click', convertTemperature);

function convertTemperature() {
  var temperatureInput = document.getElementById('temperature').value;
  var unitSelect = document.getElementById('unit');
  var selectedUnit = unitSelect.options[unitSelect.selectedIndex].value;
  var convertedTemperature;

  if (selectedUnit === 'celsius') {
    convertedTemperature = (temperatureInput - 32) * 5 / 9;
  } else if (selectedUnit === 'fahrenheit') {
    convertedTemperature = (temperatureInput * 9 / 5) + 32;
  } else if (selectedUnit === 'kelvin') {
    convertedTemperature = parseFloat(temperatureInput) + 273.15;
  }

  document.getElementById('result').textContent = 'Converted Temperature: ' + convertedTemperature.toFixed(2) + ' ' + selectedUnit;
}
