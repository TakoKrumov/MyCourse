class LoginController {

    constructor(userManager){
        this.userManager = userManager;
    }

    render = () => {

        let form = getEl('loginForm');

        form.onsubmit = (event) => {

            event.preventDefault();

            const {
                inputUsername: {value: inputUsername},
                inputPassword: {value: inputPassword}
            } = event.currentTarget;


            this.userManager.login(inputUsername,inputPassword)
            .then (data => {
                location.hash = 'listings';
            })
            .catch(error => {
                alert(error);
            })

        }
    }

}
