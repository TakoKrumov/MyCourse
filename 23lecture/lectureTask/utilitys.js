function getEl(id) {
  return document.getElementById(id);
}

function makeAPICall(url, options) {
  return fetch(url, options).then((response) => {
    if (response.ok) {
      return response.json();
    }

    return new Promise((resolve, reject) => {
      response.json().then((body) => {
        reject(new Error(body.message))

      });
    })
    
  });
}


function resultsFromParty (data, container) {
  
      console.log(data);
      data.forEach((party) => {
        let card = document.createElement("div");
        card.classList.add = "card";
        card.style.width = "200px";

        card.innerHTML = 
        `<img src=${party.picture} class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${party.name}</h5>
          <p class="card-text">${party.slogan}</p>
          
        </div>`;

        let detailsBtn = document.createElement('a')
        detailsBtn.classList.add("btn","btn-primary")
        detailsBtn.innerText = 'Details'
        let voteBtn = document.createElement('a')
        voteBtn.classList.add("btn","btn-primary")
        container.append(card)
        voteBtn.innerText = 'Vote'

        card.append(detailsBtn, voteBtn)
      });
}

function debounce(action, seconds) {
  let timerId = null;
  return function (...event) {
    clearTimeout(timerId);
    timerId = setTimeout(action, seconds, ...event)
  }
}