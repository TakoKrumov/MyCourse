class PartiesManager {


  //when method is get is default
  getAllParties = () => {
    const sessionId = fromLocalStorage('loggedUser').sessionId
    return makeAPICall(SERVER_URL + '/parties' , {
      headers: {
        'identity': sessionId
      }
    })

  }


  search = (keyword) => {
    const sessionId = fromLocalStorage('loggedUser').sessionId
    return makeAPICall (SERVER_URL + '/parties-search', {
      
      headers: {
        'identity': sessionId,
        'partyName': keyword                                  
      }
    })
  }
}

