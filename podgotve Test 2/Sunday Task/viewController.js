
class ViewController {

    constructor() {

        window.addEventListener('hashchange', this.handleHashChange),
            window.addEventListener('load', this.handleHashChange),
            this.footManager = new FootManager();
        this.cartManager = new CartManager();
    }

    handleHashChange = () => {

        let hash = window.location.hash.slice(1) || 'home';

        const pageIds = ['home', 'addProduct', 'profile', 'cart', 'errorPage'];

        // add all page view in pageIds array 


        pageIds.forEach(id => {

            let element = document.getElementById(id);

            if (hash === id) {

                element.style.display = 'block';
            }
            else {
                element.style.display = 'none';
            }
        })
        if (!pageIds.includes(hash)) {
            let element = document.getElementById('errorPage');
            element.style.display = 'block';
        }

        switch (hash) {
            case 'home':
                this.renderHomePage();
            case 'addProduct':
                this.renderAddItemForm();
            case 'profile':
            case 'cart':
        }
    }

    renderItems = (itemList = this.footManager.allItems) => {

        let container = document.getElementById('homeContainer');
        container.innerHTML = "";


        itemList.forEach(item => {

            let cardDiv = createCardElement('div');
            cardDiv.className = 'card';


            let cardImg = createCardElement('img', item.img);
            cardImg.width = '200';
            cardImg.height = '200';

            let cardName = createCardElement('div', item.name);

            let cardPrice = createCardElement('div', item.price);

            let cardBrand = createCardElement('div', item.brand);

            let addCartBtn = createCardElement('button', 'Add to Cart');

            addCartBtn.addEventListener('click', () => {
                this.cartManager.addToCart(item)
            });

            let addFavBtn = createCardElement('button', 'Add to Fav');


            addFavBtn.addEventListener('click', (event) => {

                this.footManager.addToFav(item);

                if (item.isFav) {

                    event.target.innerText = 'Remv Fav';

                }
                else {
                    event.target.innerText = 'Add to Fav';
                }


            });




            cardDiv.append(

                cardImg,
                cardName,
                cardPrice,
                cardBrand,
                addCartBtn,
                addFavBtn
            );

            container.appendChild(cardDiv);
        })

    }

    renderHomePage = () => {

        let searchName = document.getElementById('searchName');

        searchName.addEventListener('input', (event) => {

            this.renderItems(this.footManager.searchByName(event.target.value));
        })


        let searchSelect = document.getElementById('searchBrand');

        let optionDefault = createCardElement('option', 'Pick Brand');
        optionDefault.value = "";
        searchSelect.replaceChildren(optionDefault);

        this.footManager.brandList.forEach(brand => {

            let option = createCardElement('option', brand);
            option.value = brand;
            searchSelect.appendChild(option);

        })

        searchSelect.addEventListener('change', (event) => {

            if (event.target.value !== "") {
                this.renderItems(this.footManager.searchByBrand(event.target.value));
            }
            else {
                this.renderItems();
            }
        })

        let favBox = document.getElementById('favItems');

        favBox.addEventListener('change', (event) => {

            if (event.currentTarget.checked) {
                this.renderItems(this.footManager.favItems);
            } else {
                this.renderItems();
            }
        })
        this.renderItems();
    }

    renderAddItemForm = () => {


        let submitForm = document.getElementById('addItemForm');

        submitForm.addEventListener('submit', (event) => {

            event.preventDefault();

            this.footManager.allItems.unshift(new Foot(


                document.getElementById('formBrand').value,
                document.getElementById('formModel').value,
                document.getElementById('formName').value,
                document.getElementById('formPrice').value,
                URL.createObjectURL(document.getElementById('formPicture').files[0])

            ))

            event.currentTarget.reset();

            location.hash = '#home';

        })


    }



}

let viewController = new ViewController();