// ==UserScript==
// @name        Avenue2Learn-Improve
// @namespace   avenue
// @include		https://avenue.cllmcmaster.ca/*
// @version     1.0
// @grant       none

// @description
// A grand project to improve the user experience of Avenue2Learn
// ==/UserScript==


function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}

$(document).ready(function() {
	console.log("loaded");
	addGlobalStyle(
		"\
		.d2l-menuflyout-link-hover {\
			max-width: 200px;\
		}\
		.d2l-menuflyout-arrow,\
		.d2l-menuflyout-link-arrow{\
			line-height: 20px;\
			width: 24px;\
			height: 20px;\
			background: none; !important;\
			text-align: center;\
			font-weight: 700;\
			color: rgba(255, 255, 255, 0.9);\
			border-left: 1px dotted rgba(255, 255, 255, 0.6);\
			margin: 0 3px;\
		}\
		.d2l-menuflyout-arrow:hover {\
		}\
		.d2l-menuflyout-link-arrow {\
			border: none;\
			width: 20px;\
		}\
		.d2l-menuflyout-arrow-open {\
			color: rgba(0, 0, 0, 0.8);\
			border-color:rgba(0, 0, 0, 0.8);\
		}\
		"

	);

	// menu arrow
	$('.d2l-menuflyout-arrow, .d2l-menuflyout-link-arrow').html("v");
	console.log("finish");
});



