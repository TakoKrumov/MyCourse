let image = document.getElementById("image");
image.style.left = "0px";
image.style.top = "0px";
image.style.position = "relative";
let container = document.getElementById("container");
container.addEventListener("keydown", arrowKeyStroke);
let body = document.getElementById('container');
body.style.width = '1920px';
body.style.height = '1080px';
body.style.background = `linear-gradient(0deg,rgba(58, 65, 136, 0.9556197478991597) 0%,rgba(140, 88, 91, 0.9948354341736695) 42%,rgba(62, 136, 210, 1) 100%)`;
body.style.backgroundSize = 'auto';

function arrowKeyStroke(e) {
  switch (e.keyCode) {
    case 37:
      moveItLeft();
      
      break;
    case 38:
      moveItTop();
      break;
    case 39:
      moveItRight();
      break;
    case 40:
      console.log(parseInt(body.style.width),parseInt(body.style.height))
      moveItBottom();
      break;
    case 116:
      break;
    default:
      console.log(e.keyCode);
      alert("You have pressed different button than arrow!")  
  }
}

function moveItLeft() {
  parseInt(image.style.left) > 0
    ? (image.style.left = parseInt(image.style.left) - 10 + `px`)
    : alert("Chose another arrow cant move more to Left!");
}
function moveItTop() {
  parseInt(image.style.top) > 0
    ? (image.style.top = parseInt(image.style.top) - 10 + `px`)
    : alert("Chose another arrow cant move more to Top!");
}
function moveItRight() {
  parseInt(image.style.left) < parseInt(body.style.width)-300
    ? (image.style.left = parseInt(image.style.left) + 10 + `px`)
    : alert(`Chose another arrow cant move more to Right!${parseInt(image.style.left)}`);
}
function moveItBottom() {
  parseInt(image.style.top) < parseInt(body.style.height)-300
    ? (image.style.top = parseInt(image.style.top) + 10 + `px`)
    : alert(`Chose another arrow cant move more to Bottom!${parseInt(body.style.height)}`);
}
