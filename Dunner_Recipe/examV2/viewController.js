class ViewController {
    constructor() {
        window.addEventListener("hashchange", this.navigation);
        window.addEventListener("load", this.navigation);
        this.recipeManager = new RecipeManager();
        document.querySelector(".createRecipe").addEventListener("submit", this.createRecipe);
        document.querySelector(".createRecipe").addEventListener("input", this.checkFillForm); //for disabled button
        document.querySelector(".editProfile").addEventListener("submit", this.editProfile);
        this.profile = {name: "John Doe", age: 78, address: "Earth", imgURL: "./assets/images/guest.png"}
    }


    checkFillForm = (e) => {
        e.preventDefault();
        console.log("change");
        const formData = Object.fromEntries(new FormData(e.currentTarget));
        let isValid = true;
        Object.keys(formData).forEach(el => {
            if (el === "imgURL") {
                console.log(formData[el]);
            } else if (String(formData[el]).trim().length === 0) {
                isValid = false;
            }
        });
        
        const button = e.currentTarget.querySelector("button");
        console.log(button)
        if (isValid) {
            button.disabled = false;
        } else {
            button.disabled = true;
        }
    }

    navigation = (e) => {
        e.preventDefault();

        const pages = ["all", "favourite", "create", "profile", "error"];

        const currentPage = location.hash.slice(1) || "all";

        pages.forEach(p => {
            const pEl = document.querySelector(`#${p}`);
            if (currentPage === p) {
                pEl.style.display = "block";
            } else {
                pEl.style.display = "none";
            }

            if (!pages.includes(currentPage)) {
                document.querySelector("#error").style.display = "block";
            }
        });

        switch(currentPage) {
            case "all":
                this.renderPageAllRecipes();
                break;
            case "favourite":
                this.renderFavouriteRecipesPage();
                break;
            case "create":
                break;
            case "profile": 
                this.renderMyProfile();
                break;
        }
    }

    filterByName = (e) => {
        e.preventDefault();
        const nameValue = e.currentTarget.value.trim();
        const ingredient = e.currentTarget.nextElementSibling.value.trim();
        const recipesFilter = this.recipeManager.allSearch(nameValue, ingredient);
        this.renderRecipes(recipesFilter);
    }

    filterByIngradient = (e) => {
        e.preventDefault;

        const nameValue = e.currentTarget.previousElementSibling.value.trim();
        const ingredient = e.currentTarget.value.trim();
        const recipesFilter = this.recipeManager.allSearch(nameValue, ingredient);
        this.renderRecipes(recipesFilter);
    }

    renderPageAllRecipes = (recipes=this.recipeManager.recipes) => {
        const page = document.querySelector("#all");
        
        const inputName = page.querySelector("input");
        inputName.removeEventListener("input", this.filterByName);
        inputName.addEventListener("input", this.filterByName);

        const selectEl = page.querySelector("#ingredients");
        selectEl.replaceChildren(this.createElement("option", {attributes: {
            textContent: "Choose ingredient", selected: true, value: "",
        }}));

        this.recipeManager.allIgradients.sort((a,b) => a.localeCompare(b)).forEach(ingr => {
            selectEl.appendChild(this.createElement("option", {attributes: {
                textContent: ingr,
            }}));
        });

        selectEl.removeEventListener("change", this.filterByIngradient);
        selectEl.addEventListener("change", this.filterByIngradient);
        this.renderRecipes(recipes);
    }

    addToFavourite = (recipe, e) => {
        e.preventDefault();
        const el = e.currentTarget;

        if (el.textContent === "Добави в любими") {
            el.textContent = "Премахни от любими";
            el.classList.add("removeFromFav");
            // el.style.backgroundColor = "red"
            this.recipeManager.addToFavourite(recipe);
        } else {
            el.textContent = "Добави в любими";
            // el.style.backgroundColor = "greenyellow"
            el.classList.remove("removeFromFav");
            this.recipeManager.removeFromFavourite(recipe);
            this.renderFavouriteRecipes();
        }
    }

    cookRecipe = (recipe, e) => {
        e.preventDefault();
        this.recipeManager.cookRecipe(recipe);
    }

    renderRecipes = (recipes) => {
        const recipeContainer = document.querySelector(".recipeContainer");
        recipeContainer.innerHTML = "";

        recipes.forEach(recipe => {
            const newRecipe = this.createElement("div", {attributes: {className: "recipeWrapper"}});
            const aEl = this.createElement("a", {attributes: {href: recipe.href, target: "_blank"}});
            const imgEl = this.createElement("img", {attributes: {src: recipe.img}})
            aEl.appendChild(imgEl);
            const pNameEl = this.createElement("p", {attributes: {textContent: recipe.title, className:"titleCard"}});
            const pIngradientsEl = this.createElement("p", {attributes: {textContent: recipe.ingredients, className:"ingradientsCard"}});  
            const btnTextContent = recipe.isFavourite === false ? "Добави в любими" : "Премахни от любими";
            const btnAddToFavourite = this.createElement("button", {attributes: {textContent: btnTextContent, className:"toFavourite"}});

            btnAddToFavourite.addEventListener("click", this.addToFavourite.bind(this, recipe));
            const btnCook = this.createElement("button", {attributes: {textContent: "Сготви", className: "cook"}});
            btnCook.addEventListener("click", this.cookRecipe.bind(this, recipe));
            newRecipe.append(aEl, pNameEl, pIngradientsEl, btnAddToFavourite, btnCook);
            recipeContainer.appendChild(newRecipe);
        });
    }

    renderFavouriteRecipesPage = () => {
        this.renderFavouriteRecipes();    
    }

    renderFavouriteRecipes = (recipes=this.recipeManager.favouriteRecipes) => {
        const recipeContainer = document.querySelector(".favouriteRecipeContainer");
        recipeContainer.innerHTML = "";

        recipes.forEach(recipe => {
            const newRecipe = this.createElement("div", {attributes: {className: "recipeWrapper"}});
            const aEl = this.createElement("a", {attributes: {href: recipe.href, target: "_blank"}});
            const imgEl = this.createElement("img", {attributes: {src: recipe.img}})
            aEl.appendChild(imgEl);
            const pNameEl = this.createElement("p", {attributes: {textContent: recipe.title, className:"titleCard"}});
            const pIngradientsEl = this.createElement("p", {attributes: {textContent: recipe.ingredients, className:"ingradientsCard"}});  
            const btnTextContent = recipe.isFavourite === false ? "Добави в любими" : "Премахни от любими";
            const btnAddToFavourite = this.createElement("button", {attributes: {textContent: btnTextContent, className:"toFavourite"}, styles: {backgroundColor: "red"}});

            btnAddToFavourite.recipeId = recipe.id;
            btnAddToFavourite.addEventListener("click", this.addToFavourite.bind(this, recipe));
            const btnCook = this.createElement("button", {attributes: {textContent: "Сготви", className: "cook"}});
            btnCook.addEventListener("click", this.cookRecipe.bind(this, recipe));
            
            newRecipe.append(aEl, pNameEl, pIngradientsEl, btnAddToFavourite, btnCook);
            recipeContainer.appendChild(newRecipe);
        });
    }

    editProfile = (e) => {
        e.preventDefault();
        const formData = Object.fromEntries(new FormData(e.currentTarget));
        let isValid = true;
        console.log(formData);
        Object.keys(formData).forEach(el => {
            console.log(String(formData[el].length === 0));

            if (String(formData[el]).trim().length === 0) {
                isValid = false;
            }
        });

        if (isValid) {
            Object.keys(formData).forEach(el => {
                if (el === "imgURL") {
                    console.log(formData[el]);
                    const imgNewURL = URL.createObjectURL(formData[el]);
                    console.log(imgNewURL);
                    this.profile[el] = imgNewURL;
                } else {
                    this.profile[el] = formData[el];
                }
    
            });
            document.querySelector(".profilePic").src = this.profile.imgURL;
        }
    }

    renderMyProfile = () => {
        const inputsEl = document.querySelectorAll(".editProfile input");
        inputsEl[0].value = this.profile.name;
        inputsEl[1].value = this.profile.age;
        inputsEl[2].value = this.profile.address;

        const tbody = document.querySelector("#profile tbody");
        tbody.innerHTML = "";
        this.recipeManager.getAllCookedRecipes().forEach(recipe => {
            const createRecipeEl = this.createElement("tr");
            const tdMeal = this.createElement("td", {attributes: {textContent: recipe.title}});
            const tdCount = this.createElement("td", {attributes: {textContent: recipe.cookedTimes}});
            createRecipeEl.append(tdMeal, tdCount);
            tbody.appendChild(createRecipeEl);
        });
    }

    createRecipe = (e) => {
        e.preventDefault();

        const formData = Object.fromEntries(new FormData(e.currentTarget));
        let isValid = true;
        Object.keys(formData).forEach(el => {
            if (el === "thumbnail") {
                if (formData[el].name === "") {
                    console.log(formData[el]);
                    isValid = false;
                }
            } else if (formData[el].trim().length === 0) {
                isValid = false;
            }
        });

        if (isValid) {
            const thumbnailEl = URL.createObjectURL(formData.thumbnail);
            formData.thumbnail = thumbnailEl;
            this.recipeManager.addRecipe(formData);

            e.currentTarget.reset();
        }
    }

    
    createElement = (tagName, data={}) => {
        const newEl = document.createElement(tagName);

        if (data.attributes) {
            Object.keys(data.attributes).forEach(k => {
                newEl[k] = data.attributes[k];
            });
        }

        if (data.styles) {
            Object.keys(data.styles).forEach(k => {
                newEl.style[k] = data.styles[k];
            });
        }

        return newEl;
    }
}

const viewController = new ViewController();