// ==UserScript==
// @name       Scotialbank Canadian IQ - Play Again
// @namespace  http://use.i.E.your.homepage/
// @version    0.1
// @match      http://www.fundyourfuture.ca/canadianIQ/Results.aspx
// @copyright  2012+, You
// @require    http://code.jquery.com/jquery-1.11.0.min.js
// @grant      none 

// @description  
// This was for a quiz published by Scotial Bank
// The more quizes completed, the more likely one will win $1200 worth of scholarship
// So after a few tries, I observed their quiz webpage and wrote this little script
// to answer quizes automatically.
// It will not answer the questions, but since I set up a AWS server
// I also write correct answers with questions to the database
// So instead of random guessing, my script answers questions better and better

// This is only the part that click 'next quiz' at the result page.
// It has to work with the 'Scotialbank_Canadian_IQ_-_Answer' script
// so that it will actually answer questions
// ==/UserScript==
$(document) .ready(function () {
  WebForm_DoPostBackWithOptions(new WebForm_PostBackOptions('ctl00$contestMain$btnPlayAnotherQuiz', '', true, '', '', false, true));
});
