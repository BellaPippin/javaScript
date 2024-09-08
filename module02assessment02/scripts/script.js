// Module 02 Assessment 02

    const burger = {
        name : "Burger",
        price : "5.75",
        image : "images/burger.png",
        description : "A juicy, grilled beef patty served on a soft, toasted bun with fresh lettuce, ripe tomato, and crisp pickles. Topped with melted cheddar cheese and your choice of condiments, it's a classic favorite that's sure to satisfy.",
        category: "Sandwich"
    }

    const hotDog = {
        name : "Hot Dog",
        price : "4.50",
        image : "images/hotdog.png",
        description : "A plump, grilled hotdog nestled in a warm, fluffy bun. Garnished with mustard, ketchup, onions, and relish, this quintessential street food is perfect for a quick, flavorful bite.",
        category: "Sandwich"
    }

    const pizza = {
        name : "Pizza",
        price : "4.00",
        image : "images/pizza.png",
        description : "A delicious, hand-tossed pizza with a golden, crispy crust, topped with rich tomato sauce, gooey mozzarella cheese, and your choice of savory toppings. Baked to perfection for a cheesy, satisfying experience.",
        category: "Entree"
    }

    const coffee = {
        name : "Coffee",
        price : "3.00",
        image : "images/coffee.png",
        description : " A steaming cup of rich, aromatic coffee brewed from the finest beans. Enjoy its bold flavor and invigorating aroma, perfect for jump-starting your day or enjoying a relaxing moment.",
        category: "Hot Drinks"
    }

    const soda = {
        name : "Soda",
        price : "3.25",
        image : "images/soda.png",
        description : "A refreshing, carbonated beverage with a crisp, effervescent bite. Available in a variety of flavors, it's the ideal complement to any meal or a quick thirst-quencher.",
        category: "Cold Drinks"
    }

function display() {

    let html1 = `<h2> ${burger.name} </h2>` +
        `<h3>Price: ${burger.price}</h3>` +
        `<img src="${burger.image}">` +
        `<p class="description">${burger.description}</p>` +
        `<br>`+ `<h3>Category: ${burger.category}</h3>` +
        `<hr>`;

    let html2 = `<h2> ${hotDog.name} </h2>` +
        `<h3>Price: ${hotDog.price}</h3>` +
        `<img src="${hotDog.image}">` +
        `<p class="description">${hotDog.description}</p>` +
        `<br>`+ `<h3>Category: ${hotDog.category}</h3>` +
        `<hr>`;

    let html3 = `<h2> ${pizza.name} </h2>` +
        `<h3>Price: ${pizza.price}</h3>` +
        `<img src="${pizza.image}">` +
        `<p class="description">${pizza.description}</p>` +
        `<br>`+ `<h3>Category: ${pizza.category}</h3>` +
        `<hr>`;

    let html4 = `<h2> ${coffee.name} </h2>` +
        `<h3>Price: ${coffee.price}</h3>` +
        `<img src="${coffee.image}">` +
        `<p class="description">${coffee.description}</p>` +
        `<br>`+ `<h3>Category: ${coffee.category}</h3>` +
        `<hr>`;

    let html5 = `<h2> ${soda.name} </h2>` +
        `<h3>Price: ${soda.price}</h3>` +
        `<img src="${soda.image}">` +
        `<p class="description">${soda.description}</p>` +
        `<br>`+ `<h3>Category: ${soda.category}</h3>` +
        `<hr>`;

    document.getElementById('obj1').innerHTML = html1;
    document.getElementById('obj2').innerHTML = html2;
    document.getElementById('obj3').innerHTML = html3;
    document.getElementById('obj4').innerHTML = html4;
    document.getElementById('obj5').innerHTML = html5;
}


