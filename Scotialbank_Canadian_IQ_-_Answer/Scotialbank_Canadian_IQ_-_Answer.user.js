// ==UserScript==
// @name       Scotialbank Canadian IQ - Answer
// @namespace  http://use.i.E.your.homepage/
// @version    0.1
// @description  enter something useful
// @match      http://www.fundyourfuture.ca/canadianIQ/Quiz.aspx
// @copyright  2012+, You
// @require    http://code.jquery.com/jquery-1.11.0.min.js
// @grant       none
// ==/UserScript==
var timeFactor = 100;
function isAnswered() {
  if ($('#contestMain_btnNext') .length > 0 || $('#contestMain_btnFinish') .length > 0) {
    return true;
  }
  return false;
}
function isCorrect() {
  if ($('#contestMain_pnlCorrect') .length > 0) {
    return true;
  } else {
    return false;
  }
}
function nextQuestion() {
  var timeInt = parseInt(Math.random() * timeFactor) ;
  //$('#contestMain_btnNext') .click();
  //$('#contestMain_btnFinish') .click();;
  setTimeout(function(){$('#contestMain_btnNext') .click()}, timeInt);
  setTimeout(function(){$('#contestMain_btnFinish') .click()}, timeInt);
}
function getQuestion() {
  return $('#contestMain_lblQuestion') .text();
}
function randomChoice() {
  var option = Math.floor(Math.random() * 4);
  if (option == 4) {
    option = 3;
  }
  return option;
}
function clickAnswer(option) {
  var timeInt = parseInt(randomChoice() + Math.random() * timeFactor * 2);
  //$('#contestMain_rblAnswers_' + option) .click();
  setTimeout(function(){$('#contestMain_rblAnswers_' + option) .click()}, timeInt);
}
function ajaxSuccess(response) {
  var data = JSON.parse(response);
  console.log(data);
  if (data.status == 0) {
    localStorage.guessed = 'false';
    console.log('click on ' + data.answer);
    clickAnswer(data.answer);
  } else {
    localStorage.guessed = 'true';
    var option = randomChoice();
    console.log('random click on ' + option);
    clickAnswer(option);
  }
}
function getQuestionData() {
  var span = $('span[data-correct="correct-answer"]');
  var json = new Object();
  json.Question = getQuestion();
  Answer = $(span) .find('input') .attr('id') .replace('contestMain_rblAnswers_', '');
  json.Answer = parseInt(Answer);
  json.AnswerText = $(span) .text();
  return json;
}
$(document) .ready(function () {
  if (isAnswered()) {
    if (!isCorrect() || localStorage.guessed == 'true') {
      var json = getQuestionData();
      // var json = new Object();
      // json.Question = "TEST QUESTION 1";
      // json.Answer = 0;
      // json.AnswerText = "TEST ANSWER";
      console.log(json);
      $.ajax({
        url: 'http://54.86.232.229/canadianiq/php/writeQuestion.php',
        type: 'POST',
        data: {
          'Question': json.Question,
          'Answer': json.Answer,
          'AnswerText': json.AnswerText,
          'auth': 'jzc0519'
        },
        cache: false,
        success: function (response) {
          //console.log('data written');
          console.log(response);
          nextQuestion();
        },
        error: function (xhr, desc, err) {
          console.log(xhr + '\n' + err);
        }
      });
    } else {
      nextQuestion();
    }
  } else {
    var question = getQuestion();
    console.log(question);
    $.ajax({
      url: 'http://54.86.232.229/canadianiq/php/getAnswer.php',
      type: 'POST',
      data: {
        'qText': question,
        'auth': 'jzc0519'
      },
      cache: false,
      success: function (response) {
        // console.log(response);
        ajaxSuccess(response);
      },
      error: function (xhr, desc, err) {
        console.log(xhr + '\n' + err);
      }
    });
  }
});
