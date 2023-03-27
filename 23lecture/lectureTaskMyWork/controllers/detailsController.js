class DetailsController {


  constructor (userManager, resultsManager, resultsController) { //
    this.userManager = userManager;
    this.resultsManager = resultsManager;
    this.resultsController = resultsController;
  }

  render = (party) => {

    location.hash = 'details';
    const details = getElement('details')
    details.innerHTML = '';

    let partyName = createElement('h1','partyName')
    partyName.innerText = party.name; 

    let cardLeft = createElement('div','containerDetails');
    cardLeft.id = 'leftDetailsContainer';

    let img = createElement('img','partyImg');
    img.src = party.picture;
    

    let slogan = createElement('span','partySlogan')
    slogan.innerText = party.slogan;

    let cardRight = createElement('div','containerDetails');
    cardRight.id = 'rightDetailsContainer';

    let leaderName = createElement('h3','partyLeader')
    leaderName.innerText = party.leader;

    let agitation = createElement('p','partyAgitation');
    agitation.innerText = party.agitation;

    let btnContainer = createElement('div','btnContainer')

    let voteBtn = createElement('button','btn')
    voteBtn.classList.add('btn-primary')
    voteBtn.id = 'voteBtn'
    voteBtn.innerText = 'Vote'
   
    let viewResultBtn = createElement('button','btn')
    viewResultBtn.classList.add('btn-primary')
    viewResultBtn.id = 'resultBtn'
    viewResultBtn.innerText = 'Results'

    btnContainer.append(voteBtn, viewResultBtn);
    cardLeft.append(img, slogan)
    cardRight.append(leaderName, agitation, btnContainer);
    details.append(partyName, cardLeft, cardRight);

    voteBtn.onclick = (event) => {
      event.preventDefault();

      if(!this.userManager.loggedUser.hasVoted) {

        this.userManager.loggedUser.hasVoted = true;
        toLocaleStorage('loggedUser', this.userManager.loggedUser)

        this.userManager.vote(party._id)
        .then(result => {
          console.log(result)
        })
        .catch(result => {
          alert(result)
        })
      
      } else {
        alert('Бойко спри са!')
      } 
    }

    viewResultBtn.onclick = (event) => {
      event.preventDefault();

      this.resultsController.render();
    }

  }

}