class Mine {

    constructor (mineName) {
        this.mineName = mineName;       
        
    }
    ore = 10000;
    oreType = "ore";
    preciousStone = 1000;
    pStoneType = "precious stone";
    mineStatus = true;
    canMinerWork = true;  

}

class MiningWorkManager {
    listOfMiners = [];
    
    findRichestMiner () {
        let richestMofo = this.listOfMiners.sort((a,b)=>b.money-a.money);
        
        return richestMofo;
    }

    findMinerWithMostPreciusStone () {
        let mostPS = [];
        mostPS = this.listOfMiners.sort((a,b)=>b.findedPreciusStones-a.findedPreciusStones);
        
        return console.log(`The worker with most Precius stone is ${mostPS[0].name} and he have  ${mostPS[0].findedPreciusStones} PS.`);
    }

    hired () {       
        for (let i=0; i<arguments.length; i++) {
            let miner = arguments[i];
            this.listOfMiners.push(miner);
        }        
    }

    minerPaying (miner) {
        miner.money += miner.foundedOre*10;
        miner.foundedOre = 0;
        miner.money += miner.foundedPreciusStone*200;
        miner.foundedPreciusStone = 0;
    }

    minerResting (miner) {
        
        let results = this.listOfMiners.filter( e => e.name === miner.name);
        
        if (miner.money >= 20 && results.length) {
            miner.money -= 20;
            miner.rested = true;
            miner.maxWorkingPerDay = 5;
        } else if (!!results.length){
            this.listOfMiners.splice(this.listOfMiners?.indexOf(miner),1);
            console.log(`${miner.name} got fired!`);
        }
    }

}

class Miner {

    constructor (name, age, minerDescripiton) {
       
        this.name = name;
        this.age = age;   
        this.minerDescripiton = minerDescripiton;
    }

    maxWorkingPerDay = 5;
    dayAtWork= 0;
    money = 30;
    foundedOre = 0;
    foundedPreciusStone = 0;
    rested = true;
    workerWorking = true;
    findedPreciusStones = 0;

    working () {
        if (this?.rested) {
            for (let i=0; i<this?.maxWorkingPerDay; i++) {
                let strikeWithPickAxe = Math.floor(Math.random()*100);

                if (strikeWithPickAxe > 35 && strikeWithPickAxe <= 50) {
                    this.foundedOre++;
                    console.log(`${this.name} founded ore : ${this.foundedOre}`)
                } else if (strikeWithPickAxe > 72 && strikeWithPickAxe <= 75) {
                    this.foundedPreciusStone++;
                    this.findedPreciusStones++;
                    console.log(`${this.name} founded preciusStone : ${this.foundedPreciusStone}`)
                }
            } 
            this.maxWorkingPerDay = 0;
            this.rested = false;
        }
    }

}

let moria = new Mine("Khazad-dûm!");
let gandalf = new Miner("Gandalf","Old as fuck!", "Magician");
let legolas = new Miner("Legolas","Not so old but still old according to humans!","Freaking elf prince!");
let gimli = new Miner("Gimli","60","Actually a dwarf!!!");
let aragorn = new Miner("Aragorn",40,"self-exiled human prince");
let boromir = new Miner("Boromir",32,"self-proclaimed human prince");
let frodo = new Miner("Frodo",32,"not a clue how heavy task he can carry");
let sam = new Miner("Sam",32,"support that we all need but non deserve a true hero");
let merry = new Miner("Merry",32, "he and his best buddy going around doing stuffs and having not clue what is going on!");
let pippin = new Miner("Pippin",32,"he and his best buddy going around doing stuffs and having not clue what is going on!");
let gollum = new Miner("Gollum",120,"Little sneaky old as fuck hobbit with some emotional problems");
//gandalf,legolas,gimli,aragorn,boromir,frodo,sam,merry,pippin,gollum
let mineBoss = new MiningWorkManager();
mineBoss.hired(gandalf,legolas,gimli,aragorn,boromir,frodo,sam,merry,pippin,gollum);
let daysForWork = 10;


for (let i=1; i<=daysForWork; i++) {
    
    for (let j=0; j<mineBoss.listOfMiners.length; j++){
        let originalLength = mineBoss.listOfMiners.length;
        console.log(`Working day: ${i} for ${mineBoss?.listOfMiners[j]?.name}`);       
        mineBoss?.listOfMiners[j]?.working();
        mineBoss.minerPaying(mineBoss?.listOfMiners[j]);
        mineBoss.minerResting(mineBoss?.listOfMiners[j]);
        if(mineBoss.listOfMiners.length < originalLength) {
            j--;
        }        
    }  
}

console.log(`List for richest: \n`, mineBoss.findRichestMiner());
mineBoss.findMinerWithMostPreciusStone();




