/*
// Object Oriented Programming

// Classses 
//You can see below that are having to repeat the same information over and over again. This is not good and there is a better way to do it

// let person1 = {
//     name : "Frank",
//     age : 12,
//     email : "frank@email.com",
//     phoneNumber : 786745399,
// }

// let person2 = {
//     name : "Jill",
//     age : 31,
//     email : "jill@email.com",
//     phoneNumber : 785902739,
// }

// let person3 = {
//     name : "Bob",
//     age : 91,
//     email : "bob@email.com",
//     phoneNumber : 72929475954,
// }

//Instead you can use classes like the below. When creating a class it is best practice to name these starting with a capital letter. Name the class then create a constructor - constructor is a javascript junction that sets default, this acts like a template - list the default keys between the brackets of the constructor

class Contact {//these are the names we are giving to the data that we give  
    constructor (name, age, email, phoneNumber) {
    // here give the value that we will call and connect them to the data names we have given above
    this.contactName = name; // Use semi colons in classes, not commas
    this.contactAge = age;
    this.contactEmail = email;
    this.contactNumber = phoneNumber;
    }

    call(){
        console.log(`You can call ${this.contactName}`)
    }
}

// create new variable = New nameOfClass (then give value of the names we have given above e.g name, age, email, phoneNumber)
//When passing values into the person1 ensure they are in the same order as the values in the class
const person1 = new Contact("Frank", 27, "frank@email.com", 759583839)

//To call the name of person1 you need to call the name of the variable e.g. person1 then . the name of the this value in the class e.g. contactName
console.log (person1.contactName)
//this will display person1 age
console.log (person1.contactAge)

//Can then call the function within the class using this. Person1 will inherit the function from the class Contact. You can call Frank because he is part of the class Contact and we have said that anyone in this class has this function
person1.call();



//Create a new contact in the same way.
const person2 = new Contact ("Jill", 45, "jill@email.com", 856382784758)

//Can then call the name for person2
console.log(person2.contactName)
// Can call the function and it will show person2's name in the function
person2. call();

*/

// Create a class for pokemon - pass type, name and HP. Create function to say the pokemon knows how to eat

class Pokemon {
    constructor (name, type, hp){
    this.pokemonName = name;
    this.pokemonType = type;
    this.pokemonHp = hp;
    }
eat(){console.log(`${this.pokemonName} loves to eat`)}
}

const pikachu = new Pokemon ("Pikachu", "Electric", 70)

const squirtle = new Pokemon ("Squirtle", "Water", 65)

// Subclass. Should only have 3 chains of classes - e.g. Parent, children, grandchildren maximum to avoid any issues 
//To make a subclass you declare a new class and say extends and the name of the class you want it to be a subclass of 
class Digimon extends Pokemon{
                // can pass a new value that only applies to the subclass
    constructor(name, type, hp, evolution){
        // use commmand super to grab everything from the parent class
        super(name, type, hp);
        this.digimonEvolution = evolution;
    }
                            //reference the name from the parent class
    drink(){console.log(`${this.pokemonName} likes to drink`)}
}

const patamon = new Digimon ("Patamon", "Flying", 50, "First")

const agumon = new Digimon("Agumon", "Dinosaur", 70, "Second")

//to call a value of a subclass you need to use the name from the parent class e.g. pokemonName
console.log (patamon.pokemonName);
// to call the new value in the subclass you use the name you gave it in the subclass
console.log (patamon.digimonEvolution);

//the function from the parent class will still apply to the subclass. As the subclass is extended pokemon, digimon will inherit anything from the subclass 
patamon.eat();

patamon.drink();

class Tamagotchi extends Pokemon {
    constructor(name, type, hp, location){
        super(name,type,hp)
        this.tamagotchiLocation = location
    }
    clean(){console.log(`${this.pokemonName} needs to be cleaned`)}
}

const pogo = new Tamagotchi("Pogo", "pocketdweller", 5, "in my pocket")

console.log (pogo.pokemonName)
console.log (pogo.tamagotchiLocation)


// PUBLIC AND PRIVATE 
// At the top in the Pokemon class we have a function called eat that means any subclass of Pokemon like to eat. Therefore the eat function is public.
// The subclass Digimon extends Pokemon and has a private function - that only applies to instances (const) that are part of the Digimon class.
// If you try to run a private subclass function for an instance (const) that is not from that subclass you will see an error. e.g. if you run squirtle.clean(); you will receive an error as the clean function is a private function only for tamagotchis


