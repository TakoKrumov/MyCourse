class UserManager {
  constructor() {
    this.loggedUser = fromLocalStorage("loggedUser");
  }

  loggedUser = null;

  // vote = (partyId) => {

  //     const sessionId = fromLocalStorage('loggedUser').sessionId;

  //     return makeAPICall(SERVER_URL + `/vote/${partyId}`, {
  //         method: 'POST',
  //         headers: {
  //             'identity': sessionId,
  //             "Content-type": "application/json"
  //         }
  //     })

  // }
  logout = (id) => {
    return makeAPICall(SERVER_URL + "/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
      }),
    });
  };

  register = (username, password) => {
    username = username.trim()
    password = password.trim()
    return makeAPICall(SERVER_URL + "/users", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });
  };

  login = (username, password) => {
    username = username.trim()
    password = password.trim()
    return makeAPICall(SERVER_URL + "/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    }).then(({ hasVoted, sessionId, username }) => {
      localStorage.setItem(
        "loggedUser",
        JSON.stringify({ hasVoted, sessionId, username })
      );
    });
  };
}
