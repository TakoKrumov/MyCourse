class RegisterController {
  constructor(userManager) {
    this.userManager = userManager;
  }

  checkUsername = (username) => {
    username = username.trim()
    if (username.length < 5 || username.includes(" ")) {
      const errorMsgUsername = getElement("errorMsgUsernameReg");
      errorMsgUsername.classList.add("errorMsg");
      errorMsgUsername.innerHTML = `<small id="errorMsgUsernameReg" class="small">Wrong username<br>&nbsp;</small>`;
      return false;
    }

    return true;
  };

  checkPassword = (password) => {
    if (
      password.trim().length < 6 ||
      !/[a-z]/.test(password) ||
      !/[A-Z]/.test(password) ||
      !/[0-9]/.test(password) ||
      !/[!@#$%^&*()]/.test(password)
    ) {
      const errorMsgPasswords = getElement("errorMsgPassword");
      errorMsgPasswords.classList.add("errorMsg");
      errorMsgPasswords.innerHTML = `<small id="errorMsgPassword" class="small">Password can't be less than 6 characters<br>and must contain one capital and one small letter</small>`;
      return false;
    }

    return true;
  };

  checkPassWordMatch(password, conformPassword) {
    if (password.trim() === conformPassword.trim()) {
      const errorMsgConfirmPasswords = getElement("errorMsgPasswordConf");
      errorMsgConfirmPasswords.classList.remove("errorMsg");
      errorMsgConfirmPasswords.innerHTML = `<small id="errorMsgPasswordConf" class="small">OK!<br>&nbsp;</small>`;
      errorMsgConfirmPasswords.classList.add("success");
      const errorMsgPasswords = getElement("errorMsgPassword");
      errorMsgPasswords.classList.remove("errorMsg");
      errorMsgPasswords.innerHTML = `<small id="errorMsgPassword" class="small">OK!<br>&nbsp;</small>`;
      errorMsgPasswords.classList.add("success");
      return true;
    } else {
      const errorMsgDifferentPasswords = getElement("errorMsgPasswordConf");
      errorMsgDifferentPasswords.innerHTML = `<small id="errorMsgPasswordConf" class="small">Confirm do not match password!<br>&nbsp;</small>`;
      errorMsgDifferentPasswords.classList.add("errorMsg");
      return false;
    }
  }

  checkForm = (inputUsername, inputPassword, inputPasswordConfirm) => {
    const arrayForFormCheck = [
      this.checkUsername(inputUsername),
      this.checkPassword(inputPassword),
      this.checkPassWordMatch(inputPassword, inputPasswordConfirm),
    ];

    const result = arrayForFormCheck.filter((element) => element === true);
    console.log(result);

    if(result.length === arrayForFormCheck.length) {
      return true;
    }
    return false;
  };

  render = () => {
    let form = getElement("registerForm");

    form.onsubmit = (event) => {
      event.preventDefault();

      const {
        inputUsername: { value: inputUsername },
        inputPassword: { value: inputPassword },
        inputPasswordConfirm: { value: inputPasswordConfirm },
      } = event.currentTarget;
      const check = this.checkForm(
        inputUsername,
        inputPassword,
        inputPasswordConfirm
      );
      if (check) {
        this.userManager
          .register(inputUsername.trim(), inputPassword.trim())
          .then((data) => {
            const errorMsgConfirmPasswords = getElement("errorMsgPasswordConf");
            const errorMsgUsername = getElement("errorMsgUsernameReg");
            const errorMsgPasswords = getElement("errorMsgPassword");
            [
              errorMsgConfirmPasswords,
              errorMsgUsername,
              errorMsgPasswords,
            ].forEach((element) => {
              element.classList.remove("errorMsg")
              element.classList.remove("success")
            });
            errorMsgUsername.innerHTML = `<small id="errorMsgUsernameReg" class="small">Username must be at least 5<br>and maximum 25 characters</small>`;
            errorMsgPasswords.innerHTML = `<small id="errorMsgPassword" class="small">Password must be at least 6<br>and maximum 25 characters</small>`;
            errorMsgConfirmPasswords.innerHTML = `<small id="errorMsgPasswordConf" class="small">Confirm password must<br>be same as password!</small>`;
            location.hash = "login";

            form.reset();
          })
          .catch((error) => {
            const errorMsgName = getElement("errorMsgUsernameReg");
            errorMsgName.textContent = error.message;
            errorMsgName.classList.add("errorMsg");
          });
      }
    };
  };
}
