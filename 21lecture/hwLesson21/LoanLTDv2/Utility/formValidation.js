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
    return false;
  } else if (input.length > max) {
    console.log(input, `${input} must be less than ${max} characters`);
    return false;
  } else {
    return true;
  }
}

function registerCheckForm (accEmail, accPassword, accPassConf) {
  
    let passLengthCheck = checkLength(accPassword,5,25);
    let passCheck = checkPasswordsMatch(accPassword,accPassConf);
    let emailCheck = checkEmail(accEmail);
    

    if (passLengthCheck && passCheck && emailCheck) {
      return true;
    }

    return false;
}