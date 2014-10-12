$(document).ready(function(){

	// PARALLAX EFFECT 
    $('section[data-type="background"]').each(function(){
        var $bgobj = $(this); // assigning the object
    
        $(window).scroll(function() {
            var yPos = -($(window).scrollTop() / $bgobj.data('speed')); 
            
            // Put together our final background position
            var coords = '50% '+ yPos + 'px';

            // Move the background
            $bgobj.css({ backgroundPosition: coords });
        }); 
    });  
	
	
	// SCROLLING ON LINKS
	$('a').click(function(){
		$('html, body').animate({
			scrollTop: $( $.attr(this, 'href') ).offset().top
		}, 600);
		return false;
	});
});