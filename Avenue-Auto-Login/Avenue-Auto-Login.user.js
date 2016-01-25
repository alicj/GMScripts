// ==UserScript==
// @name        Avenue-Auto-Login-Part-1
// @namespace   avenue
// @include     http://avenue.mcmaster.ca/
// @include     http://avenue.mcmaster.ca/#
// @include     https://cap.mcmaster.ca/mcauth/login.jsp?app_id=702&app_name=McMaster%20e-Learning
// @include 	https://cap.mcmaster.ca/mcauth/login.jsp?app_id=702&app_name=Avenue
// @version     1.0
// @grant       none

// WARNING: DO NOT IMPORT JQUERY INTO THIS SCRIPT
// IT WILL CAUSE PROBLEM ON THE LOG IN PAGE

// @description
// We all know that, universities give shit about their website/UX
// (Well, in this case, Desire2Learn gives the same thing about UX too)
// So for example, every time I want to log in to AvenueToLearn
// I have to click twice, once to click on log in to get that pop up
// window open. Honestly, it is not 1990s, who the heck still use pop up?
// then click on submit to actually log in
// So I create this little script to do these for me
// Why do it yourself when you can let your computer do the task?
// ==/UserScript==

// I used firefox to remember and fill in my MACID and password for me
// If you don't have that, you can use the following line to fill them in
// by replacing whatever is in <> by your actually information
// though I highly do not recommand this,
// as your information may be leaked easily
// PS: If you fill those in, there is no way I can 'send' them to me in this script
// PS2: horrible naming on their input fields, btw.

document.addEventListener("DOMContentLoaded", function(event) {

	// get current url
	curURL = document.URL;
	// if is the avenue page
	if (curURL.contains('http://avenue.mcmaster.ca/')){
		// get onclick content
		var button = document.getElementById("login_button");
		var clickText = button.attributes['onclick'].value;
		// get pop up url
		var url = clickText.split("'")[1];
		// replace with log in page
		document.location.replace(url);
	} else {
		// otherwise it is the login page, log in!
		// $('#user_id').val('<MACID>');
	   	// $('#pin').val('<password>');
		setTimeout(function() {
			$('#submit').click();
		}, 100); // set to 100 just in case, can increase or decrease
	}
});
