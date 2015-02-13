$(document).ready(function() {
	
	$('.menu').hover(function() {
		$('.menu').animate({ 
            top: -100 
        }, 1000);
		$('.menudown').animate({ 
            top: 22 
        }, 1000);
	});

	$('.menudown').hover(function() {
		$('.menu').animate({ 
            top: -100 
        }, 1000);
		$('.menudown').animate({ 
            top: 22 
        }, 1000);
	}
	, function() {
		$('.menu').animate({ 
            top: 22 
        }, 1000);
		$('.menudown').animate({ 
            top: -100 
        }, 1000);
	});
    $(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
});

