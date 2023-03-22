class DetailsManager {

  constructor() {

    
  }

  getDetails = () => {

    const sessionId = JSON.parse(localStorage.getItem("loggedUser")).sessionId

    return makeAPICall(SERVER_URL +  `/party/${id}`,{
      headers: {
        'identity' : sessionId
      }
        
    }).then(response => console.log(response))
  }

}