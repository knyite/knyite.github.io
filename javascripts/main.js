$(document).ready(function() {
	
	$('.menu').hover(function() {
		$('.menu').animate({ top: -100 }, 1000);
		$('.menudown').animate({ top: 22 }, 1000);
	});

	$('.menudown').hover(function() {
		$('.menu').animate({ top: -100 }, 1000);
		$('.menudown').animate({ top: 22 }, 1000);
	}
	, function() {
		$('.menu').animate({ top: 22 }, 1000);
		$('.menudown').animate({ top: -100 }, 1000);
	});	
});