// Scope. Whenever we creat some variables outside of everything like how we have created the variable fox we have created this in the global scope
//global scope
// let animal = "fox"

// const catchTheAnimal = function (){
    // The anm variable has been created inside the function so can only be accessed inside the function. If you try and call this with a simple console.log(anm) you will get an error saying anm is not defined as it has not been defined outside the function. Our variable animal is in the global scope so this can be called by any function
//         let anm = "tiger";
//     console.log (`The quick brown ${anm} jumps over the lazy dog`);

//     function feedAnimal(){
//         let food = "rabbits";
//         console.log(`The ${animal} likes to eat ${food} and ${food2}`);
//     }
//     let food2 = "hedgehogs";
//     feedAnimal();

// }

// console.log (animal);

// catchTheAnimal();
// You can always jump out and call a variable in the global scope or into a parent/grandparent scope. But you can never call a variable that exists inside of a child. 


// Let VS Var
//When you create a variable with let the variable will only live inside that block. A block of code is something inside {}
// function startLet(){
//     for (let i = 0; i < 3; i++){
//     console.log(i);
//     }
// }

// startLet();

//Using Var
// The variable continues to exist even after we have finished out loop block. The console.log therefore says the value of i is 3, when in fact it isnt
// function startVar(){
//     for (var i = 0; i < 3; i++){
//     console.log(i);
//     }
//     console.log (`the last value of i is ${i}`)
// }

// startVar();


//Higher order functions AKA Call backs are creating a function and passing a function as a parameter

let whichGreeting = (timeOfDay) => {
    console.log (`Good ${timeOfDay}`);
}
                //fn is referencing the parameter we have set at the bottom which is the function above whichGreeting
let greet = (time,fn) => {
    if(time<1200){
        fn("Morning");
    }else if (time >= 1200 && time < 1800){
        fn("Afternoon");
    }else{
         fn("Evening");
    }
}
            //calling the whichGreeting function as a parameter
greet(1400, whichGreeting)

//Activity (1)

function greeting() {
    console.log ("Hello Code Nation")
}

function hello(n, cn){
    for (let i = 0; i<n; i++)
        cn();
    }

hello(5, greeting);

//Activity(2)
//The array method .map is an example of a higher order function. Declare a variable with five numbers, then use .map to iterate through the array and multiply each array item by 3.

let array = [1, 2, 3, 4, 5];

let array2 = array.map(item => item * 3);

console.log(array2);

//Activity(3)
//Test this function to make sure it works by passing a number to the doMaths function, then passing a number and one of the four maths functions, to the returned function.

const add = (a,b) => {
    return a+b;
}
const subtract = (a,b) => {
return a - b; }
const multiply = (a,b) => {
    return a*b;
}
const divide = (a,b) => {
return a/b; }
const doMaths = (num1) => {
    return (num2, fn) => {
        return fn(num1, num2);
    }
}

console.log (doMaths(2)(3, add));
