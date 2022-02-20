//Assignment 1 

const factorial = (n) => {
  if ((n === 0) || (n === 1)){
    return 1;
  } else {
    return (n* factorial(n-1))
  }
} 
console.log(factorial(33))



//Assignment 2 
let order = 0;

const takeOrder = (toppings1, toppings2) => {
  console.log(`Pizza with ${toppings1} & ${toppings2}`);
  order++;
  console.log(`Order count = ${order}`)
}
takeOrder ("Cheese", "chicken");
takeOrder ("", "");


//Assignment 3 
let pin = " "
let availableBalance = 30000;

const cashMachine = (pin, withdrawal) => {
    let currentBal = (availableBalance - withdrawal);
    const myPin = 1234;
        if (pin === myPin){
            console.log("Correct, what services do you require?");
        } else {
            console.log("Incorrect pin entry");
            return;
        }
        if(pin === myPin && withdrawal <= availableBalance){
            console.log(`Successful withdrawal. Your available balance is now ${currentBal}`);
        } else {
            console.log(`Insufficient funds. Your available balance is ${availableBalance}.`);
        }
    };
    cashMachine(1234, 40000);
    cashMachine(1234, 1000);
    cashMachine(1235, 4000)



