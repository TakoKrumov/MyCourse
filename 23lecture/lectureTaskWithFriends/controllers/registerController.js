class RegisterController {

    constructor(userManager){
        this.userManager = userManager;
    }


    render = () => {

        let form = getEl('registerForm');

        form.onsubmit = (event) => {

            event.preventDefault();

            const {
                inputUsername: {value: inputUsername},
                inputPassword: {value: inputPassword},
                inputPasswordConfirm: {value: inputPasswordConfirm}
            } = event.currentTarget;


            this.userManager.register(inputUsername,inputPassword)
            .then (data => {
                location.hash = 'login';
            })
            .catch(error => {
                alert(error);
            })

        }
    }

}
