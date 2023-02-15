let inputEl = document.getElementById('value-input');
let volumeText = document.getElementById('volume-text');
let massText = document.getElementById('mass-text');
let lengthText = document.getElementById('length-text');

let btnEl = document.getElementById('btn-el');

let input = 100;
let meters = 0;
let feet = 0;
let liters = 0;
let gallons = 0;
let kilograms = 0;
let pounds = 0;

// FUNCTION TO CONVERT UNITS FROM INPUT
function convertInput(input) {
  meters = (input / 3.281).toFixed(3);
  feet = (input * 3.281).toFixed(3);
  liters = (input / 0.264).toFixed(3);
  gallons = (input * 0.264).toFixed(3);
  kilograms = (input / 2.204).toFixed(3);
  pounds = (input * 2.204).toFixed(3);
}

// FUNCTION TO UPDATE UI AFTER CONVERTING UNITS
function updateUI() {
  convertInput(inputEl.value);

  lengthText.textContent = `${inputEl.value} meters = ${feet} feet | ${inputEl.value} feet = ${meters} meters`;

  volumeText.textContent = `${inputEl.value} liters = ${gallons} gallons | ${inputEl.value} gallons = ${liters} liters`;

  massText.textContent = `${inputEl.value} kilos = ${pounds} pounds | ${inputEl.value} pounds = ${kilograms} kilograms`;

  inputEl.value = '';
}

// inputEl.addEventListener('input', convertAll);

btnEl.addEventListener('click', updateUI);
