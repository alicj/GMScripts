// ==UserScript==
// @name       Avenue Pearson E-text Height setter
// @namespace  
// @version    0.1
// @description  
// @match      https://avenue.cllmcmaster.ca/d2l/le/content/*/fullscreen/*
// @copyright  2014+, You

// @grant      none 
// ==/UserScript==
$(document) .ready(function () {
  $('.d2l-popup-title').hide();
  $('.d2l-popup-body, .d2l-iframe').height($(window).height()+20);
  $('.d2l-popup-body').css('overflow', 'hidden');
});