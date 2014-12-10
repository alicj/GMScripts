// ==UserScript==
// @name       Scotialbank Canadian IQ - Play Again
// @namespace  http://use.i.E.your.homepage/
// @version    0.1
// @description  enter something useful
// @match      http://www.fundyourfuture.ca/canadianIQ/Results.aspx
// @copyright  2012+, You
// @require    http://code.jquery.com/jquery-1.11.0.min.js
// @grant      none 
// ==/UserScript==
$(document) .ready(function () {
  WebForm_DoPostBackWithOptions(new WebForm_PostBackOptions('ctl00$contestMain$btnPlayAnotherQuiz', '', true, '', '', false, true));
});
