// Display holidays of the year depending on the month 

var months = ["January", "February", "March", "April", "May", "June", 
    "July", "August", "September", "October", "November", "December"];

for (let i = 0; i < months.length; i++) {
let month = months[i];  
document.getElementById("holidays").innerHTML += "<h2>" + month + "</h2>";


switch (month) {
case "January":
  document.getElementById("holidays").innerHTML += "<p>New Year's Day</p>";
  document.getElementById("holidays").innerHTML += "<p>Martin Luther King Jr. Day</p>";
  break;
case "February":
  document.getElementById("holidays").innerHTML += "<p>Presidents' Day</p>";
  document.getElementById("holidays").innerHTML += "<p>Valentine's Day</p>";
  break;
case "March":
  document.getElementById("holidays").innerHTML += "<p>St. Patrick's Day</p>";
  document.getElementById("holidays").innerHTML += "<p>Women's History Month</p>";
  break;
case "April":
document.getElementById("holidays").innerHTML += "<p>Easter</p>";
document.getElementById("holidays").innerHTML += "<p>Earth Day</p>";
break;
case "May":
document.getElementById("holidays").innerHTML += "<p>Memorial Day</p>";
document.getElementById("holidays").innerHTML += "<p>Mother's Day</p>";
break;
case "June":
document.getElementById("holidays").innerHTML += "<p>Juneteenth</p>";
document.getElementById("holidays").innerHTML += "<p>My Birthday. ;) </p>";
break;
case "July":
document.getElementById("holidays").innerHTML += "<p>Independence Day</p>";
document.getElementById("holidays").innerHTML += "<p>Bastille Day</p>";
break;
case "August":
document.getElementById("holidays").innerHTML += "<p>Women's Equality Day</p>";
document.getElementById("holidays").innerHTML += "<p>Women's History Month</p>";
break;
case "September":
document.getElementById("holidays").innerHTML += "<p>Labor Day</p>";
document.getElementById("holidays").innerHTML += "<p>Patriot Day</p>";
break;
case "October":
document.getElementById("holidays").innerHTML += "<p>Columbus Day</p>";
document.getElementById("holidays").innerHTML += "<p>Halloween</p>";
break;
case "November":
document.getElementById("holidays").innerHTML += "<p>Veterans Day</p>";
document.getElementById("holidays").innerHTML += "<p>Thanksgiving</p>";
break;
case "December":
document.getElementById("holidays").innerHTML += "<p>Christmas</p>";
document.getElementById("holidays").innerHTML += "<p>Hanukkah</p>";
break;
default:
  document.getElementById("holidays").innerHTML += "<p>No holidays available</p>";
  break;
}
}


