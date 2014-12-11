// ==UserScript==
// @name       Avenue Pearson E-text Height setter
// @namespace  
// @version    1.0
// @description  
// @match      https://avenue.cllmcmaster.ca/d2l/le/content/*/fullscreen/*
// @copyright  2014+, You

// @grant      none

// This was for MyAccouringLab
// Since the only way to access that is through avenue
// and the pop up only shows half of the content on my 1080p screen
// this script is used to show everything there
// May not be super useful for everyone
// ==/UserScript==
$(document) .ready(function () {
  $('.d2l-popup-title').hide();
  $('.d2l-popup-body, .d2l-iframe').height($(window).height()+20);
  $('.d2l-popup-body').css('overflow', 'hidden');
});