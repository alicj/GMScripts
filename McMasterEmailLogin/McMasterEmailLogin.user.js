// ==UserScript==
// @name        McMasterEmailLogin
// @namespace   avenue
// @include     https://sso.mcmaster.ca/shibboleth-idp/Authn/UserPassword
// @version     1.0
// @require    http://code.jquery.com/jquery-1.11.0.min.js
// @grant       none

// @description
// We all know that, universities give shit about their website/UX
// So for example, every time I want to log in to my student email
// I have to click twice, once to agree some random crap that no
// one gives a shit. Then click on log in to login
// So I create this little script to do those clicks for me
// Why do it yourself when you can let your computer do the task?
// ==/UserScript==

// I used firefox to remember and fill in my MACID and password for me
// If you don't have that, you can use the following line to fill them in
// by replacing whatever is in <> by your actually information
// though I highly do not recommand this
// As your information may be leaked easily
// PS: If you fill those in, there is no way I can 'send' them to me in this script

$(document).ready(function(){
	$('#agree').click();
	setTimeout(
		function(){
		   	// $('#username').val('<MACID>');
		   	// $('#password').val('<password>');
		   	$('#login').click();
   }, 500);
});