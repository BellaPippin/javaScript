// Welcome to Guess The Color, the JavaScript game. 

// Have the computer pick a color

const rightNumber = Math.floor(Math.random() * 1001);


// Display it for debugging purposes
//alert(rightNumber);

// On click: get user's guess, compare values, display results.

document.getElementById("submit").addEventListener("click", function(){
    
    // Get user's guess
    let userGuess = document.getElementById('userGuess').value;

    // Compare values and change display based on proximity to the answer.
    let difference = Math.abs(userGuess - rightNumber);

    if (difference === 0) {
        document.getElementById('body').style.backgroundColor = "green";
        document.getElementById('title').innerHTML = `GOOD GUESS!! The number was ${rightNumber}!!`;
    } else if (difference <= 10) {
        document.getElementById('body').style.backgroundColor = "red";
        document.getElementById('title').innerHTML = `Sooo HOT! You are very close!`;
    } else if (difference <= 50) {
        document.getElementById('body').style.backgroundColor = "orange";
        document.getElementById('title').innerHTML = `Ooh, getting close! It keeps getting warmer...`;
    } else if (difference <= 100) {
        document.getElementById('body').style.backgroundColor = "aqua";
        document.getElementById('title').innerHTML = `Meh.. it's cool. Kinda close.`;
    } else {
        document.getElementById('body').style.backgroundColor = "blue";
        document.getElementById('title').innerHTML = `BRRR freezing. Not even close.`;
    }

    });

