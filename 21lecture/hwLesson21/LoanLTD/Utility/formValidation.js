const errorMsgLogin = document.getElementById("errorMsgUsername");
const errorMsgEmail = document.getElementById("errorMsgEmail");
const errorMsgPassword = document.getElementById("errorMsgPsw");
const errorMsgPassConfirm = document.getElementById("errorMsgConfirmPsw");

function checkEmail(input) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (re.test(input.trim())) {
    return true;
  } else {
    errorMsgEmail.textContent = "Wrong Email!";
  }
}

function errorMsg(elementID, text) {
  document.getElementById(elementID).textContent = text;
}

function checkPasswordsMatch(inputOne, inputTwo) {
  if (inputOne !== inputTwo) {
    errorMsgPassConfirm.textContent = "Password do not match!";
  } else {
    return true;
  }
}

function checkLength(input, min, max) {
  if (input.length < min) {
    console.log(input, `${input} must be at least ${min} characters`);
  } else if (input.length > max) {
    console.log(input, `${input} must be less than ${max} characters`);
  } else {
    return true;
  }
}
