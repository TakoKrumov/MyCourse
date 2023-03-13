// NAVIGATION
class Controller {

    constructor() {
        window.addEventListener("hashchange", this.navigatePage);
        window.addEventListener("load", this.navigatePage);
        document.querySelector(".form-order").addEventListener("submit", this.submitOrder);
        this.dunnerManager = new DunnerManager();
        this.cartManager = new CartManager();
        this.historyManager = new HistoryManager();
    }

    navigatePage = (e) => {
        e.preventDefault();
        const hashNames = ["menu", "cart", "order"];

        const hashName = (location.hash || "menu").replace("#", "");
        
        if (hashNames.includes(hashName)) {
            document.querySelectorAll("main > section")
                .forEach(elSection => {
                    if (elSection.id === hashName) {
                        elSection.style.display = "block";
                    } else {
                        elSection.style.display = "none";
                    }
                });

            switch(hashName) {
                case "menu": {
                    this.renderMenuPage("menu");
                    break;
                };
                case "cart": {
                    this.renderCartPage("cart");
                    break;
                };
                case "order": {
                    this.renderOrderPage("order");
                    break;
                }
            }
            
        }
    }

    orderBtnEvent = (e) => {
        e.preventDefault();

        if (this.cartManager.cartList.length) {
            location.hash = e.currentTarget.hash;
        }
    }

    submitOrder = (e) => {
        e.preventDefault();
        
        const fromData = Object.fromEntries(new FormData(e.currentTarget));
        console.log(fromData);
        let isValidForm = true;
        const keysArr = Object.keys(fromData);

        if (keysArr.length !== 3) {
            isValidForm = false;
        } else {
            keysArr.forEach(k => {
                if (fromData[k].trim().length === 0) {
                    isValidForm = false;
                }
            });
        }

        if (isValidForm) {
            const date = new Date().toLocaleDateString();
            const address = fromData.address;
            const productList = this.cartManager.getProductList();
            const totalCost = this.cartManager.getTotalCost().toFixed(2) + "лв."

            this.historyManager.addToHistoryList(date, address, productList, totalCost);

            this.cartManager.clearCart();
            this.renderCartItemsCounter();
            this.renderOrderPage();
            e.currentTarget.reset();
        }
    }

    renderOrderPage = () => {
        const formEl = document.querySelector(".form-order");
        const finalH2El = document.querySelector(".final");

        if (this.cartManager.cartList.length) {
            formEl.style.display = "flex";
            finalH2El.style.display = "none";
        } else {
            formEl.style.display = "none";
            finalH2El.style.display = "block";
        }
    }

    renderOrderInfo = () => {
        const priceInfo = document.querySelector(".cart-total-price");
        const btnOrder = document.querySelector(".btn-order");

        btnOrder.removeEventListener("click", this.orderBtnEvent);
        btnOrder.addEventListener("click", this.orderBtnEvent);

        const price = this.cartManager.getTotalCost();
        priceInfo.textContent = price.toFixed(2) + "лв.";
    }

    renderCartItemsCounter = () => {
        const cartCounter = document.querySelector(".cartCounter");

        if (this.cartManager.cartList.length) {
            cartCounter.style.display = "flex";
            cartCounter.textContent = this.cartManager.cartList.length;
        } else {
            cartCounter.style.display = "none";
        }
    }

    renderTableData = () => {
        const tableEl = document.querySelector("table tbody");
        tableEl.innerHTML = "";
        this.historyManager.historyList.forEach(el => {
            const trEl = this.createElement("tr");
            const tdDate = this.createElement("td", {attributes: {textContent: el.date}})
            const tdAddress = this.createElement("td", {attributes: {textContent: el.address}})
            const tdList = this.createElement("td", {attributes: {textContent: el.productList}})
            const tdCost = this.createElement("td", {attributes: {textContent: el.totalPrice}})

            trEl.append(tdDate, tdAddress, tdList, tdCost);
            tableEl.append(trEl);
        });
    }

