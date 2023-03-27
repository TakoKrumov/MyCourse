class ResultManager {

  constructor (detailsManager) {
    
    this.detailsManager = detailsManager;

  }

  getPartyIds = () => {

    const sessionId = fromLocalStorage('loggedUser').sessionId;

    let rawResults = null;

    return makeAPICall(SERVER_URL + '/results', {
      
      headers: {
        'identity' : sessionId
      }
    }).then(results => {

      let totalVoters = results.reduce((accumulator, current) => {
        return accumulator + current.voters;
      },0)
      console.log(results)
      return results.map( party => {})
    })

  }

}