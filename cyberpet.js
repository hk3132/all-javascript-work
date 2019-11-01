//Activity(2): Cyber Pet
//Cyber pet time!
// User selects the kind of animal they’d like (dog, cat, rabbit) and you have to play with it, feed it, give it drinks etc. There should be consequences across the board – if you don’t play, it gets bored, if you do, it’s happy, but gets thirsty, that kind of thing.
//Built with classes

class Pet { 
    constructor(name, energy, hunger){
        this.name = name;
        this.energy = energy;
        this.hunger = hunger;
    }

play()
{
if (this.energy >= 5 && this.hunger >= 3){console.log (`${this.name} loves to play!!!`);
this.energy -= 5; 
this.hunger -= 3;
console.log(`Energy ${this.energy} Hunger ${this.hunger}`)}
else (this.energy <= 5 || this.hunger <= 3);console.log (`${this.name} is too tired to play, please feed ${this.name} and let ${this.name} rest`)}

eat()
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

rest() 
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
}


class Dog extends Pet {
    constructor (name, energy, hunger){
        super (name, energy, hunger)
    }
    trick()
    {
    if (this.energy >= 10 && this.hunger >= 5){console.log (`${this.name} did a flip`);
    this.energy -= 7; 
    this.hunger -= 5;
    console.log(`Energy ${this.energy} Hunger ${this.hunger}`)
    } 
    else if (this.energy <= 10 && this.hunger <= 5) {console.log (`${this.name} am too tired to do a trick, please feed ${this.name}`)
    }
    }
}

class Cat extends Pet {
constructor (name, energy, hunger){
    super (name, energy, hunger)
}
}

const Spike = new Dog ("Spike", 10, 5)
const Fluffy = new Cat ("Fluffy", 4, 8)

Fluffy.rest();