class ViewController {

    constructor() {
        this.userManager = new UserManager;
        window.addEventListener('load', this.handleHashChange);
        window.addEventListener('hashchange', this.handleHashChange);
        window.addEventListener('load', () => {
            if (JSON.parse(localStorage.getItem('dataBase'))) {

                this.userManager.users = [];
                JSON.parse(localStorage.getItem('dataBase')).forEach( element => {
                    
                    this.userManager.users.push(element);
                })
                
            }
        });

        
    }

    
    handleHashChange = () => {
        const pageIds = ['login', 'register', 'home'];

        let hash = location.hash.slice(1) || pageIds[0];        


        pageIds.forEach(pageId => {
            let element = document.getElementById(pageId);
            if(pageId === hash) {
                element.style.display = 'flex';
            } else {
                element.style.display = 'none';
            }
        });

        if (!!this.userManager.loggedUser) {
            location.hash = 'home';
            let loginLink = document.getElementById('loginLink');
            if (loginLink.id === 'loginLink') {
                
                location.hash = 'home';
                loginLink.innerText = 'Logout';
                loginLink.href = '';
                document.getElementById('loginLink').addEventListener('click',() => this.userManager.logout());
                return;
            }
            
            return;
        };

        if(hash === 'home') {
            if(!this.userManager.loggedUser) {
                location.hash = 'login';
                return; 
            }

            return;
        } 

        

        switch(hash) {

            case 'login':
                this.renderLogin();
                break;
            case 'register' :
                this.renderRegister();
                break;

            case 'home':
                
        }

    }

    checkInputRegister = () => {
        let registerNameMsg = document.getElementById("registerNameMessage");
        let registerPassMsg = document.getElementById("registerPasswordMessage");
        let registerPassConfMsg = document.getElementById("registerPasswordMessageConf");
        
        let newUserName = document.getElementById("newUserName").value;
        let newPassword = document.getElementById("newUserPassword").value;
        let confirmPassword = document.getElementById("newUserPasswordConf").value;

        if (!newUserName || !newPassword || !confirmPassword) {
            
            return false;
        }

        if (newUserName.length < 7 || !/[a-z]/.test(newUserName) 
        || !/[A-Z]/.test(newUserName) || !/[0-9]/.test(newUserName)) {
            registerNameMsg.className = "error";
            registerNameMsg.innerText = "Wrong input for name!";
            return false;
        
        } else {
            registerNameMsg.className = "success";
            registerNameMsg.innerText = "correct username";
            
        }
        if (newPassword !== confirmPassword) {
            registerPassMsg.className = "error";
            registerPassMsg.innerText = "Password and confirm password dosn't mach!";
            registerPassConfMsg.className = "error";
            registerPassConfMsg.innerText = "Password and confirm password dosn't mach!";

            return false;
        } else {
            registerPassMsg.className = "success";
            registerPassMsg.innerText = "Password and confirm password match";
            registerPassConfMsg.className = "success";
            registerPassConfMsg.innerText = "Password and confirm password mach!";
            
        }

        if (newPassword.length < 7 || !/[a-z]/.test(newPassword) 
            || !/[A-Z]/.test(newPassword) || !/[0-9]/.test(newPassword) 
            || !/[!@#$%^&*()]/.test(newPassword)) {
            
            registerPassMsg.className = "error";
            registerPassMsg.innerText = "Password must containe one lower case, upper case, number and one symbol from combination of shift + [0-9]!";
            
            return false;
            } else {
                registerPassMsg.className = "success";
                registerPassMsg.innerText = "Password and confirm password match";
                
            }
            console.log({newUserName,newPassword})
            return newUserName,newPassword;
        //     registerNameMsg.className = "error";
        //     registerPassMsg.className = "error";
        //     registerPassConfMsg.className = "error";
    }   

    renderRegister = () => {
        let submitBtn = document.getElementById("submitRegister");
        let registerForm = document.getElementById("registerForm");
        let registerNameMsg = document.getElementById("registerNameMessage");
        let registerPassMsg = document.getElementById("registerPasswordMessage");
        let registerPassConfMsg = document.getElementById("registerPasswordMessageConf");
        let newUserName = document.getElementById("newUserName");
        let newPassword = document.getElementById("newUserPassword");
        let confirmPassword = document.getElementById("newUserPasswordConf");
        newUserName.addEventListener('input', () => {
            if(this.checkInputRegister()){
                submitBtn.disabled = false;
            }
        });

        newPassword.addEventListener('input', () => {
            if(this.checkInputRegister()){
                submitBtn.disabled = false;
            }
        });

        confirmPassword.addEventListener('input', () => {
            if(this.checkInputRegister()){
                submitBtn.disabled = false;
            }
        });
        registerForm.onsubmit = (e) => {
            e.preventDefault();
            if (this.checkInputRegister()) {
                
                let username = document.getElementById('newUserName').value;
                let pass = document.getElementById('newUserPassword').value;
                this.userManager.register({ username, pass });
                registerNameMsg.classList.remove("success");
                registerPassMsg.classList.remove("success");
                registerPassConfMsg.classList.remove("success");
                submitBtn.disabled = true;
                this.userManager.dataBase();
                location.hash = "login";
            };
        };
        
        registerForm.reset();
    }

    renderLogin = () => {
        let loginBtn = document.getElementById("submitLogin");
        let loginUser = document.getElementById("username");
        let loginPassword = document.getElementById("password");
       
        loginUser.addEventListener('input', () => {
            if(loginUser.value && loginPassword.value){
                loginBtn.disabled = false;
            }
        });

        loginPassword.addEventListener('input', () => {
            if(loginUser.value && loginPassword.value){
                loginBtn.disabled = false;
            }
        });

        
        let form = document.getElementById('loginForm');
        
        form.onsubmit = (e) => {
            
            e.preventDefault();
            let username = e.target.elements.username.value;
            let pass = e.target.elements.pass.value;
            let successfulLogin = this.userManager.login({username, pass});
            location.hash = 'home';
            document.getElementById('home').style.display = 'flex';
            this.handleHashChange();
        
        }
    }
    
}

let viewController = new ViewController();