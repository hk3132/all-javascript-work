// //FOR LOOP
// // when you start a for loop you need to tell the loop where it is going to start (in this case variable called i and we are starting it at 0) This is initializing the variable. The code states that at this point the i = 0. i < number - states how many times this will run. i++ means that it will increment the variable by 1 each time until i is not longer less than 5.
// // for (let i=0; i<5; i++){ console.log ("hello")}

// //console.log("hello") i = 0
// //console.log("hello") i = 1
// //console.log("hello") i = 2
// //console.log("hello") i = 3
// //console.log("hello") i = 4
// //When incrementing by 1 more, i = 5 which means i is no longer less than 5 and the loop breaks.

// // for (let i=0; i<5; i++){ console.log (`My current value of i is ${i}`)}

// // In normal array function in order to display a specific element in the array you would say console.log(arrayname[position of element you want to display])
// // You can set a loop to display all of these To get the loop to reference the array you need to add a reference to i within [] the loop
// let favFood = ["Chocolate", "Pizza", "Popcorn", "Cheese", "Peppers"]
// //By adding the variable you do not need to know how many items are in an array, instead you can get i to run until it is the length of the array by referencing the array length in the loop statement
// let favFoodL = favFood.length

// for (let i=0 ; i<favFoodL; i++)
//     {console.log (`My fav food is ${favFood[i]}`)}

// // to increment by more than 1 each time you can use i+=2, this will increment by 2. This can be changed to any number using the i+= number value
// for (let i=0 ; i<favFoodL; i+=2)
//     {console.log (`My fav food is ${favFood[i]}`)}

// //WHILE LOOP
// // Uses conditions, if condition is true then it will loop infinitely. control c will get you out of the loop if you run this by mistake. 
// // E.g. while you have money, you can shop
// // These are best when you want to run a loop until it meets are condition, but you dont know how many times you need to run the look. In this example the condition is until the balance > 0

// let balance = 200

// while(balance > 0){
//     console.log("I'm going to buy some clothes");
// balance -= 50;
// console.log(`My current balance is ${balance}`) // this will display the balance after each loop has run
// }

// console.log (`Now I spent all my money, my balance is ${balance}`)

// // Every time this loop will log, the balance will be reduced by 50. Therefore, it will run 4 times until the balance is 0 and then display the no balance code

// //DO WHILE LOOP

// let balance1 = 200
// let clothes = 190

// do{
// console.log("I am going to buy some clothes");
// balance1 -= clothes
// }
// while (balance1 > clothes)

// console.log (`I spent some of my money, I only have ${balance1} left`)


//Displays 4 films stored in an array. Use a loop to show each film in the array
// Create a function called filmCheck() that checks if the
// 3rd film in the array is Ghostbusters.
// If it is, it should return “yey it’s ghostbusters”. If it isn’t, it
// should return “booo, we want ghostbusters”


//My solution
let films = ["Kill Bill", "Kill Bill 2", "Ghostbusters", "Back to the Future"];

for (let i=0; i<films.length; i++)
{console.log (films[i])}

// films.shift();
// console.log(films);

const filmCheck1 = () =>
{if (films[2] == "Ghostbusters") {console.log ("yey it's ghostbusters");
} else {
    console.log("boo, we want ghostbusters");
}
}

filmCheck1();


//Using parameters to select what array we want to run the function in. 
let films1 = ["Kill Bill", "Kill Bill 2", "Ghostbusters", "Back to the Future"];
let films2 = ["Pans Labyrinth", "Amelie", "Joker", "LOTR"]

for (let x=0; x<films.length; x++)
{console.log (films[x])}

// films.shift();
// console.log(films);

const filmCheck = (array) =>
{if (array[2] == "Ghostbusters") {console.log ("yey it's ghostbusters");
} else {
    console.log("boo, we want ghostbusters");
}
}

filmCheck(films2); // By just changing films1 to films in this bottom arguement we can run this function on differnt arrays by changing just one character