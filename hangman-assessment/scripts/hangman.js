// declare and initialize array
let game = ["CAT", "DOG", "BIRD", "FISH", "HORSE", "FROG", "MOUSE", "BAT", "COW", "WOLF"];
let choice = Math.floor(Math.random() * 10);
let answer = game[choice];
let myLength = answer.length;
let display = [myLength];
let win = myLength;
let letters = answer.split('');
let attemptsLeft = 6;
let output = '';
let userLetter = '';
let usedLetters = [];
let imageNumber = 1

// game setup works fine --steffen
function setup() {
    alert(answer);
    for (let i = 0; i < answer.length; i++) {
        display[i] = "_ ";
        output = output + display[i];
    }
    document.getElementById("word").innerHTML = output;

    // Display image dinamically using the last digit as a variable:

    
    document.getElementById('hangman').innerHTML = `<img src="images/0${imageNumber}.png" alt="Hangman Image" id="hangman"></img>`
}



// Issue below here
// noticed if we uncomment below it reveals all letter for the hangman


document.getElementById("submit").addEventListener("click", function(event){

    event.preventDefault();
    output = '';
    userLetter = document.getElementById("guess").value;
    document.getElementById("guess").value = ''; //would this reset value to null

    // Push the userLetter into the used letter array, then display it.

    usedLetters.push(userLetter.toUpperCase())
    document.getElementById('guessed').innerHTML = `Letters used: ${usedLetters}`;
    
    

    for (let c = 0; c < answer.length; c++) {
        //alert(letters[c]);
        if (userLetter.toUpperCase() == letters[c]) {
            display[c] = userLetter.toUpperCase();
            win--;
        }

        output = output + display[c] + ' ';
    }
    
    
    document.getElementById("word").innerHTML = output;
    output = '';
    attemptsLeft--;
    imageNumber++;
    //console.log(imageNumber)
    document.getElementById('hangman').innerHTML = `<img src="images/0${imageNumber}.png" alt="Hangman Image" id="hangman"></img>`

    if (win < 1) {
        document.getElementById("guesses").innerHTML = 'YOU WIN!!!';
    } else if (attemptsLeft < 1) {
        document.getElementById("guesses") = 'YOU LOSE!!!';
    } else {
        document.getElementById("guesses").innerHTML = 'You have ' + attemptsLeft + ' guesses left';
    }
});


//scirpt connected fine somereason the button and the script are not registering.