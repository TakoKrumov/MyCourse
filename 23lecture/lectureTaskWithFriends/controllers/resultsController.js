class ResultsController {


    constructor(resultManager){

        this.resultManager = resultManager;

    }

    render = () => {

        location.hash = 'results';

        let array = this.resultManager.getPartyIds();

        let body = getEl('resultsTable');
        body.innerHTML = "";

        array.then(party => {

            party.forEach(element => {
                
                let tr = document.createElement('tr');
                let partyTd = document.createElement('td');
                partyTd.innerText = element.partyId;
                let resultTd = document.createElement('td');
                resultTd.innerText = element.voters;

                tr.append(partyTd,resultTd);
                body.append(tr);
                
                
            });
        })

    }
}