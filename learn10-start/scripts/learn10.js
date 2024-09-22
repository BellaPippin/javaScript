function start() {
    // Math: https://www.w3schools.com/js/js_math.asp
    // Demonstrate the use of round, ceil, floor, trunc, sign
    // pow, min, and random and display to the appropriate paragraphs

    const someNumber = 123456.789

    document.getElementById('round').innerHTML = Math.round(someNumber);

    document.getElementById('ceil').innerHTML = Math.ceil(someNumber);

    document.getElementById('floor').innerHTML = Math.floor(someNumber);

    document.getElementById('trunc').innerHTML = Math.trunc(someNumber);

    document.getElementById('sign').innerHTML = Math.sign(someNumber);

    document.getElementById('pow').innerHTML = Math.pow(someNumber, 5);

    document.getElementById('min').innerHTML = Math.min(someNumber, 10, 9999999999);

    document.getElementById('random').innerHTML = Math.random();

    // Random: https://www.w3schools.com/js/js_random.asp
    // create a random integer between 1 and 100 and display in the random2 paragraph

    document.getElementById('random2').innerHTML = Math.floor(Math.random() * 101);

    // Booleans: https://www.w3schools.com/js/js_booleans.asp
    // read the reference


    // Comparisons: https://www.w3schools.com/js/js_comparisons.asp
    // demonstrate and explain the difference between == and === in the
    // comparisons paragraph

    x = 5
    y = '5'

    console.log (x == y)
    console.log (x === y)

    document.getElementById('comparisons').innerHTML = `Comparing 5 and "5" (a string) will be TRUE if we use only two equal signs,  ` +
    `but it will be FALSE if we use three equal signs. Three equal signs also compares the type of the values to one another.` +
    ` (See console for demonstration)`


    // Conditions: https://www.w3schools.com/js/js_if_else.asp
    // Read the conditions page
}