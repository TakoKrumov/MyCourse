

class UserManager {

    constructor(){
        this.loggedUser = JSON.parse(localStorage.getItem('loggedUser'));
    }

    loggedUser = null;


    vote = (partyId) => {

        const sessionId = JSON.parse(localStorage.getItem('loggedUser')).sessionId;

        return makeAPICall(SERVER_URL + `/vote/${partyId}`, {
            method: 'POST',
            headers: {
                'identity': sessionId,
                "Content-type": "application/json"
            }
        })


    }


    register = (username, password) => {

        return makeAPICall(SERVER_URL + '/users', {
           method: 'POST',
           headers: {
            "Content-type": "application/json"
           } ,
           body: JSON.stringify({
            username,
            password
           })
        })
    }
    login = (username, password) => {

        return makeAPICall(SERVER_URL + '/login', {
           method: 'POST',
           headers: {
            "Content-type": "application/json"
           } ,
           body: JSON.stringify({
            username,
            password
           })
        })
        .then(({hasVoted, sessionId, username}) => {
            localStorage.setItem('loggedUser', JSON.stringify({hasVoted, sessionId, username}));
        })
    }

}
