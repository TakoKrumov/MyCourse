class User {
    constructor(user, pass) {
        this.username = user;
        this.pass = pass;
    }
}

//Ще прави регистрация, логване
class UserManager {
    //constructor get's called every time when we create a new instance 
    constructor() {
        let loggedUser = JSON.parse(localStorage.getItem('LoggedUser')); //Приема един параметър ключ
        if (loggedUser) {
            this.loggedUser = new User(loggedUser.username, loggedUser.pass);
        }
    }

    loggedUser = null;
    users = [new User('andrei', '1234567'), new User('1234567', 'andrei')]; //Направи за регистър с JSON

    login = ({ username, pass }) => {
        let foundUser = this.users.find(user => user.username === username &&
            user.pass === pass);
        if (foundUser) {
            this.loggedUser = foundUser;
            localStorage.setItem('LoggedUser', JSON.stringify(this.loggedUser)); //функцията очаква два стринг параметъра - ключ и стойност и не връща резултат
            return true;
        }
        return false;
    }
    //Проверката дали паролите съвпадат ще е във ViewController-a и ако е успешна, само тогава ще изпълня
    //долната функция
    register = ({ username, pass }) => {
        let foundUser = this.users.find(user => user.username === username);
        if (!foundUser) {
            this.users.push(new User(username, pass));
            return true;
        } else {
            alert("Username is already taken.");
            return false;
        }

    }
}

let userManager = new UserManager();


