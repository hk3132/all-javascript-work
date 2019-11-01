//Using primitive Boolean true or false
// let glass = false;
//  if(glass){
//      console.log("This is true");
//  } else {
//      console.log("This is false");
//  }

//Using comparison with == 
//  let glass = "empty"
//  if(glass == "full"){
//     console.log("My glass is full");
// } else {
//     console.log("My glass is empty");
// }

//Using ! to find the opposite - in this example the true statement will run as we are looking for the 
//opposite of morning which has been assigned the value of false
// let morning = false;
// if(!morning){console.log("it is late in the day");}
// else {console.log("it is morning");}

//A variable will be false if a variable has no value e.g "" or 0
// let morning = "";
// if(morning){console.log("This is true");} else 
// {console.log("This is false");}

//Greater than or less than
// let number1 = 2
// let number2 = 78
// if(number1 > number2){
//     console.log("This is true");
// } else {
//     console.log("This is false");
// }

//&& to run two statements at once - will only show true if both statements are true
// let number1 = 4
// let number2 = 7
// if((number1 < number2) && (6>9)){
//     console.log("This is true");
// } else {
//     console.log("This is false");
// }

// || or operator - only 1 statement needs to be true for true statement to show
// let number1 = 4
// let number2 = 7

// if((number1 < number2) || (6>9)){
//     console.log("This is true");
// } else {
//     console.log("This is false");
// }
// Using switch - two options - either using a true comparison
// let grade = 60
// switch(true) {
// case grade >= 80:
//     console.log("Distinction")
//     break;
//  case grade >= 70:
//     console.log("Merit")
//     break;
// default: console.log ("Fail")
// }
//or with the value of grade as concrete - will only run if any of the cases exactly match grade variable value. Otherwise will run default
// let grade = 60
// switch(grade) {
//  case 80:
//     console.log("Distinction")
//     break;
// case 70:
//     console.log("Merit")
//     break;
// default: console.log ("Fail")
// }


//Challenge 1(if/else): Create a variable called password. Check how many letters are in the password, if there are less than 8 log to the console that the password is too short. Otherwise log the password to the console.
//If password length is less than 8
// let password = "password"
// let pl = password.length
// if (pl >= 8){
//     console.log("Password created");
// }else if (pl <= 8){
//     console.log("Password is too short");
// }

//Challenge 2(use both if/else and switch): Create a variable called num. Check if the variable is divisible by 3 or 5. If it is log “This number is divisible by 3 or 5” to the console. Otherwise log “This number is not divisible by 3 or 5”.
// let num = 15

// if((num % 3 == 0) && (num % 5 == 0)){
//     console.log("This number is divisible by 3 and 5");
// } else {
//     console.log("This number is not divisible by 3 and 5");
// }

//Challenge 3: Create a variable called num. If num is divisible by 3 log “fizz” to the console, if it’s divisible by 5 log “buzz” to the console, if it’s divisible by both 3 and 5 log “fizz buzz” to the console. Otherwise log num to the console.

//fizz buzz
// let num = 10

// if ((num % 3 == 0) && (num % 5 == 0)){
//     console.log("fizz buzz");}
//     else if (num % 3 == 0){console.log("fizz");}
//     else if (num % 5 == 0){console.log("buzz")}
//     else {console.log ("number recorded")}

//Challenge 4: Create a variable called num. Check if the number is a palindrome (looks the same forward as it does backwards e.g. 1001 or 20202).

// let number = 1327;
// console.log(typeof number);

// let numberString = number.toString();

// console.log(typeof numberString);

// let splitNumber = numberString.split("");
// console.log(splitNumber);

// let reversedNumber = splitNumber.reverse();
// console.log(reversedNumber);

// let joinedNumber = reversedNumber.join("");
// console.log(joinedNumber);

// if(number == joinedNumber){console.log("The number is a palindrome");} else {console.log("The number is not a palindrome");}


//Challenge 5: Create a variable called time, a variable called placeOfWork and a variable called townOfHome. Create an if statement that logs to the console where someone is at times of the day. E.g. if the time is 7 I’m at home, at 8 I’m commuting, at 9 I’m at work.

// let time = 7
// let placeOfWork = "Apadmi"
// let townOfHome = "Chorlton"

// switch(time) {
//     case 7:
//         console.log(`I am at ${townOfHome}`)
//         break;
//     case 8:
//         console.log(`I am commuting from ${townOfHome} to ${placeOfWork}`)
//         break;
//     case 9:
//         console.log(`I am at ${placeOfWork}`)
//         break;
// }

//Challenge 6: Take the string “jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi”. Find the index of a last vowel in the string.

// let str = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi"

// let vowels = ("a","e","i","o","u")

// let n = str.lastIndexOf(vowels)
// console.log(n)

let str = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi"

let splitString = str.split("");
let reversedString = splitString.reverse();
let joinedString = reversedString.join("");

for(var i = 0; i<joinedString.length; i++)
 {
 if (joinedString[i] =='a' || joinedString[i] == 'e' || joinedString[i] =='i'
 || joinedString[i] == 'o' || joinedString[i] == 'u')
 {
    let numberOfVowel= i

let lastVowel = str.length - numberOfVowel
     console.log(lastVowel)
    break;
    }
}


// Challenge 7: Create a variable called word that takes a string. Create an if statement that checks if the last letter is the same as the first. If it is return true, otherwise return false.

let word = "Yay"

let wordSC = word.toLowerCase()

let firstChar = wordSC.charAt(0);
let lastChar = wordSC.charAt(wordSC.length-1);
if (firstChar === lastChar)
    {console.log(true)
} else {
    console.log(false)
}


//Challenge 8: Create two variables called num1 and num2. Create an if statement that checks if the result of the sum is even. If it is return the number, otherwise return the numbers multiplied together
// let num1 = 7
// let num2 = 8

// let total = (num1+num2)
// let multi = (num1*num2)

// if (total % 2 == 0) {console.log`${total}`}
// else if (total % 2 >= 0) {console.log(`${multi}`)}
