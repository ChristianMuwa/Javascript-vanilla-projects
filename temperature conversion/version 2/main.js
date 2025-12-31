const celsius = document.getElementById('celsius');
const farhenheit = document.getElementById('farhenheit');
const celsiusDisplay = document.getElementById('celsiusDisplay');
const farhenheitDisplay = document.getElementById('farhenheitDisplay');

celsius.addEventListener('input', () => {
  if (!isNaN(celsius.value) && celsius.value !== '') {
    celsiusDisplay.textContent = `${celsius.value}°C`;
    farhenheitDisplay.textContent = `${(celsius.value * 9/5 + 32).toFixed(2)}°F`;
  } else {
    al
    farhenheitDisplay.textContent = '°F';
  }
});

farhenheit.addEventListener('input', () => {
  if (!isNaN(farhenheit.value) && farhenheit.value !== '') {
    farhenheitDisplay.textContent = `${farhenheit.value}°F`;
    celsiusDisplay.textContent = `${((farhenheit.value - 32) * 5/9).toFixed(2)}°C`;
  } else {
    celsiusDisplay.textContent = '°C';
  }
});