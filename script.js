let text =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quibusdam fugit ipsa? Explicabo itaque voluptas voluptatum repudiandae eveniet, dignissimos facilis expedita ipsa, asperiores sunt quisquam ad laboriosam nisi quae temporibus';
let wordList = text.split(' ');
let container = document.querySelector('.container');
let red, blue, green;

//Random colors
function colorChanger() {
  red = Math.floor(Math.random() * 255);
  blue = Math.floor(Math.random() * 255);
  green = Math.floor(Math.random() * 255);
}

//Random element positioning
function scatterWords() {
  leftValue = Math.floor(Math.random() * window.innerWidth - 100);
  topValue = Math.floor(Math.random() * window.innerHeight - 100);
}

//Random blinking
function randomBlink() {
  let min = 5;
  let max = 10;
  animDuration = Math.floor(Math.random() * (max - min + 1)) + min;
}

// Element creation
for (let i = 0; i < wordList.length; i++) {
  let word = document.createElement('p');
  word.innerText = wordList[i];
  colorChanger();
  word.style.color = `rgb(${red}, ${blue}, ${green})`;
  scatterWords();
  word.style.top = `${topValue}px`;
  word.style.left = `${leftValue}px`;
  randomBlink();
  word.style.animationDuration = `${animDuration}s`;
  container.appendChild(word);
}

// Collision detection
