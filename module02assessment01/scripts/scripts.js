
// Declare global variables for totals
let drinksTotal = 0;
let sandwichTotal = 0;
let dessertTotal = 0;


// Call updateName when customer enters their name into the text area
document.getElementById('name').addEventListener('input', updateName);

// Get customer's name from text area and use it where appropriate

function updateName(){

    // Get customer's name
    let customer = document.getElementById("name").value;

    // Show name where appropriate
    document.getElementById('includeCustomerName').textContent = `Order Summary for ${customer}`;


}

// Getting drinks subtotal

document.getElementById('coke').addEventListener('input', calculateDrinks);
document.getElementById('water').addEventListener('input', calculateDrinks);
document.getElementById('applejuice').addEventListener('input', calculateDrinks);
document.getElementById('tea').addEventListener('input', calculateDrinks);
document.getElementById('coffee').addEventListener('input', calculateDrinks);


function calculateDrinks(){

    // Declare drink prices

    const cokePrice = 2.0
    const waterPrice = 1.0
    const appleJuicePrice = 3.0
    const teaPrice = 2.5
    const coffeePrice = 3.5

    // Get item amounts

    let cokeAmount = parseInt(document.getElementById("coke").value)
    let waterAmount = parseInt(document.getElementById("water").value)
    let appleJuiceAmount = parseInt(document.getElementById("applejuice").value)
    let teaAmount = parseInt(document.getElementById("tea").value)
    let coffeeAmount = parseInt(document.getElementById("coffee").value)

    // Get subtotals for section

    let cokeSubtotal = cokeAmount * cokePrice
    let waterSubtotal = waterAmount * waterPrice
    let appleJuiceSubtotal = appleJuiceAmount * appleJuicePrice
    let teaSubtotal = teaAmount * teaPrice
    let coffeeSubtotal = coffeeAmount * coffeePrice

    // Clear all summaries
    document.getElementById('cokeSummary').innerHTML = "";
    document.getElementById('waterSummary').innerHTML = "";
    document.getElementById('appleJuiceSummary').innerHTML = "";
    document.getElementById('teaSummary').innerHTML = "";
    document.getElementById('coffeeSummary').innerHTML = "";

    // Display summaries when they are greater than zero

    if (cokeSubtotal > 0){

        document.getElementById('cokeSummary').innerHTML = "Coke x " + cokeAmount + " @ " + " $" + cokePrice + "/ea = " + "$" + cokeSubtotal
    }

    if (waterSubtotal > 0){

        document.getElementById('waterSummary').innerHTML = "Water x " + waterAmount + " @ " + " $" + waterPrice + "/ea = " + "$" + waterSubtotal
    }

    if (appleJuiceSubtotal > 0){
        
        document.getElementById('appleJuiceSummary').innerHTML = "Apple Juice x " + appleJuiceAmount + " @ " + " $" + appleJuicePrice + "/ea = " + "$" + appleJuiceSubtotal
    }

    if (teaSubtotal > 0){
        
        document.getElementById('teaSummary').innerHTML = "Tea x " + teaAmount + " @ " + " $" + teaPrice + "/ea = " + "$" + teaSubtotal
    }

    if (coffeeSubtotal > 0){
        
        document.getElementById('coffeeSummary').innerHTML = "Coffee x " + coffeeAmount + " @ " + " $" + coffeePrice + "/ea = " + "$" + coffeeSubtotal
    }


    // Calculate drink totals

    drinksTotal = cokeSubtotal + waterSubtotal + appleJuiceSubtotal + teaSubtotal + coffeeSubtotal

    // Clear totals for when they return to zero

    document.getElementById('drinksTotal').innerHTML = "";

    // Display drink totals

    if (drinksTotal > 0){

        document.getElementById('drinksTotal').innerHTML = "Drinks Total: " + "$" + drinksTotal
    }

    updateGrandTotal();

}

// Getting sandwiches subtotal

document.getElementById('hamburger').addEventListener('input', calculateSandwiches);
document.getElementById('hotdog').addEventListener('input', calculateSandwiches);
document.getElementById('grilledCheese').addEventListener('input', calculateSandwiches);
document.getElementById('bltSandwich').addEventListener('input', calculateSandwiches);
document.getElementById('veggieWrap').addEventListener('input', calculateSandwiches);


