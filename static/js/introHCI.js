'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Javascript is connected");
		$("#testjs").text("42 is the answer");
		$(".jumbotron p").toggleClass("active");
	});
	$("a.thumbnail").click(projectClick);
	$("#myelement").click(changeText);
	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
}

function projectClick(e) {
	console.log("Project clicked");
	e.preventDefault();
	$(this).css("background-color", "#7fff00");
	var containingProject = $(this).closest(".project");
    var description = $(containingProject).find(".project-description");
    if (description.length == 0) {
       $(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>");
    } else {
       description.fadeToggle();
    }
}


function changeText(e){
	console.log("Text clicked");
	$(this).text("Text Changed");
}