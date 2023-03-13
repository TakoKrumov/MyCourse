function Character (name, age, sex, height) {
    this.name = name;
    this.age = age;
    this.sex = sex;
    this.height = height;
}

function QueenOfMirrors (name, age,sex, height,location) {
    Character.call(this, name, age,sex, height);
    this.beautyLvl = 9;
    this.poisonApple = false;
    this.location = location;
    this.status = "Alive";
    this.results = "";
    this.action = "Asking the mirror the same stupid question..."
    this.grow = function () {
        this.age++;
        this.beautyLvl++;
    };

    this.calling = function (a) {
        if (a === mirrorOnTheWall) {
            console.log("Who is fairest of them all ?")
            this.results = mirrorOnTheWall.whoHasTopBeautyLvl().name;
        }

        if (this.results === "Evil Queen") {
            console.log("Queen is pleased she is the most fairest of them all.");

        } else {
            console.log(`My queen the fairest of them all is Snow White! Queen getting mad!`);

            if (!hunter.lyingTheQueen) {
                console.log(`Call the Hunter!\nTake Snow White and kill her in the forest!`);
            
            } else { 
                this.action = "Knock...Knock...";
                console.log(`The hunter failed me... I need to take things in my hands!
                Mirror where is Snow White? - `,mirrorOnTheWall.locationOfTheTopBeauty());
                
            }
        }        
    };

    this.dressing = function () {
        mirrorOnTheWall.locationOfTheTopBeauty();
        this.poisonApple = true;
        console.log(`Get dressed as granny and get poison apple!`);
    };

    this.feeding = function () {
        if (this.poisonApple) {
            this.location = "House in the Forest";
            let doing = "Knock... Knock...";
            console.log(`Queen dressed as granny have found the house of dwarfs and ${doing}`);
        }
    };

    this.superAngry = function () {
        if (this.status.includes("Super Angry")) {
            this.status = "Dead";
        }
    }   
}

QueenOfMirrors.prototype = Object.create(Character.prototype);
QueenOfMirrors.prototype.constructor = QueenOfMirrors;

function Mirror (name) {
    this.name = name;
    this.age = "unknown";
    this.chicks = [];
    
        this.whoHasTopBeautyLvl = function () {
            if (snowWhite.status === "Alive") {
                let sorted = this.chicks.sort((a, b) => b.beautyLvl - a.beautyLvl);            
                return sorted[0];
            
            } else {
                return evilQueen;
            }
            
        }
        this.locationOfTheTopBeauty = function () {
            if(hunter.isHeGood) {
                return `My queen - Snow White is hiding in the dwarf house!\n Go there during day while dwarfs are ${dwarfs[0].workInMines}.`;
            }
        }    
    

}

function Princes (name, age, sex, height,location) {
    Character.call(this, name, age,sex, height);
    this.beautyLvl = 0;
    this.status = "Alive";
    this.grow = function () {
        this.age++;
        this.beautyLvl++;
        if (this.height < 164) {
            this.height += 7.2;
        }

        if (this.age > 17) {
            this.beautyLvl+=10;
        }
    };

    this.location = location;
    this.running = function () {
        console.log(`Snow White roaming in the woods.....\n And suddenly - ${this.location = "House in the woods"}.`)
    };

    this.houseCleaning = function () {
        console.log("Snow White doing dishes, food, cleaning, ect...");
    };

    this.getPoisoned = function () {
        this.status = "Dead";
        this.beautyLvl = 0;
    };

    this.kissed = function () {
        this.status = "Alive";
        evilQueen.status = "Super Angry";
    }; 
    this.happyEnding = function () {
        if(evilQueen.status.includes("Dead")) {
            this.partner = prince;
            prince.partner = this;
            this.location = "Castle";
            prince.location = this.location;
            console.log("The queen become super angry and died and everyone else started living happy life... The END.");
        }
    }  
}

Princes.prototype = Object.create(Character.prototype);
Princes.prototype.constructor = Princes;

function Hunter (name, age,sex, height, location) {
    Character.call(this, name, age,sex, height);
    this.weapon = "Bow";
    this.status = "Alive";
    this.location = location;
    this.isHeGood = false;
    this.lyingTheQueen = this.isHeGood;
    this.gettingOrders = function () {
        console.log("The hunter accept the mission and he is going to find Snow White!\n And take her to the forest for easy kill.");
        
        if (this.isHeGood) {
            this.lyingTheQueen = this.isHeGood;
            console.log("Snow White is so beautiful that she make the hunter rethink his orders and to spare her.");

        } else { 
            this.lyingTheQueen = this.isHeGood;
            snowWhite.status = "Really dead!";
            console.log("Hunters kill Snow White!");

        }

    }
    this.desicions = function () {

    }
}

