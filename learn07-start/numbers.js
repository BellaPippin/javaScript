function choose(){

    let answer = window.prompt("Type 'RED', 'GREEN', or 'BLUE'");

    switch (answer) {
        case "RED": 
            alert('You typed RED');
            break;
        case "GREEN":
            alert('You typed GREEN');
            break;
        case "BLUE":
            alert('You typed BLUE');
            break;
        default:
            alert('What just happened??');
            break;
    }

};

function ternary(){

    let option = window.confirm('Click OK, or click CANCEL!')
    
    let response = option ? "You pressed OK!" : "Looks like you didn't press OK"

    alert(response);
}

function start() {

    // print your name to the name heading
    document.getElementById("name").innerHTML = "Maria B Cosenza"
        /*
            read/watch the associated reference and complete the directions in the comments.

        */

    /* JS Numbers: https://www.w3schools.com/js/js_numbers.asp
        We will focus on the things with numbers that are significantly
        different than python. Please read the page linked to above before 
        completing the following:
    */

    /* Write a line of code demonstrating what will happen if 
       you try to add a number and a string. Print to the add paragraph to 
       display both the equation and the results. 
    */

    let x = "4"
    let y = 2

    let combined = x + y 

    document.getElementById('add').innerHTML = "Adding x = '4' and y = 2 is...  " + combined

    /*
        JS Number Methods: https://www.w3schools.com/js/js_number_methods.asp
    */

    // Demonstrate the use of toString() and print to the to-string paragraph

    let a = "12345"


    document.getElementById('to-string').innerHTML = `${a.toString()} is now a string!`

    // Demonstrate the use of toExponential() and print to the exponent paragraph

    let exp = 678910

    document.getElementById('exponent').innerHTML = `${exp} becomes ${exp.toExponential(2)}.`

    // Demonstrate the use of toFixed() and print to the fixed paragraph

    let stockPrice = 4.5968457

    document.getElementById('fixed').innerHTML = `${stockPrice} becomes ${stockPrice.toFixed(2)}`


    // Demonstrate the use of toPrecision() and print to the precision paragraph

    let precise = 3.00388439

    document.getElementById('precision').innerHTML = `${precise} becomes ${precise.toPrecision(3)}`

    // Demonstrate the use of parseFloat() and print to the float paragraph

    let sodaPrice = "2"

    document.getElementById('float').innerHTML = `${sodaPrice} becomes ${parseFloat(sodaPrice).toFixed(2)}`


    // Demonstrate the use of parseInt() and print to the int paragraph

    let someFloat = 4.5869

    document.getElementById('int').innerHTML = `${someFloat} becomes ${parseInt(someFloat)}`



    // Watch Simple Comparisons: https://www.linkedin.com/learning/learning-the-javascript-language-2/simple-comparisons?autoplay=true&resume=false&u=69317474

    /* In the equals paragraph explain your understanding of the difference between using == and ===  (You will probably
    need to do an additional web search to really get it.)
    */

    document.getElementById('equals').innerHTML = "The difference between the equality operator and the STRICT version of it (using three equal signs) " + 
    "is that the strict operator compares the values without first attempting to equalize the type of the elements. \nThe double equal sign will first attempt to" +
    "convert the information to the same type before comparing them, which can give inaccurate results."

    // Watch Arithmetic Operators: https://www.linkedin.com/learning/learning-the-javascript-language-2/arithmetic-operators?autoplay=true&resume=false&u=69317474
    // Watch Logical Operators: https://www.linkedin.com/learning/learning-the-javascript-language-2/logical-operators?autoplay=true&resume=false&u=69317474
    // In the logic paragraph describe the order of precedence for and / or operators

    document.getElementById('logic').innerHTML = "The order of precedence for and / or operators states that when you group several logical comparisons together, \n" +
    "the 'and' comparisons will be made first, followed by the 'or' comparisons. This is important because it can affect the result. \n" + 
    "You might have to put parenthesis to make sure the comparisons are done the way you want them to."


    // Watch Conditional If: https://www.linkedin.com/learning/learning-the-javascript-language-2/logical-operators?autoplay=true&resume=false&u=69317474
    // Watch Conditionals Switch: https://www.linkedin.com/learning/learning-the-javascript-language-2/conditionals-switch?autoplay=true&resume=false&u=69317474


    // Write code to demonstrate the use of the switch statement and display results to switch paragraph

        // See function choose() at the top ^^^^^^^^^

    document.getElementById('switch').innerHTML = "<button onclick='choose()'>Click here for a choice</button>"


    // Watch Terse ifs: https://www.linkedin.com/learning/learning-the-javascript-language-2/terse-ifs?autoAdvance=true&autoSkip=true&autoplay=true&resume=false&u=69317474
    // Watch Ternary Operator:https://www.linkedin.com/learning/learning-the-javascript-language-2/ternary-operator?autoplay=true&resume=false&u=69317474
    // Write code to demonstrate the use of the ternary operator and print to the ternary paragraph

    document.getElementById('ternary').innerHTML = "<button onclick='ternary()'>Click here for a ternary-coded choice</button>"

}