// Preloader 
function load(){

	var loading = document.getElementsByClassName('preloader');

	loading[0].style.display = "none";
}

// MOBILE MENU //

const menuIcon = document.querySelector('.hamburger-menu');
const navlist = document.querySelector('.nav-list');

menuIcon.addEventListener("click", () => {

  menuIcon.classList.toggle('change');
  navlist.classList.toggle('slide-menu');
  
});

function myFunction(){

  menuIcon.classList.remove('change');
  navlist.classList.remove('slide-menu');
  
}

$(document).ready(function(){
	
	// Scroll to Top
	$(window).scroll(function(){

		if($(this).scrollTop() > 100){
			$('.scroll-top').fadeIn();
		}

		else{
			$('.scroll-top').fadeOut();
		}

	});

	// Toggle Search Bar 
	$('.search-icon').click(function(){

		$('.search-field').toggleClass('active');
	});

	// Sticky Menu
	$(window).scroll(function(){

		if($(this).scrollTop() > 100){
			$('.nav').addClass('sticky');
		}

		else{
			$('.nav').removeClass('sticky');
		}

	});

	// Magnific Popup Video
	$('.free_video_popup').magnificPopup({
		type: 'iframe',
		// other options
		iframe: {
			markup: '<div class="mfp-iframe-scaler">' + '<div class="mfp-close"></div>' + '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' + '</div>',
			patterns: {
				youtube: {
					index: 'youtube.com/',
					id: 'v=',
					src: 'https://www.youtube.com/embed/%id%'
				},
			},
			srcAction: 'iframe_src',
		}
	});

	
	//Accordion
	 $('select').niceSelect();

	 $("#my-accordion").accordionjs({
        // Allow self close.(data-close-able)
        closeAble   : false,

        // Close other sections.(data-close-other)
        closeOther  : true,

        // Animation Speed.(data-slide-speed)
        slideSpeed  : 200,

        // The section open on first init. A number from 1 to X or false.(data-active-index)
        activeIndex : false,

        // Callback when a section is open
        openSection: function( section ){},

        // Callback before a section is open
        beforeOpenSection: function( section ){},
    });


});