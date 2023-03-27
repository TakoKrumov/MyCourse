class DetailsManager {

  getDetails = (partyId) => {

    const sessionId = fromLocalStorage('loggedUser').sessionId;

    return makeAPICall(SERVER_URL + `/party/${partyId}`, {
      headers: {
        'identity': sessionId
      }
    })
  }

}