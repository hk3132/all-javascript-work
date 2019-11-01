// // Like a variable but better as it can hold multiple values.
// //objects start with let or const, then name the object, then = {}, then list all your values with key values pairs with a key then semi colon and then the value in double quotes e.g name:"Heather". Separate multiple key value pairs with commas. See example below:
// let employee = {
// name: "Heather Kay",
// age: 27,
// nationality: "New Zealand",
// number: 07480
// }


// //You can also add arrays in the key value pairs
// let movie = {
//     name:"Pans Labyrinth",
//     yearReleased:2006,
//     actors: ["Ivana Baquero", "Doug Jones", "Sergi Lopez", "Maribel Verdu"],
//     director:"Guillermo del Toro",
//     language:"Spanish"
// }

// //to call a value from an object you call the object name.key
// console.log(movie.name);

// //you can also call a value using object name["key"]
// console.log(movie["name"]);

// //to call a value of something in an array. either use
// console.log(movie["actors"][0]);
// console.log(movie.actors[0])

// //if you just run the below then all values in the array will be displayed
// console.log(movie.actors)
// console.log(movie["actors"])

// //you can update the value of a key in an array  with the below. This will not work on numbers

// movie.language = "English";
// console.log(movie.language)

// // you can add new key value pairs to the object with. If the key does not exist it will create a new key value pairing in 

// movie.rating = 4;
// console.log (movie)

// //Activity 
// //Let’s create an object called person with a key called name and set the value to your name. Add another key called age.

// let person = {
//     name: "Heather",
//     age: 27
// }

// Let’s create an alarm.
//Create a key called weekendAlarm, with a value saying “no alarm needed”, and a key called weekdayAlarm, with a value saying “get up at 7am”
// Create a variable called day and one called alarm. If day is Saturday or Sunday, set alarm to weekendAlarm, If the day is a weekday, set alarm to weekdayAlarm

// let alarms = {
//     weekendAlarm: "no alarm needed",
//     weekdayAlarm: "get up at 7am"
// }

// let day = "Saturday"

// const alarm = () => 
// {if ((day == "Saturday")||(day == "Sunday")) {console.log(alarms.weekendAlarm)} else {console.log(alarms.weekdayAlarm)}
// }

// alarm();


//AGAIN using loop

// let alarms = {
//     weekendAlarm: "no alarm needed",
//     weekdayAlarm: "get up at 7am"
// }

// let day = "Monday";
// let alert = "";

// let weekDay = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
// for (let i=0; i<weekDay.length; i++);

// const alarm = (array) => 
// {if ((day == array[5])||(day == array[6])){console.log(alarms.weekendAlarm)} else {console.log(alarms.weekdayAlarm)}
// }

// alarm(weekDay);


//Using todays date

// let alarms = {
//     weekendAlarm: "no alarm needed",
//     weekdayAlarm: "get up at 7am"
// }

// let today = new Date();

// let weekDay = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
// for (let i=0; i<weekDay.length; i++);

// const alarm = (array) => 
// {if ((today == array[6])||(today == array[7])) {console.log(alarms.weekendAlarm)} else {console.log(alarms.weekdayAlarm)}
// }

// alarm(weekDay);

//Can also pass functions inside objects either as a key value pair
// let employee = {
//     name: "Heather Kay",
//     age: 27,
//     nationality: "New Zealand",
//     number: 07480,
//     hobbies: function(){
//         console.log("I am the best at crocheting");
//     },
//    //OR with the function name simply being value. Only use one method in a code
//     snacks(){console.log("I likes cheese")}
// }
    
// employee.hobbies()
// employee.snacks()


// This - represents the value of the things inside the object. This allows you to grab keys inside the object e.g. this.name. This allows you to change the value once in an object, and every instance of that will be changed. 
// Do not use arrow functions in objects as they will only call values within the function, but in the object and you will see errors

let employee = {
    name: "Heather Kay",
    sayHi: function(){console.log(`Hello, my name is ${this.name}`)},
    age: 27,
    country: "New Zealand",
    number: 074,
    hobbies: function(){
        console.log(`${this.name} am the best at crocheting`);
    },
    nationality(){console.log(`${this.name} is from ${this.country}`)}
}
    
employee.sayHi()

let pet = {
    name: "Jasper",
    typeOfPet: "Maine Coone",
    age: 6,
    colour: "Grey",
    eating: function(){console.log(`${this.name} is eating`)},
    drinking: function(){console.log(`${this.name} is drinking`)}
}

pet.eating();

let coffeeShop = {
    branch: "CuppaJoe",
    drinks: ["tea", "cappucino", "flat white"],
    drinksPrice: [2.50, 3, 4],
    food: ["muffin", "scone", "banana bread"],
    foodPrice : [3, 3.50, 4],
    order: function(){console.log(`You have ordered ${this.drinks[1]}, ${this.drinks[0]} and ${this.food[0]} the total is ${total}`)},
}

let total = (coffeeShop.drinksPrice[1] + coffeeShop.drinksPrice[0] + coffeeShop.foodPrice[0])


coffeeShop.order();

// You can have objects and arrays inside of objects

let menu = {
    wine: {
        porto: {
            price: 12 ,
            region: "Portugal"
        },
        sauvignon: {
            price: 17,
            region: "New Zealand"
        },
    },
}
// To log a specific value within the object use the following: name of object.name of first key. name of 2nd key
console.log( menu.wine.sauvignon.region)

let coffeeShop1 = {
    branch: "CuppaJoe",
    drinks: {
        tea: {
            price: 2.50
        },
        cappucino : {
            price : 3
        },
        flatWhite : {
            price : 4
        }
    },
    food: {
        muffin : {
            price: 3
        },
        scone : {
            price : 3.50
        },
        bananaBread : {
            price : 4
        },
    },
    order: function(){console.log(`You have ordered ${this.drinks[1]}, ${this.drinks[0]} and ${this.food[0]} the total is ${total}`)},
}