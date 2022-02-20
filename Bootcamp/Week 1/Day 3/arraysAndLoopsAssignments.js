//Assignment 1

let favefilms = ['movie 1', 'movie 2','movie 3','movie 4','movie 5'];
favefilms.push('movie 6', 'movie 7')
console.log(favefilms);

for (let i = 0; i < favefilms.length; i++) {
    console.log(favefilms[i]);
};


//Assignment 2 

for (let i = 0; i < 6; i++) {
  console.log(Math.floor(Math.random() * 50))
}

//Assignment 3
let countdown=[];
for (let i = 9; i >= 0; i--){
        countdown.push(i);
    }
console.log(`9-0 countdown is : ${countdown}.`);

//Assignment 4

let myFilms = [
    "Avengers",
    "Spiderman",
    "Ghostbusters"
];

for(let i = 0; i < 1; i++){
    if(myFilms[2] === "Ghostbusters"){
        console.log("Yay it's Ghostbusters!");
        } else {
            console.log("Boo! We want Ghostbusters!");
        }
    };


//Assignment 5

for (let i = 0; i < 6; i++) { //Setting how many times we're looping 
    const number = Math.round(Math.random() * 30); //Setting our randomizer 
    
    if (number % 7 === 0) { // modulo % 7 = 0 indicates that it's divisible by 7, making this our conditional statement. 
      console.log(`${number}its divisible`);  
    } else {
      console.log(`${number} its not divisible `);
    }
  };


  //Assignment 6

let hannahsFollowers = ['Adam', ' Gary', ' Sam', ' Theo'];
let bobsFollowers = ['Adam', ' Sam', ' Gary', ' Peter'];
let mutualFollowers = [];

for (let i = 0; i < hannahsFollowers.length; i++) {
  for (let j = 0 ; j < bobsFollowers.length; j++) {
    if (hannahsFollowers[i] === bobsFollowers[j]) {
      mutualFollowers.push(bobsFollowers[j]);
    }
  }
};
console.log('Your mutual followers are ' + mutualFollowers);

//Assignment 7 

/* The key differences between the 3 loop types (while, do while and for) would be the confines of each, as well as the circumstance at hand.

An example is as follows:

A 'while' loop repeats a specific block of code x amount of times until a condition is met. This is ideal when we don't know how many times we're required to iterate, so instead we simply state until our condition is met, loop through. 

'do while' is a control flow statement, providing a specific action while a certain condition is present, or is yet to be met. The block of code will be executed at least one time and then becomes conditional based on the boolean conditions return (true or false).
If required, code could be adjusted to repetedly execute the block until our required condition is met. 

'for' loops are again control flow statements for specified iteration.  Where I mentioned earlier in 'while' loops being beneficial in circumstances iteration parameters are unknown, the 'for' loop would have the opposite use case in that instance. A 'for' loop is useful when iteration requirements are know, i.e loop 5 times as opposed to a 'while' loop where a user may input incorrect information several times, making this an uncontrolled variable (user input end) which could scope beyond the 'for' loops specified iteration of 5. */




