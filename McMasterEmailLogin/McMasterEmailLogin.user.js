// ==UserScript==
// @name        McMasterEmailLogin
// @namespace   avenue
// @include     https://sso.mcmaster.ca/shibboleth-idp/Authn/UserPassword
// @version     1.0
// @require    http://code.jquery.com/jquery-1.11.0.min.js
// @grant       none
// ==/UserScript==

$(document).ready(function(){
  $('#agree').click();
  setTimeout(
   function(){
     $('#login').click();
   },
   500
  )
});