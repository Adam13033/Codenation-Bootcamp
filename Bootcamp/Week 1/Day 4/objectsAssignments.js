//Assignment 1 (PM)

const person = {
    name: "Adam",
    age: 27,
    favoriteSongs: [
        "songA",
        "songB",
        "songC"
    ],
    sayHi(){
        if(this.name){
            return `Hello, my name is ${this.name}`
        }
    },
    bye(){
        return `Goodbye ${this.name}`
    }
};

console.log(person.sayHi());

//Assignment 2 (PM)

    const pet = {
        name: "Theo",
        species: "Dog",
        age: 7,
        colour: "Black and tan",
        hungry: false,
        thirsty: true,

        eat(){
            if(this.hungry === true){
                return `${this.name} is eating.`;
            } else {
                return `${this.name} isn't eating.`;
            }
        },
        drink() {
            if (this.thirsty === true){
                return `${this.name} is drinking.`;
            } else {
                return `${this.name} isn't drinking.`;
            }
        },
    }
    console.log(pet.eat())
    console.log(pet.drink())

//Assignment 3

const coffeeShop = {
    drinksWithPrices: 

    [
        {
            name: "coffee",
            price: 2.50
        },
        {
            name: "latte",
            price: 3.00
        },
        {
            name: "hot chocolate",
            price: 3.50,
        },

    ],
    foodWithPrices: 
    [
        { 
            name: "Burger",
            price: 3.00,
        }, 
        {
            name: "Sandwich",
            price: 2.50,
        },
        {
            name: "Crisps", 
            price: 1.00,
        },
    ],
}

const getTotal = (coffeeShop) => {
    const foodPrices = coffeeShop.foodWithPrices.map(item => item.price);
    const foodTotal = foodPrices.reduce((acc, item) => (acc + item), 0);
    const items = coffeeShop.foodWithPrices.map((item) => `${item.name}: £${item.price}`);
    

    const drinkPrice = coffeeShop.drinksWithPrices.map(drinktot => drinktot.price);
    const drinkTotal = drinkPrice.reduce((acc, drinktot) => (acc + drinktot), 0);
    const drinks = coffeeShop.drinksWithPrices.map((drinktot) => `${drinktot.name}: £${drinktot.price}`);

    const total = foodTotal + drinkTotal; 
    let orderTotal = ':\n'; 
    orderTotal += '\nFood:\n'
    orderTotal += items.join('\n');
    orderTotal += '\n\nDrinks:\n'
    orderTotal += drinks.join('\n');
    orderTotal += `\n\n\nTotal: £${total}`;
    return `Your total order is ${orderTotal}`;
 


}
console.log(getTotal(coffeeShop))