Hunter.prototype = Object.create(Character.prototype);
Hunter.prototype.constructor = Hunter;

function Dwarfs (name, age,sex, height,workInMines,location) {
    Character.call(this, name, age,sex, height);
    this.location = location;
    this.status = "Alive";
    this.workInMines = workInMines;
    this.finding = function () {
        console.log(`${this.name} founded someone has entered in they are house!`);
    }
    
    this.makingDeal = function () {
        console.log(`${this.name} make arrangements with the invader for the house work.`);
    }
}

Dwarfs.prototype = Object.create(Character.prototype);
Dwarfs.prototype.constructor = Dwarfs;

function Prince (name, age,sex, height, location) {
    Character.call(this, name, age,sex, height);
    this.location = location;
    this.status = "Alive";
    this.finding = function () {
        console.log("Then suddenly random prince appears and find the fallen beauty....");
    }
    
    this.kissing = function () {
        console.log("After he see's the fallen princes he loose control and kiss her...");
        snowWhite.status = "Alive";
        snowWhite.beautyLvl = 50; //spiking ^_^
        console.log("Snow White suddenly *cough* and drops the poison apple.");
        evilQueen.status = "Angry";       
    }
    
}

Prince.prototype = Object.create(Character.prototype);
Prince.prototype.constructor = Prince;


let snowWhite = new Princes ("Snow White", 1, "Female", 42,"Castle");
let evilQueen = new QueenOfMirrors("Evil Queen", 22, "Female", 165, "Castle");
let mirrorOnTheWall = new Mirror("Mirror on the Wall");
let hunter = new Hunter("Huntercheto", 48, "Male", 185, "Castle", );
let prince = new Prince("Prince", 22,"Male", 180, "In the woods");
let dwarfsName = [
    "Dopey",
    "Bashful",
    "Grumpy",
    "Sleepy",
    "Sneezy",
    "Doc",
    "Happy"
];

let dwarfs = [];

for (let i=0; i < dwarfsName.length; i++) {
    dwarfs.push(new Dwarfs (dwarfsName[i], 33, "Male", 120, "Work in the mines", "House in the woods"))
}

mirrorOnTheWall.chicks = [snowWhite,evilQueen];

for (let i=0; i<100; i++) {
    snowWhite.grow();
    evilQueen.grow();
    evilQueen.calling(mirrorOnTheWall);
    mirrorOnTheWall.whoHasTopBeautyLvl();
    
    
    if(snowWhite.beautyLvl > evilQueen.beautyLvl) {
        hunter.isHeGood = true;
        hunter.gettingOrders();
        hunter.location = "In the forest";
        snowWhite.location = "In the forest";        
        break;
    }
    
}

if (hunter.isHeGood) {
    snowWhite.running();

    if (snowWhite.location === dwarfs[0].location) { 
        console.log("Snow White find weird looking house and found shelter in it...");
        dwarfs[2].finding();
        dwarfs[3].makingDeal();
        snowWhite.houseCleaning();
        snowWhite.grow();
        evilQueen.grow();

        if (snowWhite.age === 19) {
            evilQueen.calling(mirrorOnTheWall);
            mirrorOnTheWall.whoHasTopBeautyLvl();
            evilQueen.dressing();
            evilQueen.feeding();
            
            if (evilQueen.action.includes("Knock...Knock...")){
                console.log("Snow White is a fool to trust a random knocking granny but she do it anyway.\n And get choked on poison apple!");
                snowWhite.getPoisoned();
                evilQueen.location = "Castle";
                console.log(snowWhite.status);                
            }
        }
    }

} else { 
    console.log("That was all folks!")
}

if (snowWhite.status.includes("Dead")) {
    evilQueen.calling(mirrorOnTheWall);
    mirrorOnTheWall.whoHasTopBeautyLvl();
    prince.finding();
    prince.kissing();
    snowWhite.kissed();
    evilQueen.superAngry();
    snowWhite.happyEnding();
}

console.log("--------------------------");
console.log("In the program you have read about the fallowing characters:")
console.log(snowWhite,prince,evilQueen,mirrorOnTheWall,hunter,dwarfs);