function calculateSandwiches(){

    // Declare sandwiches prices

    const hamburgerPrice = 5.0
    const hotdogPrice = 4.0
    const grilledCheesePrice = 4.5
    const bltSandwichPrice = 6.0
    const veggieWrapPrice = 5.5

    // Get item amounts

    let hamburgerAmount = parseInt(document.getElementById("hamburger").value)
    let hotdogAmount = parseInt(document.getElementById("hotdog").value)
    let grilledCheeseAmount = parseInt(document.getElementById("grilledCheese").value)
    let bltSandwichAmount = parseInt(document.getElementById("bltSandwich").value)
    let veggieWrapAmount = parseInt(document.getElementById("veggieWrap").value)

    // Get subtotals for section

    let hamburgerSubtotal = hamburgerAmount * hamburgerPrice
    let hotdogSubtotal = hotdogAmount * hotdogPrice
    let grilledCheeseSubtotal = grilledCheeseAmount * grilledCheesePrice
    let bltSandwichSubtotal = bltSandwichAmount * bltSandwichPrice
    let veggieWrapSubtotal = veggieWrapAmount * veggieWrapPrice

    // Clear all summaries
    document.getElementById('hamburgerSummary').innerHTML = "";
    document.getElementById('hotdogSummary').innerHTML = "";
    document.getElementById('grilledCheeseSummary').innerHTML = "";
    document.getElementById('bltSandwichSummary').innerHTML = "";
    document.getElementById('veggieWrapSummary').innerHTML = "";

    // Display summaries when they are greater than zero

    if (hamburgerSubtotal > 0){

        document.getElementById('hamburgerSummary').innerHTML = "Hamburger x " + hamburgerAmount + " @ " + " $" + hamburgerPrice + "/ea = " + "$" + hamburgerSubtotal
    }

    if (hotdogSubtotal > 0){

        document.getElementById('hotdogSummary').innerHTML = "Hotdog x " + hotdogAmount + " @ " + " $" + hotdogPrice + "/ea = " + "$" + hotdogSubtotal
    }

    if (grilledCheeseSubtotal > 0){
        
        document.getElementById('grilledCheeseSummary').innerHTML = "Grilled Cheese x " + grilledCheeseAmount + " @ " + " $" + grilledCheesePrice + "/ea = " + "$" + grilledCheeseSubtotal
    }

    if (bltSandwichSubtotal > 0){
        
        document.getElementById('bltSandwichSummary').innerHTML = "BLT Sandwich x " + bltSandwichAmount + " @ " + " $" + bltSandwichPrice + "/ea = " + "$" + bltSandwichSubtotal
    }

    if (veggieWrapSubtotal > 0){
        
        document.getElementById('veggieWrapSummary').innerHTML = "Veggie Wrap x " + veggieWrapAmount + " @ " + " $" + veggieWrapPrice + "/ea = " + "$" + veggieWrapSubtotal
    }


    // Calculate Sandwiches totals

    sandwichTotal = hamburgerSubtotal + hotdogSubtotal + grilledCheeseSubtotal + bltSandwichSubtotal + veggieWrapSubtotal

    // Clear totals for when they return to zero

    document.getElementById('sandwichTotal').innerHTML = "";

    // Display Sandwiches totals

    if (sandwichTotal > 0){

        document.getElementById('sandwichTotal').innerHTML = "Sandwiches Total: " + "$" + sandwichTotal
    }

    updateGrandTotal();

}

// Getting Dessert/Sides subtotal

document.getElementById('fries').addEventListener('input', calculateDesserts);
document.getElementById('onionRings').addEventListener('input', calculateDesserts);
document.getElementById('iceCream').addEventListener('input', calculateDesserts);
document.getElementById('chocoCake').addEventListener('input', calculateDesserts);
document.getElementById('cookie').addEventListener('input', calculateDesserts);


function calculateDesserts(){

    // Declare Dessert/Sides prices

    const friesPrice = 2.5
    const onionRingsPrice = 3.0
    const iceCreamPrice = 3.5
    const chocoCakePrice = 4.5
    const cookiePrice = 1.5

    // Get item amounts

    let friesAmount = parseInt(document.getElementById("fries").value)
    let onionRingsAmount = parseInt(document.getElementById("onionRings").value)
    let iceCreamAmount = parseInt(document.getElementById("iceCream").value)
    let chocoCakeAmount = parseInt(document.getElementById("chocoCake").value)
    let cookieAmount = parseInt(document.getElementById("cookie").value)

    // Get subtotals for section

    let friesSubtotal = friesAmount * friesPrice
    let onionRingsSubtotal = onionRingsAmount * onionRingsPrice
    let iceCreamSubtotal = iceCreamAmount * iceCreamPrice
    let chocoCakeSubtotal = chocoCakeAmount * chocoCakePrice
    let cookieSubtotal = cookieAmount * cookiePrice

    // Clear all summaries
    document.getElementById('friesSummary').innerHTML = "";
    document.getElementById('onionRingsSummary').innerHTML = "";
    document.getElementById('iceCreamSummary').innerHTML = "";
    document.getElementById('chocoCakeSummary').innerHTML = "";
    document.getElementById('cookieSummary').innerHTML = "";

    // Display summaries when they are greater than zero

    if (friesSubtotal > 0){

        document.getElementById('friesSummary').innerHTML = "Fries x " + friesAmount + " @ " + " $" + friesPrice + "/ea = " + "$" + friesSubtotal
    }

    if (onionRingsSubtotal > 0){

        document.getElementById('onionRingsSummary').innerHTML = "Onion Rings x " + onionRingsAmount + " @ " + " $" + onionRingsPrice + "/ea = " + "$" + onionRingsSubtotal
    }

    if (iceCreamSubtotal > 0){
        
        document.getElementById('iceCreamSummary').innerHTML = "Ice Cream x " + iceCreamAmount + " @ " + " $" + iceCreamPrice + "/ea = " + "$" + iceCreamSubtotal
    }

    if (chocoCakeSubtotal > 0){
        
        document.getElementById('chocoCakeSummary').innerHTML = "Chocolate Cake x " + chocoCakeAmount + " @ " + " $" + chocoCakePrice + "/ea = " + "$" + chocoCakeSubtotal
    }

    if (cookieSubtotal > 0){
        
        document.getElementById('cookieSummary').innerHTML = "Cookie x " + cookieAmount + " @ " + " $" + cookiePrice + "/ea = " + "$" + cookieSubtotal
    }


    // Calculate Dessert/Sides totals

    dessertTotal = friesSubtotal + onionRingsSubtotal + iceCreamSubtotal + chocoCakeSubtotal + cookieSubtotal

    // Clear totals for when they return to zero

    document.getElementById('dessertTotal').innerHTML = "";

    // Display Dessert/Sides totals

    if (dessertTotal > 0){

        document.getElementById('dessertTotal').innerHTML = "Dessert/Sides Total: " + "$" + dessertTotal
    }

    updateGrandTotal();

}

// Function to calculate and display the grand total

function updateGrandTotal() {

    let grandTotal = drinksTotal + sandwichTotal + dessertTotal;

    document.getElementById('grandTotal').innerHTML = "Grand Total: $" + grandTotal;
}