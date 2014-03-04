'use strict';

var startTime;

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
	startTime = new Date().getTime();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	// your code here
}

$(".likeBtn").click(function() {
	console.log("CLICKED LIKE BUTTON!");

	var endTime = new Date().getTime();
	var timeSpent = endTime - startTime;
	ga('send', 'timing', 'jQuery', 'timeUntilLiked', timeSpent, 'Lab 8');

	ga("send", "event", "like", "click");
});