class ListingController {
  constructor(partiesManager, detailsManager, detailsController, userManager) {
    this.partiesManager = partiesManager;
    this.detailsManager = detailsManager;
    this.detailsController = detailsController;
    this.userManager = userManager;
  }

  render = () => {
    let partiesContainer = getElement("partiesResult");
    partiesContainer.innerHTML = "";

    this.partiesManager.getAllParties().then((data) => {
      this.renderParties(data, partiesContainer);
    });

    let search = getElement("searchPartiesInput");

    search.oninput = debounce((event) => {
      const keyword = event.target.value;
      console.log(keyword)
      this.partiesManager.search(keyword).then((result) => {
        partiesContainer.innerHTML = "";
        this.renderParties(result, partiesContainer);
      });
    }, 500);
  };

  renderParties = (list, container) => {
    list.forEach((party) => {
      let card = document.createElement("div");
      card.classList.add("card");
      card.style.width = "200px";

      card.innerHTML = `<img src="${party.picture}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${party.name}</h5>
                <p class="card-text">${party.slogan}</p>
            </div>`;

      let detailsBtn = document.createElement("a");
      detailsBtn.classList.add("btn", "btn-primary");
      detailsBtn.innerText = "Details";
      let voteBtn = document.createElement("a");
      voteBtn.classList.add("btn", "btn-primary");
      voteBtn.innerText = "Vote";

      voteBtn.onclick = (event) => {
        event.preventDefault();

        if (!this.userManager.loggedUser.hasVoted) {
          this.userManager.loggedUser.hasVoted = true;
          localStorage.setItem(
            "loggedUser",
            JSON.stringify(this.userManager.loggedUser)
          );

          this.userManager
            .vote(party.id)
            .then((result) => {
              console.log(result);
            })
            .catch((result) => {
              alert(result);
            });
        } else {
          alert("Бойко спри се!");
        }
      };

      detailsBtn.onclick = (event) => {
        event.preventDefault();
      
        this.detailsManager.getDetails(party.id).then((result) => {
          console.log(result);
          this.detailsController.render(result);
        });

        const details = getElement('details')
        details.style.display = 'flex';
        location.hash = "details";
      };

      card.append(detailsBtn, voteBtn);

      container.appendChild(card);
    });
  };
}
