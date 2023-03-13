const animateElRed = document.getElementById('animate');
const animateElBlue = document.getElementById('animate2');
const animateElBlack = document.getElementById('animate3');
const animateElGreen = document.getElementById('animate4');
const border = 350;
let position = 0;
const intervalTime = 50;
let intervalId;

function frame() {
  if (position === border) {
    clearInterval(intervalId);
    return;
  }

  position++;

  animateElRed.style.top = `${position}px`;
  animateElRed.style.left = `${position}px`;

  animateElBlue.style.top = `${position}px`;
  animateElBlue.style.left = `${350 - position}px`;

  animateElBlack.style.top = `${350 - position}px`;
  animateElBlack.style.left = `${position}px`;

  animateElGreen.style.top = `${350 - position}px`;
  animateElGreen.style.left = `${350 - position}px`;
}

function move() {
  intervalId = setInterval(frame, intervalTime);
}

function stop() {
  clearInterval(intervalId);
}
