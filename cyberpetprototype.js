//Cyberpet built with protoypes

let activity = prompt ("What pet would you like? Spike or Fluffy?");
let result = activity.toLowerCase();

if (result == "fluffy"){
    alert ("Meet Fluffy, a cute little cat");
} else if (result == "spike"){ 
    alert("Meet Spike, your new best friend");
} else { alert ("Please make sure to select Fluffy or Spike");
}

let Pet = function (name, energy, hunger){
    this.name = name;
    this.energy = energy;
    this.hunger = hunger;
} 

let action = prompt (`What would you like to do with ${this.name} Play? Eat? or Rest?`)
let input = action.toLowerCase();

if (input == ("play")) play(); else if (input == ("eat")) eat(); else if (input == ("rest")) rest(); else alert ("Please make sure to select an action for your pet")

Pet.prototype.play = function ()
{
if (this.energy >= 5 && this.hunger >= 3){console.log (`${this.name} loves to play!!!`);
this.energy -= 5; 
this.hunger -= 3;
console.log(`Energy ${this.energy} Hunger ${this.hunger}`)}
else (this.energy <= 5 || this.hunger <= 3);console.log (`${this.name} is too tired to play, please feed ${this.name} and let ${this.name} rest`)
}

Pet.prototype.eat = function()
{
if (this.hunger <= 2 ){console.log (`${this.name} needs food!!!`); 
this.energy += 2; 
this.hunger += 8 ;
console.log(`Energy ${this.energy} Hunger ${this.hunger}`)
} 
else if (this.hunger >= 3){console.log (`${this.name} is not very hungry`)
this.energy += 1;
this.hunger += 4;
console.log (`Energy ${this.energy} Hunger ${this.hunger}`
)}
else if (this.hunger >= 10) {console.log (`${this.name} is too full`)}
}

Pet.prototype.rest = function() 
{
if (this.energy <= 3){console.log(`${this.name} would like to rest`);
this.energy += 10;
this.hunger -= 3;
console.log(`Energy ${this.energy} Hunger ${this.hunger}`) 
}
else if (this.energy >= 3){console.log(`Nap time for ${this.name}`);
this.energy += 8;
this.hunger -= 2;
console.log(`Energy ${this.energy} Hunger ${this.hunger}`)
}
else (this.energy >= 3);{console.log(`${this.name} isn't tired. Play with ${this.name}`)}
}


let Dog = function (name, energy, hunger){
    Pet.call(this,name, energy, hunger);
    }
Dog.prototype = Object.create(Pet.prototype);

 Dog.prototype.trick = function ()
    {
    if (this.energy >= 10 && this.hunger >= 5){console.log (`${this.name} did a flip`);
    this.energy -= 7; 
    this.hunger -= 5;
    console.log(`Energy ${this.energy} Hunger ${this.hunger}`)
    } 
    else if (this.energy <= 10 && this.hunger <= 5) {console.log (`${this.name} am too tired to do a trick, please feed ${this.name}`)
    }
    }

let Cat = function (name, energy, hunger){
    Pet.call(this, name, energy, hunger)
}

let Spike = new Dog ("Spike", 10, 5)
let Fluffy = new Cat ("Fluffy", 4, 8)

Spike.trick();
Spike.eat();
Spike.play();
Spike.rest();
Spike.trick();
Spike.eat();
Spike.trick();
