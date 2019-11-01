/*// PROTOTYPES
//The same as classes, but with a differnt syntax. Originally javascript did not have the ability to use classes, so prototypes were created. Classes were introducted later. You can use either classes or prototypes, but do not use both in the same code.

//This is the class system
class PersonC {
    constructor (name, age)
    {this.personName = name;
    this.personAge = age;
    }
    //function within a class
    about(){
        return `${this.personName} is ${this.personAge} years old`
    }
}
//subclass
class EmployeeC extends PersonC {
    constructor (name, age, id){
    super (name, age);
    this.employeeId = id;
    }
}
//new instances of these classes
let bob = new PersonC ("Bob Marley", 74);
let michael = new EmployeeC ("Michael Jackson", 65, 68657);

console.log(michael.employeeId)

//Now let's see the prototype system
// to create a prototype you create a variable with a function with name and age. This is the same as the constructor when creating a class but instead you are using a variable and a function 
let PersonP = function (name, age){
    this.personName = name;
    this.personAge = age;
}
//This is how you add a function within a prototype. Unlike the class system, the functions are outside of the prototype function, but are linked by calling the name of the prototype. In this exmaple PersonP.prototype and we are calling out new function about
PersonP.prototype.about = function (){
    return `${this.personName} is ${this.personAge} years old`;
}
//to create a sub prototype you can do the following. To call the parameters from the parent prototype you need to use PersonP (the name of the parent prototype).call

let EmployeeP = function (name, age, id){
    // this is acting the same way as a super does in a class
    PersonP.call(this, name, age);
    this.employeeId = id;
}
//this is needed to ensure that the prototype and sub prototype are connected. Works the same as extends in the class system
EmployeeP.prototype = Object.create(PersonP.prototype);

let fred = new PersonP ("Freddie Mercury", 73);
let jim = new EmployeeP ("Jim Morrison", 67, 676847)

console.log (fred.personName)
//to call the function we have added you need to console.log like this
console.log (fred.about());
// to call the employee Id from the sub protype we call
console.log (jim.employeeId)
console.log (`${jim.personName}'s employee id is ${jim.employeeId}`)

console.log (jim.about());
*/


//Activity to convert class to prototype
let Animal = function (name, hunger, thirst)
{
    this.animalName = name;
    this.animalHunger = 100;
    this.animalThirst = 100;
}
Animal.prototype.name = function (){
    return this.animalName;
}
Animal.prototype.hunger = function (){
    return this.animalHunger;
}
Animal.prototype.thirst = function (){
    return this.animalThirst;
}
Animal.prototype.eat = function (){
    this.animalHunger--;
}
Animal.prototype.drink = function (){
    this.animalThirst--;
}


let Bunny = function (name, lovesCarrot, favFood){
    Animal.call(this, name);
    this.lovesCarrot = lovesCarrot;
    this.favFood = favFood;
}

Bunny.prototype = Object.create(Animal.prototype);

Bunny.prototype.lovesCarrots = function(){
    return this.lovesCarrot;
}

Bunny.prototype.favFood = function(){
    return this.favFood;
}

let rosie = new Bunny ("Rosie", true, ["Basil", "Rocket", "Broccoli"]
);

rosie.eat();
rosie.drink();
console.log(rosie.animalHunger);
console.log(rosie.animalThirst);
console.log(rosie.lovesCarrots());
console.log(rosie.favFood);