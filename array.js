/*//Arrays start at 0. Therefore count for oranges will be 2, not 3
let shoppingList = ["Bread", "Eggs", "Oranges", "Apples"]
console.log(shoppingList[2])
//Console output Oranges

//To count number of items in array you can use .length
console.log(shoppingList.length)
//Console output 4

//To list item at position 3 in array
console.log(shoppingList[3])
//Console output Apples

//To add items to an array 
shoppingList.push("Jam")

console.log(shoppingList.length)
//Console output 5

//To display all items in an array
console.log(shoppingList);
//Console output 'Bread', 'Eggs', 'Oranges', 'Apples', 'Jam'

//To remove item from array - will remove last item from array - cannot specify the item name. This will only remove the last item
shoppingList.pop();

console.log(shoppingList);
//Console output 'Bread', 'Eggs', 'Oranges', 'Apples'

//To remove first item from array 
shoppingList.shift();

console.log(shoppingList);
//Console output 'Eggs', 'Oranges', 'Apples'

//Will add named item to beginning of array
shoppingList.unshift("Honey");

console.log(shoppingList);
//Console output 'Honey', 'Eggs', 'Oranges', 'Apples' 

//Will replace one item with another, or place item in defined place. Below example will put Juice at position 3 and remove Apples. If you enter (3,0, "Juice") then juice will just be entered at position 3 and will not remove anything
shoppingList.splice(3, 1, "Juice");

console.log(shoppingList);

//Will slice out the items starting from the specified positions and display these. This is creating a new array - not modifying the original so you need to define a new variable in order for the sliced array to log

let newShoppingList = shoppingList.slice(2);

console.log(newShoppingList);

//Console log 'Oranges', 'Juice'

//Activity(1):
//Create a list of your favourite website (3 of them), and then add another two once you’ve created the list. Then remove the last website.

let favWebsites = ["gmail.com", "hotmail.com", "yahoo.com"]

console.log(favWebsites);

favWebsites.push("bing.com");
favWebsites.push("askjeeves.com");

console.log(favWebsites);

favWebsites.pop();

console.log(favWebsites)
*/

//REST OPERATOR
// ... will allow you to take everyone from one array and it to another array and allow you to add more values to it

// let shoppingList = ["Bread", "Eggs", "Oranges", "Apples"]

// let finalList = [...shoppingList, "Wine"]


// console.log(finalList)

let snacks = ["Chips", "Chocolate", "Popcorn"]
let fruit = ["Apples", "Pears", "Strawberries"]
let drinks = ["Wine", "Beer", "Cider"]

let finalList2 = [...snacks, ...fruit, ...drinks]
console.log(finalList2)