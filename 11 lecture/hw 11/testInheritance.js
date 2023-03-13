function CharacterCreation (name, faction, sex, race,classes) {
    this.name = name;
    this.faction = faction;
    this.sex = sex;
    this.race = race;
    this.classes = classes;
    
    this.raceSpecifics = function () {
        if (this.faction === "Alliance") {
            this.reputation = `Friendly with members of Alliance! Hated with Horde!`;

            if (this.race === "Human") {
                this.startingPoint = `Starting point: Northshire; Capital: Stormwind;`;            
                this.raceSpecialAbility = "Perception";
            }

            if (this.race === "Dwarf") {
                this.startingPoint = `Starting point: Coldridge Valley; Capital: Ironforge;`;            
                this.raceSpecialAbility = "Stoneform";
            }

            if (this.race === "Gnome") {
                this.startingPoint = `Starting point: New Tinkertown; Capital: Ironforge;`;            
                this.raceSpecialAbility = "Expansive Mind";
            }

            if (this.race === "DarkElf") {
                this.startingPoint = `Starting point: Shadowglen Valley; Capital: Darnassus;`;            
                this.raceSpecialAbility = "Shadowmeld";
            }
        
        } else if (this.faction === "Horde") {
            this.reputation = `Friendly with members of Horde! Hated with Alliance!`;

            if (this.race === "Tauren") {
                this.startingPoint = `Starting point: Camp Narache; Capital: Thunderbluff;`;            
                this.raceSpecialAbility = "Endurance";
            }

            if (this.race === "Orc") {
                this.startingPoint = `Starting point: Coldridge Valley; Capital: Ironforge;`;            
                this.raceSpecialAbility = "Blood Fury";
            }

            if (this.race === "Troll") {
                this.startingPoint = "Starting point: New Tinkertown; Capital: Ironforge;";            
                this.raceSpecialAbility = "Berserking";
            }

            if (this.race === "Undead") {
                this.startingPoint = "Starting point: Shadowglen Valley; Capital: Darnassus;";            
                this.raceSpecialAbility = "Will of the Forsaken";
            }
        
        }   
    }
    
    this.lvl = 1;
    this.lvlUp = function () {
        if (this.lvl < 60) {
            this.lvl++;
            console.log(`Congratz you have reached lvl - ${this.lvl}!`);            
        } else { 
            console.log("You have reached maximum level!");
        }
    }
}

function ClassesSpecialty (name, faction, sex, race, classes) {
    CharacterCreation.call(this, name, faction, sex, race, classes);
    let possibleWeapons = ['Staves','Dagger','Sword','Two-handed sword','Mace','Two-handed Mace'];
    this.primaryWeapon = function () {
        let randomStartingWeapon = "";

        for (let i=0; i<1; i++) {                    
            randomStartingWeapon = possibleWeapons[Math.floor(Math.random()*possibleWeapons.length)];
            break;
        }
        return randomStartingWeapon;
    }

    this.isThereShield = function () {
        if(!this.firstWeapon.includes("Two")) {
            return "Shield";
        } else {
            return null;
        }
    }

    this.classesBonusesAndThings = function () {
        if(this.classes === "Mage") {
            this.equipment = "Cloth";
            this.lvlReaching40 = function () {
                if (this.lvl >= 40) {
                    this.ridingSkill = "Unlocked";
                } else {
                    console.log("dont have lvl for those skills");
                }
            }
            this.skillResource = "Mana";
            this.mana = 150;
            this.health = 100;
            possibleWeapons = ['Staves','Dagger'];
            this.secondWeapon = "Wand";
            this.firstWeapon = this.primaryWeapon();
        }
        if(this.classes === "Warrior") {
            this.equipment = "Mail";
            this.lvlReaching40 = function () {
                if (this.lvl >= 40) {
                    this.equipment = "Mail && Plate";
                    this.ridingSkill = "Unlocked";
                } else {
                    console.log("dont have lvl for those skills");
                }
            }
            possibleWeapons = ['Sword','Two-handed sword','Mace','Two-handed Mace'];
            this.firstWeapon = this.primaryWeapon();           
            this.shield = this.isThereShield();
            this.skillResource = "Rage";
            this.rage = 100;
            this.health = 220;
        }
        if(this.classes === "Druid" && (this.race === "Dark Elf" || this.race === "Tauren")) {
            this.equipment = "Leather";
            this.lvlReaching40 = function () {
                if (this.lvl >= 40) {
                    this.ridingSkill = "Unlocked";
                } else {
                    console.log("dont have lvl for those skills");
                }
            }
            possibleWeapons = ['Staves','Mace','Two-handed Mace'];
            this.firstWeapon = this.primaryWeapon();           
            this.shield = this.isThereShield();
            this.transform = function (a) {
                if (a === "Druid") {
                    this.skillResource = "Mana";
                    this.mana = 150;
                    this.health = 160;
                } else if (a === "Druid - cat") {
                    this.skillResource = "Energy";
                    this.energy = 100;
                    this.health = 160;
                } else if (a === "Druid - bear") {
                    this.skillResource = "Energy";
                    this.rage = 100;
                    this.health = 200;
                }
            }
            
           
        }
    }
    

}

ClassesSpecialty.prototype = Object.create(CharacterCreation.prototype);
ClassesSpecialty.prototype.constructor = ClassesSpecialty;

let newCharacter = new ClassesSpecialty("45","Horde","Female","Troll","Mage");
newCharacter.classesBonusesAndThings();
console.log(newCharacter);

let newCharacter2 = new ClassesSpecialty("123","Horde","Female","Troll","Warrior");
newCharacter2.classesBonusesAndThings();
console.log(newCharacter2);
for(let i = 0; i<39; i++) {
    newCharacter2.lvlUp();
    newCharacter2.lvlReaching40();
}

console.log(newCharacter2);