// for loop - https://www.w3schools.com/js/js_loop_for.asp
// Write 99 bottles of beer on the wall using a for loop
// hints - decrement at the end, create a variable, save the song lyrics from
// the loop to the variable. use <br> instead of \n with the inner html. 



for (var bottlesOfBeer = 99; bottlesOfBeer >= 1; bottlesOfBeer--) {
    if (bottlesOfBeer === 1) {
        document.getElementById("beer").innerHTML += 
        bottlesOfBeer + " bottle of beer on the wall. <br>" +
        bottlesOfBeer + " bottle of beer. <br>" +
        "Take one down, pass it around, <br>" +
        "No more bottles of beer on the wall!";
    } else {
        document.getElementById("beer").innerHTML += 
        bottlesOfBeer + " bottles of beer on the wall. <br>" +
        bottlesOfBeer + " bottles of beer. <br>" +
        "Take one down, pass it around, <br>" +
        (bottlesOfBeer - 1) + " bottles of beer on the wall.<br><br>";
    }
}


//for in: https://www.w3schools.com/js/js_loop_forin.asp
// create an array of months and use the for in
// command to print them to the for-in paragraph

var monthsOfYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

for (let month in monthsOfYear) {
    document.getElementById("for-in").innerHTML += monthsOfYear[month] + "<br>";
}



// For of: https://www.w3schools.com/js/js_loop_forof.asp
// demonstrate the use of For Of to print letters from a string. 
// Create your own string variable of at least 5 letters
// print the results in the for-of paragraph

var someString = "PARACETAMOL" // lol I can't think of anything

for (letter of someString) {
    document.getElementById("for-of").innerHTML += letter + "<br>";
}


// While loop: https://www.w3schools.com/js/js_loop_while.asp
// Create a while loop to print the numbers 1 to 50
// print the results in the while paragraph

var i = 0

while (i < 51) {
    document.getElementById("while").innerHTML +=  i + "<br>";
    i++;
  }