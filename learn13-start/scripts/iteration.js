/*
Iterables: https://www.w3schools.com/js/js_iterables.asp
Read the page
Demonstrate iteration of a list 
Create a list of movies, books, or games at least 5 items long and 
display them in the list paragraph
*/

const books = ["1984","Brave New World","Animal Farm", "Farenheit 451", "Do Androids Dream of Electric Sheep?"];

for (const book of books) {
  document.getElementById("list").innerHTML += "<p>" +book + "<p>";
}


/*
JS Sets

https://www.w3schools.com/js/js_sets.asp

Create a set with at least 5 song titles in it
display the contents of the set in the set1 paragraph (use iteration)

*/

const setOfSongs = new Set (["Smooth Criminal", "Billie Jean", "Thriller", "Beat It",  "Man In The Mirror"]);

for (const song of setOfSongs){
    document.getElementById("set1").innerHTML += "<p>" + song + "<p>";
}
// add two more songs to the set then display in the set2 paragraph

setOfSongs.add("Bad");
setOfSongs.add("Heal The World");

for (const song of setOfSongs){
    document.getElementById("set2").innerHTML += "<p>" + song + "<p>";
}


/* 
Maps
https://www.w3schools.com/js/js_maps.asp

Maps are like dictionaries in python
Create a map with five names and emails in it.
Display the contents of the map in map1 use the forEach() method (bottom of
    the reference page)
*/

const emails = new Map([
    ["Maria", "mcosenza@students.mchenry.edu"],
    ["Juan", "jnarredo@yahoo.com"],
    ["Isabella", "misschunks@yahoo.com"],
    ["Lionel", "darthboyo@gmail.com"],
    ["Selina", "selinakylecat@gmail.com"]
  ]);

  emails.forEach (function(value, key) {
    document.getElementById("map1").innerHTML += '<p>' + key + ' = ' + value + '<p>';
  })


// add two new names and emails and display in map2 use the forEach() method

emails.set("Dracula", "draculacat@yahoo.com");
emails.set("Mr. Sprinkles", "bushy-bushycat@outlook.com");

emails.forEach (function(value, key) {
    document.getElementById("map2").innerHTML += '<p>' + key + ' = ' + value + '<p>';
  })

// get and display the email of one person, display in map3

document.getElementById("map3").innerHTML += '<p> Maria\'s email: ' + emails.get("Maria") + '<p>';
