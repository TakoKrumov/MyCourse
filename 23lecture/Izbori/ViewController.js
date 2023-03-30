class ViewController {

    constructor() {
        window.addEventListener('load', this.handleHashChange);
        window.addEventListener('hashchange', this.handleHashChange);

    }


    handleHashChange = () => {

        let hash = window.location.hash.slice(1) || PAGE_IDS[0];

        if (!PAGE_IDS.includes(hash)) {

            location.hash = '404';
            return;
        }

        PAGE_IDS.forEach(page => {

            let element = getEl(page);

            page === hash ? element.style.display = 'block' :
                element.style.display = 'none'

        })

        switch (hash) {
            case 'login':
                this.renderLoginPage();
                break;
            case 'register':
                this.renderRegisterPage();
                break;
            case 'listings':
                this.renderListingsPage();
                break;

        }

    }

    renderResultsPage = () => {

        location.hash = 'results';

        let array = voteManager.getPartyIds();

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

    renderDetailsPage = (party) => {

        location.hash = 'details';

        let cardLeft = getEl('detailsContainerLeft');
        cardLeft.innerHTML = "";

        let img = document.createElement('img');
        img.src = party.picture;

        let slogan = document.createElement('span');
        slogan.innerText = party.slogan;

        cardLeft.append(img, slogan);

        let cardRight = getEl('detailsContainerRight');
        cardRight.innerHTML = "";

        let leaderName = document.createElement('h3');
        leaderName.innerText = party.leader;

        let agitation = document.createElement('p');
        agitation.innerText = party.agitation;

        let buttonsDiv = document.createElement('div');

        let voteForUsBtn = document.createElement('button')
        voteForUsBtn.innerText = 'Vote';
        voteForUsBtn.classList.add('btn', 'btn-primary');


        if (userManager.loggedUser.hasVoted) {

            voteForUsBtn.disabled = true;
        }

        voteForUsBtn.onclick = (event) => {

            //event.preventDefault();

            voteManager.vote(party._id)

        }

        let viewResultsBtn = document.createElement('button')
        viewResultsBtn.innerText = 'Results';
        viewResultsBtn.classList.add('btn', 'btn-primary');

        viewResultsBtn.onclick = (event) => {

            //event.preventDefault();

            this.renderResultsPage();



        }

        buttonsDiv.append(voteForUsBtn, viewResultsBtn);
        cardRight.append(leaderName, agitation, buttonsDiv);
    }

    renderListingsPage = () => {

        let partiesContainer = getEl('listingsContainer');
        partiesContainer.innerHTML = "";


        voteManager.getAllParties().then(data => {

            this.renderParties(data, partiesContainer);

        })

        let search = getEl('searchParty');

        search.oninput = debounce((event) => {

            const keyword = event.target.value;

            voteManager.search(keyword).then(result => {

                partiesContainer.innerHTML = "";
                this.renderParties(result, partiesContainer);
            })
        }, 500)

    }

    renderParties = (list, container) => {


        list.forEach(party => {

            let card = document.createElement('div');
            card.classList.add('card');
            card.style.width = '200px';


            card.innerHTML =
                `
            <img src="${party.picture}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${party.name}</h5>
              <p class="card-text">${party.slogan}</p>
            </div>               
            `

            let detailsBtn = document.createElement('button');
            detailsBtn.classList.add('btn', 'btn-primary');
            detailsBtn.innerText = 'Details';

            let voteBtn = document.createElement('button');
            voteBtn.classList.add('btn', 'btn-primary');
            voteBtn.innerText = 'Vote';

            if (userManager.loggedUser.hasVoted) {

                voteBtn.disabled = true;
            }


            detailsBtn.onclick = (event) => {

                //event.preventDefault();


                voteManager.getDetails(party.id)
                .then(result => {
                    this.renderDetailsPage(result);
                    location.hash = 'details';
                    
                })

            }

            voteBtn.onclick = (event) => {

                //event.preventDefault();

                voteManager.vote(party.id)
                    .then(res => {
                        this.renderListingsPage();
                    })

            }

            card.append(detailsBtn, voteBtn);
            container.append(card);
        })

    }


    renderNav = () => {

        let hello = getEl('helloDiv'); 1
        hello.innerText = `Hello, ${userManager.loggedUser.username} ! Welcome to the E-lections!`;
        let nav = getEl('navigation');
        nav.style.display = 'flex';
        let logout = getEl('logout');

        logout.onclick = (event) => {

            event.preventDefault();

            userManager.logout(userManager.loggedUser.sessionId)
                .then(response => {

                    localStorage.removeItem('loggedUser');

                    userManager.loggedUser = null;
                })

            location.hash = 'login';
            nav.style.display = 'none';
        }
    }

    renderLoginPage = () => {

        let loginForm = getEl('loginForm');

        loginForm.onsubmit = (event) => {

            event.preventDefault();

            let username = event.target.elements.username.value.trim();
            let password = event.target.elements.password.value.trim();

            userManager.login(username, password)
                .then(data => {

                    location.hash = 'listings';
                    this.renderNav();

                })
                .catch(error => alert(error));

            loginForm.reset();
        }
    }

    renderRegisterPage = () => {

        let registerForm = getEl('registerForm');

        registerForm.onsubmit = (event) => {

            event.preventDefault();

            let username = event.target.elements.username.value.trim();
            let password = event.target.elements.password.value;
            let conmfirmPassword = event.target.elements.conmfirmPassword.value;

            if (password !== conmfirmPassword) {
                alert('Passwords does not Match !')
            }
            else {

                userManager.register(username, password)
                    .then(data => {
                        location.hash = 'login';
                    })
                    .catch(error => {
                        alert(error);
                    })

            }
        }
    }

}

let viewController = new ViewController();