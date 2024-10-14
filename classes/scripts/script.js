class Pizza {
    constructor (toppings, size, crustType, sauceAmount, bakedLevel) {
        this.toppings = toppings;
        this.size = size;
        this.crustType = crustType;
        this.sauceAmount = sauceAmount;
        this.bakedLevel = bakedLevel
    }
    
    describePizza() {
        return `You ordered a ${this.size} pizza with ${this.crustType} crust, topped with ${this.toppings.join(", ")}.`;
    }

}

const pizza1 = new Pizza(["olives", "onion"], "large", "stuffed", "normal", "crispy");
const pizza2 = new Pizza(["pepperoni", "mushrooms"], "medium", "thin", "extra", "perfect");
const pizza3 = new Pizza(["artichoke", "spinach"], "small", "double dough", "normal", "somewhat");
const pizza4 = new Pizza(["arugula", "red onion"], "medium", "stuffed", "little", "perfect");


document.getElementById("pizza1").innerHTML = pizza1.describePizza();
document.getElementById("pizza2").innerHTML = pizza2.describePizza();
document.getElementById("pizza3").innerHTML = pizza3.describePizza();
document.getElementById("pizza4").innerHTML = pizza4.describePizza();


