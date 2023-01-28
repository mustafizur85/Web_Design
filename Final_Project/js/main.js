(function($){
	'use strict';

	/*-------Menu section js-------*/

	$('.mobile-menu i').on('click', function(){   
		$('.menu').slideToggle();

});



	$(window).resize( function(){

	var screenSize = $(window).width(); 

	if (screenSize > 991) {
		$('.menu').removeAttr('style');
	}
	

} );


    /*---- Scroll top section------------*/


    $(window).scroll(function(){
        var mustafiz = $(window).scrollTop();
       

        if(mustafiz>1000){
            $('.scroll-top').fadeIn();

        }

        else{
            $('.scroll-top').fadeOut();

    }

    });


    $('.scroll-top').on('click',function() {
        $('html').animate({scrollTop : 0});
    })


	$('.menu-text h6').on('click', function() {
		$('.menu-text p').slideToggle();
	})


/*-------Isotop js-------*/

	// filter items on button click
$('.filter-button-group').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});
var $grid = $('.grid').isotope({
  // set itemSelector so .grid-sizer is not used in layout
  itemSelector: '.grid-item',
  percentPosition: true,
  masonry: {
    // use element for option
    columnWidth: '.grid-item'
  }
})

$('.portfolio-button button').on('click',function() {
	$('.portfolio-button button').removeClass('portfolio-button-active');
	$(this).addClass('portfolio-button-active');
})


/*-------wow js-------*/

	var wow = new WOW(
  {
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animate__animated', // animation css class (default is animated)
    offset:       0,          // distance to the element when triggering the animation (default is 0)
    mobile:       true,       // trigger animations on mobile devices (default is true)
    live:         true,       // act on asynchronously loaded content (default is true)
    callback:     function(box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null,    // optional scroll container selector, otherwise use window,
    resetAnimation: true,     // reset animation on end (default is true)
  }
);
wow.init();

/*---- owlcarousel------------*/

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
})



/*---- Team area section------------*/


 $('.team-member-caption-1 button').on('click',function(){
 		$('.team-member-caption-details-1').fadeIn();

 })

$('.team-caption-details-icon-1 i').on('click', function() {

	$('.team-member-caption-details-1').fadeOut();
})



 $('.team-member-caption-2 button').on('click',function(){
 		$('.team-member-caption-details-2').fadeIn();

 })

$('.team-caption-details-icon-2 i').on('click', function() {

	$('.team-member-caption-details-2').fadeOut();
})





 $('.team-member-caption-3 button').on('click',function(){
 		$('.team-member-caption-details-3').fadeIn();

 })

$('.team-caption-details-icon-3 i').on('click', function() {

	$('.team-member-caption-details-3').fadeOut();
})






 $('.team-member-caption-4 button').on('click',function(){
 		$('.team-member-caption-details-4').fadeIn();

 })

$('.team-caption-details-icon-4 i').on('click', function() {

	$('.team-member-caption-details-4').fadeOut();
})









}) (jQuery);