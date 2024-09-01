// Global Variables
//  global variables are declared with var
//  local variables are declared wih let
//  
var name1 = "Meri";

const taxRate = .07; // This is a constant
// myName = "Meredith Louise Engel" - Allowed but frowned upon

function names() {

    //fix the errors
    var firstName = "Meredith",
        lastName = "Engel";
    document.getElementById("name").innerHTML = name1;
    document.getElementById("full-name").innerHTML = firstName + " " + lastName;
    var firstName = "Doctor";
    var name = "Beba";
    document.getElementById("first").innerHTML = name;
    document.getElementById("nick-name").innerHTML = firstName;

}

function scope() {
    //fix the errors
    var firstName = "Meredith",
        lastName = "Engel";
    document.getElementById("global").innerHTML = name1;
    document.getElementById("local").innerHTML = firstName;
    document.getElementById("tax").innerHTML = taxRate;
    taxRateNew = .08
    document.getElementById("new-tax").innerHTML = taxRateNew;
}


function letMe() {
    // Fix the errors
    let dog1 = "Ollie";
    let dog2 = "Nessie";
    //dog2 = "Nessie";
    let dog3 = "Paisley";
    //var dog2;
    document.getElementById("dog1").innerHTML = dog1;
    document.getElementById("dog2").innerHTML = dog2;
    document.getElementById("dog3").innerHTML = dog3;
    dog3 = "New DOG!"
    document.getElementById("dog1-2").innerHTML = dog3;
}



function constants() {
    // fix the errors
    const PI = 3.14;
    const dogs = ["Ollie", "Nessie", "Ory"];
    document.getElementById("doggos").innerHTML = dogs;
    dogs[0] = "Ollie Bear";
    let breeds = ["Shepherd", "Collie", "Bouvier"];
    document.getElementById("pi").innerHTML = PI;
    document.getElementById("new-doggos").innerHTML = dogs;
    document.getElementById("breeds").innerHTML = breeds;
}



function myMath() {
    // create statements demonstrating the use of each operator
    
        // Addition
        let addition = 8 + 3;
        document.getElementById("addition").innerHTML = "8 + 3 = " + addition;
    
        // Subtraction
        let subtraction = 9 - 4;
        document.getElementById("subtraction").innerHTML = "9 - 4 = " + subtraction;
    
        // Multiplication
        let multiplication = 7 * 6;
        document.getElementById("multiplication").innerHTML = "7 * 6 = " + multiplication;
    
        // Exponentiation
        let exponent = 2 ** 3;
        document.getElementById("exponent").innerHTML = "2 ^ 3 = " + exponent;
    
        // Division
        let division = 15 / 3;
        document.getElementById("division").innerHTML = "15 / 3 = " + division;
    
        // Modulus
        let modulus = 10 % 4;
        document.getElementById("modulus").innerHTML = "10 % 4 = " + modulus;
    
        // Increment 
        let increment = 5;
        increment++;
        document.getElementById("increment").innerHTML = "Incremented value of 5 = " + increment;
    
        // Decrement
        let decrement = 8;
        decrement--;
        document.getElementById("decrement").innerHTML = "Decremented value of 8 = " + decrement;
    }
    




    function assignments() {
        x = 10;
        document.getElementById("equals").innerHTML = "x = 10   " + "---> " + "x = " + x;
        x += 1;
        document.getElementById("plus-equals").innerHTML = "x += 1   " + "---> " + "x = " + x;
        x -= 2;
        document.getElementById("minus-equals").innerHTML = "x -= 2   " + "---> " + "x = " + x;
        x *= 3;
        document.getElementById("times-equals").innerHTML = "x *= 3   " + "---> " + "x = " + x;
        x /= 4;
        document.getElementById("divide-equals").innerHTML = "x /= 4   " + "---> " + "x = " + x;
        x %= 3;
        document.getElementById("modulus-equals").innerHTML = "x %= 3   " + "---> " + "x = " + x;
    }
    



function dataTypes() {
    // create samples of each of the data types from the
    // index page and display them in the Data Types section
    const fruits = ["apple", "banana", "orange", "strawberry"]
    document.getElementById("array").innerHTML = fruits;
    const being = {animal : "cat", type : "mammal", legs : "4"}

    being.color = "black"; //add a property

    document.getElementById("object").innerHTML = being;

    

}
