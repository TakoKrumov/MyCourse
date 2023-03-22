class DetailsController {

    constructor(userManager, resultsManager, resultController){

        this.userManager = userManager;
        this.resultsManager = resultsManager;
        this.resultController = resultController;

    }


    render = (party) => {

        location.hash = 'details';

    let cardLeft = getEl('detailsContainerLeft');  
    cardLeft.innerHTML = "";

    let img = document.createElement('img');
    img.src = party.picture;

    let slogan = document.createElement('span');
    slogan.innerText = party.slogan;

    cardLeft.append(img,slogan);

    let cardRight = getEl('detailsContainerRight');  
    cardRight.innerHTML = "";

    let leaderName = document.createElement('h3');
    leaderName.innerText = party.leader;

    let agitation = document.createElement('p');
    agitation.innerText = party.agitation;

    let buttonsDiv = document.createElement('div');

    let voteForUsBtn = document.createElement('a')
    voteForUsBtn.innerText = 'Vote';
    voteForUsBtn.classList.add('btn','btn-primary');

    voteForUsBtn.onclick = (event) => {

        event.preventDefault();

        console.log(party)

        if(!this.userManager.loggedUser.hasVoted){

            this.userManager.loggedUser.hasVoted = true;
            localStorage.setItem('loggedUser', JSON.stringify(this.userManager.loggedUser));

            this.userManager.vote(party._id)
            .then(result => {
                console.log(result);
            })
            .catch(result => {
                alert(result);
            })
        }
        else {
            alert('Бойко спри се!');
        }


        
    }
    
    let viewResultsBtn = document.createElement('a')
    viewResultsBtn.innerText = 'Results';
    viewResultsBtn.classList.add('btn','btn-primary');

    viewResultsBtn.onclick = (event) => {

        event.preventDefault();

        this.resultController.render();
        


    }

    buttonsDiv.append(voteForUsBtn,viewResultsBtn);
    cardRight.append(leaderName,agitation,buttonsDiv);

    }




}