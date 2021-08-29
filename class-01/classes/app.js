// function Room(wallColor, flooring, doorColor) {
//   this.wallColor = wallColor;
//   this.flooring = flooring;
//   this.doorColor = doorColor;
//   this.light = false;
// }

// Room.prototype.lightSwitch = function () {
//   this.light = !this.light;
// }




// 

class Room {
  // constructor

  constructor(wallColor, flooring, doorColor) {
    this.wallColor = wallColor;
    this.flooring = flooring;
    this.doorColor = doorColor;
    this.light = false;
  }

  lightSwitchArrow = () => {
    this.light = !this.light;
    console.log('arrow', this.light);
  }

  lightSwitchNormal() { // normal function
    this.light = !this.light;
    console.log('normal', this.light);
  }
}


const meetingRoomFive = new Room('white', 'matted carpet', 'glass door');

// meetingRoomFive.lightSwitchArrow();
meetingRoomFive.lightSwitchNormal();

// class Animal {

//   constructor(breed, color) {
//     this.breed = breed;
//     this.color = color;
//   }

//   eat = () => { alert('eat food') }
//   sleep = () => { alert('sleeps') }
// }

// class Cat extends Animal {
//   constructor(breed, color, favFood, favHobby) {
//     super(breed, color); // new Animal = (breed, color)
//     this.favFood = favFood;
//     this.favHobby = favHobby;
//   }

//   // we also inherent the eat and sleep 
//   hunt = () => { alert('hunting') }
// }

// const newCat = new Cat('tabby', '', 'fish', 'sleeping the sun')

// console.log(newCat.color);