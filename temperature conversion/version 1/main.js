  function celsiusToFahrenheit() {
    //get the temp from the input
    const celsiusElement = document.getElementById('celsius');
    const fahrenheitElement = document.getElementById('fahrenheit');
    //convert input of str to int
    const celsius = parseFloat(celsiusElement.value);
    if(isNaN(celsius)) {
      alert('please enter a number');
      celsius.value = "";
    }
    else{
      const fahrenheit = (celsius * 9 / 5) + 32;
      fahrenheitElement.value = fahrenheit;
    }
  }
  
  function fahrenheitToCelsius() {
    //get the temp from the input
    const celsiusElement = document.getElementById('celsius');
    const fahrenheitElement = document.getElementById('fahrenheit');
    //convert input of str to int
    const fahrenheit = parseFloat(fahrenheitElement.value);
    if (isNaN(fahrenheit)) {
      alert('please enter a number');
      fahrenheit.value = "";
    }
    else {
      const celsius = (fahrenheit - 32) * 5 / 9;
      celsiusElement.value = celsius;
    }
  }