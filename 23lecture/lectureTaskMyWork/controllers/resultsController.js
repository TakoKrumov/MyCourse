class ResultsController {

  constructor (resultsManager) {

    this.resultsManager = resultsManager;

  }

  render = () => {
    location.hash = 'results'

    let array = this.resultsManager.getPartyIds();
    console.log(array)
  }
 
}