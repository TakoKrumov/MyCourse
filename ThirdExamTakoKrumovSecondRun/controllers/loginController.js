class LoginController {
  constructor(userManager) {
    this.userManager = userManager;
  }

  render = () => {
    let form = getElement("loginForm");

    form.onsubmit = (event) => {
      event.preventDefault();

      const {
        inputUsername: { value: inputUsername },
        inputPassword: { value: inputPassword },
      } = event.currentTarget;

      console.log(event.currentTarget);
      this.userManager
        .login(inputUsername, inputPassword)
        .then((data) => {
          let welcomeMessage = getElement('welcomeMessage')
          welcomeMessage.innerText = `Welcome ${inputUsername}!`

          console.log(data);
          location.hash = "cocktails";
          let errorMsg = getElement('errorMsg')
          errorMsg.classList.remove('errorMsg')
          errorMsg.innerHTML = `<small id="errorMsg" class="small"
          >Login with your account<br/>If you don't have account go to
          <a href="#register" class="smallLink">Sign up</a>!<br/>Field with&nbsp;<span class="redStar">*</span>&nbsp;are required!</small>`
          form.reset();
        })
        .catch((error) => {
          let errorMsg = getElement("errorMsg")
          errorMsg.classList.add('errorMsg')
          errorMsg.innerHTML = `<small>${error.message}! <br>Your password or username are incorrect! <br>Try again!</small>`;
        });

      
    };
  };
}
