class Animal {

  constructor (name, image, type, bread, age, sex, neededAmount,currentlyRisedAmount) {
    this.name = name;
    this.image = image;
    this.type = type;
    this.bread = bread;
    this.age = age;
    this.sex = sex;
    this.neededAmount = neededAmount;
    this.currentlyRisedAmount = currentlyRisedAmount;
    this.isAdopted = false;
    this.timeOfAdoption = '';
  }

}

class AnimalManager {

  constructor () {
    this.animalsList = DATA.map( animal => new Animal (
      animal.name,
      animal.image,
      animal.type,
      animal.bread,
      animal.age,
      animal.sex,
      animal.neededAmount,
      animal.currentlyRisedAmount
    ));
    
    this.typeOfAnimal = this.selectByType();
    this.allAdopted = [];
  }

  selectByType = () => {
    let selectByType = [];

    this.animalsList.forEach(animal => {

      if(!selectByType.includes(animal.type.trim())) {
        selectByType.push(animal.type.trim());
      };
    });

    return selectByType;
  }

  searchViaTitleAndType = (inputName = "", type="") => {
    let result = this.animalsList.filter (animal => {
      let isNameEqual = animal.name.toLowerCase().includes(inputName.trim().toLowerCase());
      let isType = animal.type.toLowerCase().includes(type.toLowerCase());
      
      return isNameEqual && isType; 
    });

    return result;
  }

  adoptedAnimals = (animal) => {
    let isAdopted = this.allAdopted.find(element => element === animal);
    
    if(!isAdopted) {
      this.allAdopted.push(animal);
      animal.isAdopted = true;

      // let thisAnimalIndex = this.animalsList.findIndex(element => element === animal); 
      // this.animalsList.splice(thisAnimalIndex, 1);
    
    }
  }

  leaveAnimals = (animal) => {
    let isAdopted = this.allAdopted.findIndex(element => element === animal);

    if (isAdopted !== -1) {
      // let thisAnimal = this.allAdopted.find(element => element === animal);
      // this.animalsList.push(thisAnimal);
      this.allAdopted.splice(isAdopted, 1);
      animal.isAdopted = false;

    }
  }
}