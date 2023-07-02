
(function($){
	'use strict';


	$('.mobile-menu i').on('click', function(){
		$('.menu').slideToggle();

	});


	$(window).resize( function(){

		var screenSize = $(window).width(); 

		if (screenSize > 991) {
			$('.menu').removeAttr('style');
		}
		

	});

}) (jQuery);