    renderCartPageLi(ulElement, currentCartItems) {
        ulElement.innerHTML = "";

        currentCartItems.forEach(el => {
            const liEl = this.createElement("li", {classes:["cart-item"]});
            const pNameEl = this.createElement("p", {classes: ["cart-item-name"], attributes: {textContent: el.name}});
            const pPriceEl = this.createElement("p", {classes: ["cart-item-price"], attributes: {textContent: el.price.toFixed(2)}});
            const inputCount = this.createElement("input", {classes: ["cart-item-court", ], attributes: {type: "number", value: el.count, min: 1}});
            
            inputCount.addEventListener("input", (e) => {
                el.count = e.currentTarget.value;
                this.renderCartItemsCounter();
                this.renderOrderInfo();
            });
            
            const removeBtn = this.createElement("button", {classes: ["cart-item-removeBtn"], attributes: {textContent: "X"}});
            removeBtn.addEventListener("click", (e) => {
                const result = this.cartManager.deleteItem(el);
                e.currentTarget.parentElement.remove();
                this.renderCartItemsCounter();
                this.renderOrderInfo();

                if (!result) {
                    this.renderCartPage("cart");
                }
            });

            liEl.append(pNameEl, pPriceEl,inputCount, removeBtn);
            ulElement.appendChild(liEl);
        });
    }

    renderCartPage = (hash) => {
        const page = document.querySelector(`#${hash}`);
        const currentCartEmptyEl = page.querySelector(".current-cart-empty");
        const cartListEl = page.querySelector(".cartItemList");
        
        cartListEl.innerHTML = "";
        const currentCartItems = this.cartManager.cartList;
        this.renderOrderInfo();
        this.renderTableData();
        if (currentCartItems.length) {
            currentCartEmptyEl.style.display = "none";

            this.renderCartItemsCounter();
            this.renderCartPageLi(cartListEl, currentCartItems);
            

        } else {
            currentCartEmptyEl.style.display = "block"

        }

    }

    renderMenuPage = (hash) => {
        const page = document.querySelector(`#${hash}`);
        const inputSearch = document.querySelector("#searchDunners");
       

        inputSearch.value = "";
        inputSearch.removeEventListener("input", this.searchProducts);
        inputSearch.addEventListener("input", this.searchProducts);
        this.renderMenuProducts(this.dunnerManager.getDunnerList());

    }

    renderMenuProducts = (products) => {
        const ulElement = document.querySelector("ul.menu-products");
        ulElement.innerHTML = "";

        products.forEach(dunner => {
            const liElement = this.createElement("li", {classes: ["product-card"]});
            const imgEl = this.createElement("img", {classes: ["product-img"], attributes: {src: dunner.image}});
        
            const productName = this.createElement("p", {classes: ["product-name"], attributes: {textContent: dunner.name}});
        
            const productWeight = this.createElement("p", {classes: ["product-weight"], attributes: {textContent: `${dunner.weight}гр.`}});
            
            const productCategory = this.createElement("p", {classes: ["product-category"], attributes: {textContent: dunner.category}});

            const productPrice = this.createElement("p", {classes: ["product-price"], attributes: {textContent: dunner.price.toFixed(2) + "лв."}});

            const inputCount = this.createElement("input", {classes: ["product-count"], attributes: {type: "number", value: 1, min: 1}});

            const buttonAddToCart = this.createElement("button", {classes: ["product-add-to-cart"], attributes: {textContent: "Add to cart"}});
            buttonAddToCart.addEventListener("click", this.addToCart.bind(this, dunner, inputCount));
            liElement.append(imgEl, productName, productWeight, productCategory, productPrice, inputCount, buttonAddToCart);
            ulElement.appendChild(liElement);
        });
    }

    searchProducts = (e) => {
        e.preventDefault();
        const input = e.currentTarget.value;
        console.log(typeof input);
        let productList = this.dunnerManager.searchDunnerList(input);
        this.renderMenuProducts(productList);
    }

    addToCart =  (dunnerData, countValue, e) => {
        this.cartManager.addCartItem(dunnerData, Number(countValue.value));
        this.renderCartItemsCounter();
    }

    createElement = (tagName, data={}) => {
        const newEl = document.createElement(tagName);

        if (data.classes) {
            data.classes.forEach(el => newEl.classList.add(el));
        }

        if (data.attributes) {
            Object.keys(data.attributes).forEach(key => newEl[key] = data.attributes[key]);
        }

        return newEl;
    }

}

const eventsManager = new Controller();

dunners.forEach(el => eventsManager.dunnerManager.addDunner(el));

// window.addEventListener("popstate", eventsManager.navigatePage);

// const formEl = document.querySelector(".form-order");
// formEl.addEventListener("submit", eventsManager.submitOrder);