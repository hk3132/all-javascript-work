//DECLARATION
//Functions can have values added into them using parameters in the function and arguments in call
//The sequence must be the same e.g. food, number, location in function and "oranges", 4, "Asda" in call
                        //parameter
// function foodShopping(food, number, location) {           //parameter
// console.log(`Today I'm going to buy ${number} ${food} at ${location}`);
// }
//             //argument
// foodShopping("oranges", 4, "Asda");


//Functions can be called without calling any value
// function greeting(){
//     console.log("Hi everyone");
// }

// greeting();


// ANONYMOUS FUNCTION
// Function does not have a name, but it has been assigned to a variable - basket 
// By putting return into the function we are asking to store the result of number1 + number2. If you run a function and do not have return, the value will not be saved into the variable and it will be undefined

// const basket1 = function(number1, number2){
//  return number1 + number2; 
// }

// const basket2 = function(number1, number2, number3){
//     return number1 + number2 + number3;
// }

// let totalShop = basket1(2, 4) + basket2(1, 1, 2)

// console.log(totalShop)

//ARROW FUNCTIONS
//Latest update on how to create functions. Uses => between () and {} in function

// const basket1 = (fruit1, fruit2) => {
// console.log(`I have some ${fruit1} and ${fruit2} in my basket`)
// }

// basket1("pears", "apples");

//Activity1
//Here's an example of a function that includes a parameter.  Parameters are responsible for functions being able to work on different data inputs. Edit the snippet below to include two parameters and a running order count updated when the function is called :

// let orderCount = 0;  

// const takeOrder = (topping1, topping2, topping3) => { 
//     console.log(`Pizza with ${topping1} and ${topping2} and ${topping3}`); 
//     return (orderCount++); 
// } 

// takeOrder("pineapple", "mushroom", "Cheese");
// takeOrder("Mushroom","Sausage", "Ham")
// takeOrder ("Salami","Olives", "Peppers")

// console.log(orderCount);


//Activity2
//Cash machine time. Let’s create one that :dispenses cash if your pin number is correct and your balance is equal to, or more than, the amount you’re trying to withdraw.

let pin = 1234

const cash = (pinN, balance, withdraw) => { 
    if((pinN == pin) && (balance >= withdraw)){
    console.log(`Your pin is correct, ${withdraw} will be withdrawn. Your remaining balance is ${newBalance}`);}
    else if ((pinN == pin) && (balance < withdraw)){
        console.log(`You do not have ${withdraw} available, you only have ${balance} available`);}
    else {console.log(`Your pin is incorrect`)}
    }

const newB = (pin, balance, withdraw)=>{
    return balance - withdraw;
}
    
let newBalance = newB(1234, 500, 200)


cash(1234, 500, 200)
cash(1234, 400, 500)
cash(5657, 500, 400)


// if you just have one parameter in a function, you do not need to put the parameter in ()

const area = width => { return width;
}

let result = area (3)

console.log(result)

//Console output 3