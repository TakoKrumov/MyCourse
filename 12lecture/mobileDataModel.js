class User {

    constructor(username, password, email) {
        this.username = username;
        this.password =password;
        this.email = email;
    }
}

class UserManager {

    constructor () {
        // this.users = []; same as row below
    }

    users = [ new User("slavozar", "bahur", "slavozar.vargulev@abv.bg")];
    loggedUser = null;


    // register
    addUser(user) {

        const existingUsers = this.users.filter(e => e.username === user.username);

        if(existingUsers.length) {
            console.log("Ima veche takuv");
        } else {
            this.users.push(user);
        }

    }

    login(user) {

        if(this.loggedUser) {
            console.log("veche ima lognat");
        } else {

            const existingUsers = this.users.filter(
                e => e.username === user.username && 
                e.password === user.password
            );

            if(existingUsers.length) {
                this.loggedUser = user;
            } else {
                console.log("Wrong credentials");
            }


        }

    }

    logout() {
        this.loggedUser = null;
    }

    deleteUser(user) {

        this.users = this.users.filter(e => e.username !== user.username);

    }

}


class Offer {
    constructor(price, title, photos, description, vehicle, creator) {
        this.price = price;
        this.title = title;
        this.photos = photos;
        this.description = description;
        this.vehicle = vehicle; 
        this.creator = creator;
    }

}

class OfferManager {
    offers = [];
    addOffer(offer, userManager) {
        // ? operator before property access is called optional chaining
        // this expression will be undefined if userManager is null or undefined or if
        // userManager.loggedUser is null or undefined
        if(offer.creator.username === userManager?.loggedUser?.username) {
            this.offers.push(offer);
        }
        
    }
}

class Vehicle { 
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }
}

class Car extends Vehicle {
    constructor(make, model, color, tyres) {
        super(make, model);
        this.color = color;
        this.tyres = tyres;
    }
}



let userManager = new UserManager();
let offerManager = new OfferManager();

let joro = new User("gosho", "bahur1", "slavcho@abv.bg");
userManager.addUser(joro);
userManager.login(joro);

let audi = new Car("Audi", "A3", 200, "Jelezo!");

let offer = new Offer(
    1000,
    "Realni km, nov vnos, baba q e karala.", 
    ["snimka1", "snimka2"], 
    "Mnogo e zapazena. Babata e hodila samo do magazina s neq. Napylno obslujena!",
    audi,
    joro
);


console.log(offerManager.offers);
offerManager.addOffer(offer, userManager);
console.log(offerManager.offers);




// console.log(userManager.loggedUser);
// console.log(userManager.users);