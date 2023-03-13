class ViewController {

  constructor () {

    window.addEventListener("hashchange", this.handleHashChange);
    window.addEventListener("load", this.handleHashChange);
    this.recipeManager = new RecipeManager();

    document.querySelector(".createRecipe").addEventListener('submit', this.createRecipe);
    document.querySelector(".createRecipe").addEventListener('input', this.checkFillForm);
    document.querySelector('.editProfile').addEventListener('submit', this.editProfile);
    this.profile = {
        name: "Jhon Doe",
        age: 44,
        address: "In The Middle of Nowhere",
        imgURL: "./assets/images/quest.png"
    }

  }

  checkFillForm = (event) => {
    event.preventDefault();
    let formData = Object.fromEntries(new FormData(event.target));
    let isValid = true;
    Object.keys(formData).forEach(element => {
      if (element === 'imgURL') {
        console.log(formData[element]);

      } else if (String.apply(formData[element]).trim().length === 0) {
        isValid = false;
      }
    });

    let button = event.currentTarget.querySelector('input[disabled]');

    if (isValid) {
      button.disabled = false;
    
    } else {
      button.disabled = true;
    }
  }

  //change of what we see on our SPA
  handleHashChange = () => {

    let allPagesId = [
      'allRecipes','favoriteRecipe','createRecipe','profile','error'
      ];

    let currentPage = location.hash.slice(1) || 'allRecipes';

    allPagesId.forEach(pageId => {
      let page = document.querySelector(`#${pageId}`);

      if(currentPage === pageId) {
        page.style.display = 'block';

      } else {
        page.style.display = 'none';
      }

    });

    switch (currentPage) {
      case 'allRecipes':
        this.renderAllRecipePage();
        break;
      case 'favoriteRecipe':
        this.renderFavoriteRecipes();
        break;    
      case 'createRecipe':
        break;
      case 'profile':
        this.renderMyProfile();
        break;
    }
   
  }

  /* 
  search method via INPUT (user) value corresponding with recipeManager
  searchViaTitleAndIngredient
  */ 
  searchByInputTitle = (e) => {
    e.preventDefault();

    let inputValue = e.currentTarget.value.trim();
    let ingredient = e.currentTarget.nextElementSibling.value.trim();
    let recipesFilter = this.recipeManager.searchViaTitleAndIngredient(inputValue,ingredient);
    this.renderRecipes(recipesFilter)
  }

  /* 
  search method via SELECTED (user) value corresponding with recipeManager
  searchViaTitleAndIngredient
  */ 
  searchBySelectedIngredient = (e) => {
    e.preventDefault();

    let inputValue = e.currentTarget.previousElementSibling.value.trim();
    let ingredient = e.currentTarget.value.trim();
    let recipesFilter = this.recipeManager.searchViaTitleAndIngredient(inputValue,ingredient);
    this.renderRecipes(recipesFilter)
  }
  
  //creating addToFavoriteMethod in viewControler too after recipeManager
  addOrRemoveFromFavorite = (recipe, event) => {
    event.preventDefault();
    let element = event.currentTarget;

    if (element.textContent === "Add to Favorite") {
      element.textContent = "Remove";
      element.classList.add('removeFromFavorite');
      // Here we are call back the function we created early in the recipe manager!
      this.recipeManager.addToFavorite(recipe); 
    
    } else {
      element.textContent = "Add to Favorite";
      element.classList.remove('removeFromFavorite');
      // Here we are call back the function we created early in the recipe manager!
      this.recipeManager.removeFromFavorite(recipe);
      this.renderFavoriteRecipes();
    }
  }

  //rendering and creating the first page allRecipe
  renderAllRecipePage = (recipesList = this.recipeManager.recipesList) => {
    // here start the implementation of our search
    let page = document.querySelector('#allRecipes');
    //event for input (user) value
    let inputTitle = page.querySelector('input');
    inputTitle.removeEventListener('input',this.searchByInputTitle);
    inputTitle.addEventListener('input',this.searchByInputTitle);
    // creating select start option;
    let selectMenu = page.querySelector('#ingredients');
    let startForSelectMenu = document.createElement('option');
    startForSelectMenu.textContent = 'Choose ingredient'; 
    startForSelectMenu.selected = 'true';
    startForSelectMenu.value = '';
    selectMenu.appendChild(startForSelectMenu);
    //providing select with the values of allIngredients from recipeManager
    this.recipeManager.allIngredients.sort().forEach(element => {
      console.log(element);
      let newOption = document.createElement('option');
      selectMenu.appendChild(newOption);
      newOption.textContent = element;
    });
    // event for the select
    selectMenu.removeEventListener('change', this.searchBySelectedIngredient);
    selectMenu.addEventListener('change', this.searchBySelectedIngredient);

    this.renderRecipes(recipesList);
  }
  
  // cook recipe in viewControler too to send info to Recipe Manager!
  cookRecipe = (recipe, event) => {
    event.preventDefault();
    this.recipeManager.cookRecipe(recipe);
  }


  // creating the recipes in form of cards
  renderRecipes = (recipesList) => {

    let recipeContainer = document.querySelector('.recipeContainer');
    recipeContainer.innerHTML ='';

    recipesList.forEach(recipe => {
      let newRecipe = document.createElement('div');
      newRecipe.classList.add('card'); // recipe wrapper

      let recipeLink = document.createElement('a');
      recipeLink.href = recipe.href;
      recipeLink.target = '_blank';

      let thumbnail = document.createElement('img');
      thumbnail.src = recipe.thumbnail;

      recipeLink.appendChild(thumbnail);

      let title = document.createElement('p');
      title.textContent = recipe.title;
      title.classList.add('recipeTitle');

      let ingredients = document.createElement('p');
      ingredients.textContent = recipe.ingredients;
      ingredients.classList.add('recipeIngredients');

      let addToFavoriteBtn = document.createElement('button');
      let favBtnConTxt = recipe.isFavorite === false ? "Add to Favorite" : "Remove";
      addToFavoriteBtn.textContent = favBtnConTxt;
      addToFavoriteBtn.classList.add('toFavorite');

      addToFavoriteBtn.addEventListener('click',this.addOrRemoveFromFavorite.bind(this, recipe));
      
      let cookBtn = document.createElement('button');
      cookBtn.addEventListener('click',this.cookRecipe.bind(this, recipe));
      cookBtn.textContent = 'Cook It';
      cookBtn.classList.add('cook');
      
      newRecipe.append(
        recipeLink,
        title,
        ingredients,
        addToFavoriteBtn,
        cookBtn
      );

      recipeContainer.appendChild(newRecipe);

    });   
  }

  // creating elements like those from all recipe page but only for our favorite page
  renderFavoriteRecipes = (recipesList = this.recipeManager.favoriteRecipes) => {

    let recipeContainer = document.querySelector('.favoriteRecipeContainer');
    recipeContainer.innerHTML ='';

    recipesList.forEach(recipe => {
      let newRecipe = document.createElement('div');
      newRecipe.classList.add('card'); // recipe wrapper

      let recipeLink = document.createElement('a');
      recipeLink.href = recipe.href;
      recipeLink.target = '_blank';

      let thumbnail = document.createElement('img');
      thumbnail.src = recipe.thumbnail;

      recipeLink.appendChild(thumbnail);

      let title = document.createElement('p');
      title.textContent = recipe.title;
      title.classList.add('recipeTitle');

      let ingredients = document.createElement('p');
      ingredients.textContent = recipe.ingredients;
      ingredients.classList.add('recipeIngredients');

      let addToFavoriteBtn = document.createElement('button');
      let favBtnConTxt = recipe.isFavorite === false ? "Add to Favorite" : "Remove";
      addToFavoriteBtn.textContent = favBtnConTxt;
      addToFavoriteBtn.classList.add('toFavorite');
      
      addToFavoriteBtn.recipeID = recipe.id;
      addToFavoriteBtn.addEventListener('click',this.addOrRemoveFromFavorite.bind(this, recipe));

      let cookBtn = document.createElement('button');
      cookBtn.addEventListener('click',this.cookRecipe.bind(this, recipe));
      cookBtn.textContent = 'Cook It';
      cookBtn.classList.add('cook');
      
      newRecipe.append(
        recipeLink,
        title,
        ingredients,
        addToFavoriteBtn,
        cookBtn
      );

      recipeContainer.appendChild(newRecipe);

    });   
  }

  // edit profile because its in form tag we ues FormData to get all info
  editProfile = (event) => {
    event.preventDefault();
    let formData = Object.fromEntries(new FormData(event.currentTarget));
    let isValid = true;
    Object.keys(formData).forEach( element => {
      console.log(String(formData[element].length === 0))
    
      if(String(formData[element]).trim().length === 0) {
        isValid = false;
      
      } 
    });

    
    if (isValid) {
      Object.keys(formData).forEach(element => {
        if(element === 'imgURL') {
          console.log(formData[element]);
          let imgNewURL = URL.createObjectURL(formData[element]);
          console.log(imgNewURL);
          this.profile[element] = imgNewURL;

        } else {
          this.profile[element] = formData[element];
          
        }
        

      });
      
      document.querySelector('.profilePicture').src = this.profile.imgURL;
    }

  }

  //filling the profile form
  renderMyProfile = () => {
    let inputsElements = document.querySelectorAll('.editProfile input');
    
    inputsElements[0].value = this.profile.name;
    inputsElements[1].value = this.profile.age;
    inputsElements[2].value = this.profile.address;

    let tableBody = document.querySelector('tbody');
    tableBody.innerHTML = "";

    this.recipeManager.getAllCookedRecipes().forEach(recipe => {
      //adding new role to the table
      let createRecipeElement = document.createElement('tr');
      // addint information in the table row
      let tableDataTitle = document.createElement('td');
      tableDataTitle.textContent = recipe.title;
      let tableDataCount = document.createElement('td');
      tableDataCount.textContent = recipe.cookedTimes;

      createRecipeElement.append(tableDataTitle, tableDataCount);
      tableBody.appendChild(createRecipeElement);
      
    })
    
  }

  //we take data from the FORM adding to recipeManager and pushing it to 0 index
  // end restarting the form for next adding
  createRecipe = (event) => {
    event.preventDefault();

    let formData = Object.fromEntries(new FormData(event.currentTarget));
    let isValid = true;
    Object.keys(formData).forEach(element => {
      if (element = 'thumbnail') {
        if (formData.title === ""){
          console.log(formData[element]);
          isValid = false;
        }

      } else if (formData[element].trim().length === 0) {
        isValid = false;
      }
    });

    if (isValid) {
      let thumbnailElement = URL.createObjectURL(formData.thumbnail);
      formData.thumbnail = thumbnailElement;
      this.recipeManager.addRecipe(formData);

      event.currentTarget.reset();
    }
  }

}

let myController = new ViewController();