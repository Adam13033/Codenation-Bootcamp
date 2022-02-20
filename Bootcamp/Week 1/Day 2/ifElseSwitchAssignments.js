//Assignment 1

let age = ("12"); 
let location = ("UK");
if(age <= 17 && location === "UK"){
    console.log("You're too young");
}else{
    console.log('How can I help?');
}


//Assignment 2 

const pizzaToppings = toppings =>{
    switch(true){
        case (toppings === "Jalapeno"):
        case (toppings === "Pepperoni"):    
        case (toppings === "Chicken"):
            return ("These are important ingredients for my pizza.");
        case (toppings === "Ham"):
            return (`I don't mind having ${toppings} on my pizza.`);
        case (toppings === "Pineapple"):
            return (`${toppings} should not be on a pizza!`);
        default:
            return ("I dont really have an opinion!");
    }
};
console.log(pizzaToppings("Jalapeno"));


//Assignment 3 

let password = '1234567'; 
if(password.length < 8 || password.length > 11){
    console.log("Password must be between 8 and 11 characters.");
} else {
    console.log(password);
};


//Assignment 4

 let num = 18
 if(num % 3 === 0){
    console.log("This number is divisible by 3");
} else if(num % 5 === 0) {
    console.log("This number is divisible by 5");
}else{
     console.log ("This number is not divisible by 3 or 5.");
 };


 //Assignment 5 


let number = 97;

if (number % 3 === 0 && number % 5 === 0) {
console.log('Fizz Buzz');
} else if (number % 5 === 0) { 
 console.log('Buzz');
} else if (number % 3 === 0) {
     console.log('fizz');
}else{
    console.log('This number is not divisible by 3 nor 5')
}

//Assignment 6 

const isPalindrome = myPalindrome => {
return myPalindrome == myPalindrome.split('').reverse().join('');
};
console.log(isPalindrome("1001")); 

//Assignment 7

let time = 17.25;
let placeOfWork = "Codenation, Mancheter";
let townOfHome = "home in Liverpool";
    
if (time === 8 || time < 9){
    console.log(`I'm commuting to ${placeOfWork}`);
} else if (time > 9 || time < 17.30){
    console.log(`I'm currently in work at ${placeOfWork}`);
} else {
    console.log(`I'm at ${townOfHome}`);
}






