//create programme storing name, age and fave color|

let myName = 'Adam';
let myAge = 27;
let faveColor = "Navy blue";

console.log(`Hello, my name is ${myName}. I'm ${myAge} years old and my favorite color is ${faveColor}`)


//additional, update variables and print to console.

myName = 'Peter';
myAge = 28;
faveColor = "different color";
console.log(`My name is now ${myName} and I'm now ${myAge}. My favorite color is no longer blue, it is now a ${faveColor}`);

//create program stores what you ate for breakfast and dinner logging to console.

let myBreakfast = "cup of coffee and 2 slices of toast";
let myLunch = "Sandwich"
let myDinner = "Lasagne";
console.log(`This morning I woke up at 07:00, had a ${myBreakfast} and during lunch I ate a ${myLunch}. Tonight, however, I'm thinking about eating ${myDinner}.`)


myBreakfast = "Cup of coffee";
myLunch = "2 cups of coffee and a sandwich";
myDinner = "Curry";
console.log(`I'm not sure what I'll eat tomorrow morning, I'll at least have a ${myBreakfast} and for my lunch I'll likely stay with ${myLunch}. For my dinner, I think I'll have a nice spicy ${myDinner}`);

//create programe that calculates numbers of days from today to bday. 
const daysToBday = (now, then) => {
    const dateNow = new Date(now);
    const dateThen = new Date(then);

    const oneDay = 1000 * 60 * 60 * 24; //Converts into Miliseconds 

    const timeDifference = dateThen.getTime() - dateNow.getTime();

    const difInDays = Math.round(timeDifference / oneDay);

    return difInDays;
}
const theDate = new Date();
console.log("It is ", daysToBday(theDate, "10/15/2022"), " days until my bday!")



// Assignment 3 



let x1 = "x";
let x2 = "x";
let x3 = "x";
let o1= "o";
let o2 = "o";
let space1 = " ";
let space2 = " ";
let space3 = " ";
let space4 = " ";
let space5 = " ";
let struct1 = "|";
let struct2 = "-----------";

console.log (`${space5}${struct1}${space5}${struct1}`);
console.log (`${x1}${struct1}${o1}${struct1}${space1}`);
console.log (`${space5}${struct1}${space5}${struct1}`);
console.log(`${struct2}`);
console.log (`${space5}${struct1}${space5}${struct1}`);
console.log (`${x2}${struct1}${x3}${struct1}${space2}`);
console.log (`${space5}${struct1}${space5}${struct1}`);
console.log(`${struct2}`);
console.log (`${space5}${struct1}${space5}${struct1}`);
console.log (`${o2}${struct1}${space3}${struct1}${space4}`);
console.log (`${space5}${struct1}${space5}${struct1}`);


