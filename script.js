$(document).ready(function () {
    var today = new Date();
    var hourNow = today.getHours();
    var greeting;
  
    /*creates greeting message based on time of day*/
    if (hourNow > 18) {
      greeting = "Good evening.";
    } else if (hourNow > 12) {
      greeting = "Good afternoon.";
    } else if (hourNow > 0) {
      greeting = "Good morning.";
    } else {
      greeting = "Welcome!"
    }
    $("#greeting").text(greeting);

});
/*
// nav bar responsiveness
function myFunction() {
  var x = document.getElementById("navbar");
  if (x.className === "nav") {
    x.className += " responsive";
  } else {
    x.className = "nav";
  }
}
*/

/* navbar responsiveness */
function myFunction() {
  var x = document.getElementById("navbar");
  if (x.className === "nav") {
    x.className += " responsive";
  } else {
    x.className = "nav";
  }
}