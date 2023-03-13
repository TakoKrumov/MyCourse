//because of they are similarity i put first,second and third task together :D

const dogBtn = document.getElementById("getDog");
const fiveAnimals = document.getElementById("getFiveFoxes");
const firstOfFive = document.getElementById("getFirstOfFive");
const selectEmail = document.getElementById("selectEmail");
const main = document.getElementById("mainBody");
const gallery = document.getElementById("gallery");
const navGallery = document.getElementById("navGallery")

function createElement(elementType, whereToAppend) {
  let newElement = document.createElement(elementType);
  whereToAppend.appendChild(newElement);

  return newElement;
}

function myFetch(event, pickedApi) {
  event.preventDefault();

  return fetch(pickedApi).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      return Promise.reject("Something went wrong");
    }
  });
}

dogBtn.addEventListener("click", (event) => {
  main.innerHTML = "";
  main.classList.remove("posts");
  myFetch(event, "https://dog.ceo/api/breeds/image/random")
    .then((response) => {
      console.log(`second message `, response.message);
      let img = createElement(`img`, main);
      img.classList.add("fetchImage");
      img.src = `${response.message}`;
    })
    .catch((err) => {
      let msg = createElement(`h3`);
      msg.textContent = `Something went wrong!`;
      console.log(err);
    });
});

fiveAnimals.addEventListener("click", (event) => {
  main.innerHTML = "";
  main.classList.remove("posts");
  Promise.all([
    myFetch(event, "https://randomfox.ca/floof/"),
    myFetch(event, "https://randomfox.ca/floof/"),
    myFetch(event, "https://randomfox.ca/floof/"),
    myFetch(event, "https://randomfox.ca/floof/"),
    myFetch(event, "https://randomfox.ca/floof/"),
  ]).then((response) => {
    for (let i = 0; i < response.length; i++) {
      let img = createElement(`img`, main);
      img.classList.add("fetchImage");
      img.src = `${response[i].image}`;
    }
  });
});

firstOfFive.addEventListener("click", (event) => {
  main.innerHTML = "";
  main.classList.remove("posts");
  Promise.race([
    myFetch(event, "https://dog.ceo/api/breeds/image/random"),
    myFetch(event, "https://dog.ceo/api/breeds/image/random"),
    myFetch(event, "https://dog.ceo/api/breeds/image/random"),
    myFetch(event, "https://dog.ceo/api/breeds/image/random"),
    myFetch(event, "https://dog.ceo/api/breeds/image/random"),
  ]).then((response) => {
    let img = createElement(`img`, main);
    img.classList.add("fetchImage");
    img.src = `${response.message}`;
  });
});

// bellow Fourth Task

let usersId = [];
let usersList = [];
let userAlbumsIds = [];


fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    data.forEach((element) => {
      let option = createElement("option", selectEmail);
      option.textContent = element.email;
      option.value = element.id;
      usersList.push(element.username);

      usersId.push(element.id);
    });
  });

selectEmail.addEventListener("change", (event) => {
  console.log(event.target.value);
  myFetch(
    event,
    `https://jsonplaceholder.typicode.com/users/${
      usersId[event.target.value - 1]
    }/posts`
  ).then((data) => {
    main.innerHTML = "";
    main.classList.add("posts");
    let fromWho = createElement("h1", main);
    fromWho.textContent = `User: ${usersList[event.target.value - 1]}`;
    fromWho.classList.add("heading");
    data.forEach((element) => {
      let newHeader = createElement("h3", main);
      newHeader.classList.add("postTitle");
      newHeader.textContent = `Post Title: ${element.title}`;
      let newPost = createElement("div", main);
      newHeader.classList.add("postBody");
      newPost.innerHTML = `<strong>Post: </strong>${element.body} <hr>`;
    });
  });

  myFetch(
    event,
    `https://jsonplaceholder.typicode.com/users/${
      usersId[event.target.value - 1]
    }/albums `
  )
  .then((data) => {
    data.forEach((element) => {
      console.log(element)
      let linkToAlbums = createElement('a', navGallery);
      linkToAlbums.textContent = `Albums: ${element.id}`;
      linkToAlbums.href = `#albumNumber${element.id}`;
      linkToAlbums.addEventListener("click", handleHashChange());

      let newContainer = createElement ('div', gallery);
      newContainer.classList.add("albumContainer");
      newContainer.id = `albumNumber${element.id}`
      userAlbumsIds.push(newContainer.id)
      Promise.all([
        myFetch(
          event,
          `https://jsonplaceholder.typicode.com/albums/${element.id}/photos`
        ),
      ])
      .then((response) =>
        response.forEach((element) => {
          element.forEach((element) => {

            let newElement = createElement("img", newContainer);
            newElement.src = element.url;
          });
        })
      );
    });
  });
});

    
function handleHashChange () {
  console.log("handleHashChange");
  let hash = window.location.hash.slice(1) || '';//where to go on first load the check

  userAlbumsIds.forEach(id => {
      let page = document.getElementById(id);

      if(hash === id) {
          page.style.display = "flex";
      } else {
          page.style.display = "none";
      }
  });
}

window.addEventListener("hashchange", handleHashChange());
window.addEventListener("load", handleHashChange());
