class User {

    constructor(username, password, email) {
        this.username = username;
        this.password = password;
        this.email = email;
    }
}

class UserManager {

    users = [new User("slavozar", "bahur", "slavozar.vargulev@abv.bg")]; //  new User("slavozar", "bahur", "slavozar.vargulev@abv.bg")
    loggedUser = null;
    

    addUser(user) {

        const existingUsers = this.users.filter(e => e.username === user.username);                                                   
        const nameSymbolRules = user.username.match(/[^A-Za-z0-9\s-_]/g,"");
        const passwordSymbolRules = user.password.match(/[^A-Za-z0-9_-]/g,"");
        const passwordRules = user.password.length >= 7 && user.password.length <= 15;
        const existingEmail = this.users.filter(e => e.email === user.email);
        

        if (existingUsers.length) {
            console.log("Има такъв акаунт!");
        } else if (!!nameSymbolRules) {
            console.log("Непозволени символи в името!");
        } else if (existingEmail.length) {
            console.log("Вече има регистрация с такъв емайл!");
        } else if (!passwordRules) {
            console.log("Паролата трябва да е между 7 и 15 символа");
        } else if (!!passwordSymbolRules) {
            console.log("Паролата трябва да съдържа \"малки\" и \"главни\" букви, цели числа и символите - и _ ");
        } else {
            this.users.push(user);
        }
    }

    login(user) {
        
        const existingUsers = this.users.filter(
            e => e.username === user.username && 
            e.password === user.password);
        
        if(this.loggedUser && existingUsers.length) {

            console.log(`${this.loggedUser.username} сега е логнат!`);
        } else {
            if(existingUsers.length) {
                this.loggedUser = user;
                console.log(`Welcome ${user.username}!`);
            } else {
                console.log(`${user.username} този акаунт не съществува!`);
            }
            
        }

    }

    logout(user) {
        console.log(`${user.username} вече не е онлайн!`)
        this.loggedUser = null;
       
    }

    deleteUser(user) {
        this.users = this.users.filter(e => e.username !== user.username);
    }

    
}

class Offer {
    constructor(price, title, photos, vehicle,provider) {
        this.price = price;
        this.title = title;
        this.photos = photos;       
        this.vehicle = vehicle; 
        this.provider = provider?.username
    }

}

class OfferManager {
    offers = [];
    
    addOffer(offer, userManager) {
        if(offer?.provider === userManager?.loggedUser?.username) {
            this.offers.push(offer);           
        }        
    }

    searchOffer () {
        let addOffer = arguments[0];
        let isThisInOffer = arguments[1];
        let isThisProvider = arguments[2];

        let results = addOffer.filter(offers => 
            offers?.vehicle?.make.toLowerCase().includes(isThisInOffer?.toLowerCase()) &&
            offers?.vehicle?.provider.toLowerCase().includes(isThisProvider?.toLowerCase()) ?
            offers?.vehicle?.provider.toLowerCase().includes(isThisProvider?.toLowerCase()) : 
            offers?.vehicle?.make.toLowerCase().includes(isThisInOffer?.toLowerCase())
        );

        return console.log(`търсене:\n`,results);
    };

    editOffer (offer,newOffer) {
        let index = this.offers.indexOf(e => e === offer);
        if(index !==-1) {
            Object.assign(this.offers[index],newOffer);
        }
    }
}

class Vehicle { 
    
    constructor( user,make, model, yearOfProduction, typeOfFuel,fuelPerHundred,color ,tyres,topSpeed) {
        this.provider = user?.username;
        this.make = make;
        this.model = model;
        this.yearOfProduction = yearOfProduction;       
        this.typeOfFuel = typeOfFuel;
        this.fuelPerHundred = fuelPerHundred;
        this.color = color;
        this.tyres = tyres;
        this.topSpeed = topSpeed; 
            
    }
    
    vehicleDescription (someText) {
        this.description = someText;
    }
}

class Car extends Vehicle {
    constructor(user,make,model,yearOfProduction,typeOfFuel,color,tyres,topSpeed,doors,movement) {
        super(user,make,model,yearOfProduction,typeOfFuel,color,tyres,topSpeed,doors,movement);
        this.type = "Car";
        this.doors = doors;
        this.movement = movement;
        
    }
}

class Jeep extends Car {
    constructor(user,make,model,yearOfProduction,typeOfFuel,color,tyres,topSpeed,doors,movement,transferMovement) {
        super(user,make,model,yearOfProduction,typeOfFuel,color,tyres,topSpeed,doors,movement,transferMovement);
        this.type = "Jeep";
        this.transferMovement = transferMovement;
    }
}

class Bike extends Vehicle {
    constructor(user,make,model,yearOfProduction,typeOfFuel,color,tyres,topSpeed) {
        super(user,make,model,yearOfProduction,typeOfFuel,color,tyres,topSpeed);
        this.type = "Bike";
    }
}


let loginManager = new UserManager();
let gargamel = new User ("Gargamel", "mRazimSmurfove", "smurfsAreDead@abv.bg");
loginManager.addUser(gargamel);
loginManager.login(gargamel);
let smarfieta = new User("Smarfieta", "loveGargamel", "askask@abv.bg")
let papaSmurf = new User ("Papa Smurf", "gargameIsEv1l", "comeToPapi@gmail.com");
loginManager.addUser(papaSmurf);
loginManager.login(papaSmurf);
loginManager.login(smarfieta);
console.log(loginManager.users);
let bmw = new Car (gargamel,"BMW","M5",2020,"diesel","8l per 100km","Black",4,200);
bmw.doors = "4(5) doors";
bmw.movement = "rear wheel drive";
bmw.description = "Arno e... Gazi smurfove na poraziq! Sama gi celi!";
let gargamelOffer = new Offer(10000, "basi bega4kata",["imageFront", "imageBack", "imageSide", "imageInside"],bmw,gargamel);
let offerManager = new OfferManager();
offerManager.addOffer(gargamelOffer,loginManager);
loginManager.logout(gargamel);
loginManager.login(papaSmurf);
loginManager.login(gargamel);
let peugeot = new Car(papaSmurf,"Peugeot","c3",2015,"gas/gasoline","white","4 old tyres","abe dviji se ama e pejo...","4(5)","front-wheel drive");
let bmwPapa = new Jeep(papaSmurf, "BMW", "X6",2018,"gasoline","blue","4 new tyres","Depends","4(5) doors", "4x4","can change between 4x4 and rear wheel drive");
let papaOffer = new Offer(9000, "Golqm dzver, si4ki ti pravat pat(6tot ne polzvam miga4i)",["allot images"],bmwPapa,papaSmurf);
let papaSecondOffer = new Offer(8000,"Stava za gradsko",['image1','image2'],peugeot,papaSmurf)
offerManager.addOffer(papaOffer,loginManager);
offerManager.addOffer(papaSecondOffer,loginManager);
console.log(offerManager.offers);
loginManager.addUser(smarfieta);

console.log(papaOffer);
loginManager.logout(papaSmurf);
loginManager.login(smarfieta);
loginManager.login(papaSmurf);
offerManager.searchOffer(offerManager.offers,`bMw`);
offerManager.searchOffer(offerManager.offers,`peuGeot`);

function findNullObject (name) {
    console.log(name);
    if (name === null) {
        return;
    }   
    return findNullObject (name.__proto__);
}

findNullObject(bmwPapa);
findNullObject(Object.prototype);
