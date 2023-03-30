class UserManager {

    constructor() {

        this.loggedUser = JSON.parse(localStorage.getItem('loggedUser'));

    }

    loggedUser = null;

    login = (username, password) => {

        return makeAPICall(SERVER_URL + '/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                password
            })
        })
            .then((response) => {

                let user = {
                    sessionId: response.sessionId,
                    username: response.username,
                    hasVoted: response.hasVoted
                }

                localStorage.setItem('loggedUser', JSON.stringify(user));

                userManager.loggedUser = user;


            })

    }

    register = (username, password) => {

        return makeAPICall(SERVER_URL + '/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        })
    }

    logout = (sessionId) => {

        return makeAPICall(SERVER_URL + '/logout', {

            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: sessionId
            })
        })
    }

}

let userManager = new UserManager();