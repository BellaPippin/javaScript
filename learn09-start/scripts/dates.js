/* JavaScript Dates: https://www.w3schools.com/js/js_dates.asp */

// Create a variable, assign it to a new date object
// display the variable in the basic paragraph

const d = new Date()

document.getElementById('basic').innerHTML = d;


// create a new date variable and load the information for today into it
// display the results in the today paragraph (Year, Month, Day)

const todayIs = new Date(2024, 8, 21)

document.getElementById('today').innerHTML = todayIs;


// Create a new date variable based on the dateString and store your birthday in it
// display the variable in the birthday paragraph

const myBirthday = new Date ('06, 30, 1989')


document.getElementById('birthday').innerHTML = myBirthday.toDateString();


// Convert your basic date to the ISO string format and display the result
// in the iso paragraph

const isoDate = new Date()


document.getElementById('iso').innerHTML = isoDate.toISOString();



//  Date Formats: https://www.w3schools.com/js/js_date_formats.asp
// Demonstrate 3 date formats of your choice to date1, date2, and date3 paragraphs

const date1 = new Date('1989-06-30');
const date2 = new Date('06/30/1989');
const date3 = new Date('Jun 30 1989');

document.getElementById('date1').innerHTML = date1;

document.getElementById('date2').innerHTML = date2;

document.getElementById('date3').innerHTML = date3;


//  getDate() Methods: https://www.w3schools.com/js/js_date_methods.asp
// Demonstrate 4 get date methods of your choice to get1-get4 paragraphs

const anotherDate1 = new Date ("1989-06-30")

document.getElementById('get1').innerHTML = anotherDate1.getFullYear();

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let month = months[anotherDate1.getMonth()];

document.getElementById('get2').innerHTML = month;

const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let day = daysOfWeek[anotherDate1.getDay()];

document.getElementById('get3').innerHTML = day;

document.getElementById('get4').innerHTML = anotherDate1.getMinutes();


// set date methods: https://www.w3schools.com/js/js_date_methods_set.asp
// Demonstrate 4 set date methods of your choice to set1-set4 paragraphs

const yetAnotherDate = new Date();

yetAnotherDate.setFullYear(1960);
yetAnotherDate.setMonth(10); 
yetAnotherDate.setDate(20);
yetAnotherDate.setHours(20);

document.getElementById('set1').innerHTML = yetAnotherDate;
document.getElementById('set2').innerHTML = yetAnotherDate;
document.getElementById('set3').innerHTML = yetAnotherDate;
document.getElementById('set4').innerHTML = yetAnotherDate;
