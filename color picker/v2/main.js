const redElement = document.getElementById('red');
const greenElement = document.getElementById('green');
const blueElement = document.getElementById('blue');
const displayElement = document.getElementById('display');
const hexElement = document.getElementById('hex');
const copyButton = document.getElementById('copyButton');

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

   red = parseInt(redElement.value);
   green = parseInt(greenElement.value);
   blue = parseInt(blueElement.value);
  
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

copyButton.addEventListener("click", () => writeClipboardColor(`rgb(${red}, ${green}, ${blue})`));

async function writeClipboardColor(text) {
  try {
    await navigator.clipboard.writeText(text);
    alert('color copied');
  } catch (error) {
    console.error(error.message);
  }
}



