const redElement = document.getElementById('red');
const greenElement = document.getElementById('green');
const blueElement = document.getElementById('blue');
const displayElement = document.getElementById('display');
const hexElement = document.getElementById('hex');

let red;
let green;
let blue;


redElement.addEventListener('input', color);
greenElement.addEventListener('input', color);
blueElement.addEventListener('input', color);

// redElement.addEventListener('change', color);
// greenElement.addEventListener('change', color);
// blueElement.addEventListener('change', color);

function color() {

  if(hexElement.checked){
    // console.log('hex: checked');
    redElement.type = 'text';
    greenElement.type = 'text';
    blueElement.type = 'text'
  
  red = parseInt(redElement.value, 16);
  green = parseInt(greenElement.value, 16);
  blue = parseInt(blueElement.value, 16);
  }
  else{
    red = parseInt(redElement.value);
    green = parseInt(greenElement.value);
    blue = parseInt(blueElement.value);
  
  }
  
  if(red < 0 || red > 255 || isNaN(red) || green < 0 || green > 255 || isNaN(green) || blue < 0 || blue > 255 || isNaN(blue) ){
    displayElement.innerHTML = 'Values should lie between 0 and 255(0 - ff)'
    displayElement.style.backgroundColor
= 'white';
  }
  
  else{
    displayElement.style.backgroundColor = `rgb( ${red}, ${green}, ${blue} )`;
    displayElement.innerHTML = '';
    
    console.log(`${red}, ${green}, ${blue} )`);
  }
}


