// ==UserScript==
// @name        Avenue-Auto-login-part-2
// @namespace   avenue
// @include     https://cap.mcmaster.ca/mcauth/login.jsp?app_id=702&app_name=McMaster%20e-Learning
// @version     1
// @grant       none
// ==/UserScript==

document.addEventListener("DOMContentLoaded", function(event) { 
  console.log("loaded");
  setTimeout(function() {
    $('#submit').click();
  }, 500);
//   var a = document.getElementById('submit')
//   a.click();
});


// document.getElementById('my-link')