
// Setup of the Objects

let fullOrder = {// shorthand for let variableName = Object()
    crust: "new-haven",
    toppings: [],
    border : "Regular",
}; 

let prices = {
    "crusts": {
        "New Haven":10,
        "St. Louis":10,
        "Neapolitan":10,
        "New York":10,
        "Double Dough":15,
        "Sicilian":15,
        "Chicago Deep-Dish":15,
        "Focaccia":15,
        "Gluten-Free":13,
        "Vegan-Friendly":13
    },
    "toppings": {
        "ham":5,
        "sausage":5,
        "pepperoni":5,
        "bacon-cubes":5,
        "anchovy":5,
        "tomato":2,
        "onion":2,
        "fresh-basil":2,
        "fresh-garlic":2,
        "black-olives":2,
        "extra-cheese":3,
        "mushrooms":3,
        "pineapple":3
    },
    "borders" : {
        "-- Please choose one --": 0,
        "Regular":1,
        "Brushed With Olive Oil":2,
        "Brushed With Butter":2,
        "Provolone Cheese":3,
        "Catupiry Cheese":3,
        "Cream Cheese":3,
    }
};

// Setup Variables
let price = document.getElementById("price-value");
let chosenCrust = fullOrder["crust"];
let chosenToppings = fullOrder["toppings"];
let chosenBorder = fullOrder["border"];
let crustPrices = prices["crusts"];
let toppingsPrices = prices["toppings"];
let borderPrices = prices["borders"];
let totalToppins = 0;
let orderTotal = 0;


// Setup of the listeners
let crustsObject = document.getElementsByName("crust");
for (let eachCrust of crustsObject.values()) {
    document.getElementById(eachCrust.id).addEventListener("click", getOrder); // Event handler onclick
};

let toppingsObject = document.getElementsByName("topping")
for (let eachTopping of toppingsObject.values()) {
    document.getElementById(eachTopping.id).addEventListener("click", getOrder); // Event handler onclick
};

let border = document.getElementById("dropdown");
document.getElementById("dropdown").addEventListener("change", getOrder); // Event handler onchange

let pizzaQuantity = document.getElementById("quantity");
document.getElementById("quantity").addEventListener("change", getOrder); // Event handler onchange



// Function that calculates the value of the order and updates the price
function calcOrder() {
    let totalPizzas = pizzaQuantity.value;
    orderTotal = 0;

    console.log();
    

    orderTotal += crustPrices[chosenCrust];
    orderTotal += borderPrices[chosenBorder]
    for (count = 0; count < chosenToppings.length; count++) {
        orderTotal += toppingsPrices[chosenToppings[count]];
    };

    if (totalPizzas === "") {
        totalPizzas = 1;
        orderTotal *= totalPizzas
        console.log(totalPizzas);
        
    } else {
        orderTotal *= totalPizzas
        console.log(totalPizzas);
    };

    price.innerHTML = `\$${orderTotal}.00`
};

// Function that get the order...
function getOrder(){
for (let checkedCrust of crustsObject.values()) {
    if (checkedCrust.checked) {
        chosenCrust = checkedCrust.value;
    };
};

for (let checkedTopping of toppingsObject.values()) {
    if (checkedTopping.checked) {
        if (!chosenToppings.includes(checkedTopping.id)) {
            chosenToppings.push(checkedTopping.id)
        };
    } else if (!checkedTopping.checked) {
        for (count = 0; count < chosenToppings.length; count++) {
            if (chosenToppings[count] === checkedTopping.id) {
                chosenToppings.splice(count, 1);
            };
        };
    };
};
chosenBorder = border.options[border.selectedIndex].text;


console.log(fullOrder);

calcOrder()



};