
$(document).ready(function($){
	"use strict";
	
	//Scroll Spy		
			$('body').scrollspy({ target: '.navbar' })
		
		
		//Smoth scroll
			$("a").on('click', function(event) {
				if (this.hash !== "") {
					// Prevent default anchor click behavior
					event.preventDefault();

					// Store hash
					var hash = this.hash;

					$('html, body').animate({
					scrollTop: $(hash).offset().top
					}, 500, function(){
					window.location.hash = hash;
					});
				} // End if
			});
			
    //======== Sticky Nav==========
      $(".navbar").sticky({ topSpacing: 0 });
	  
	//======== video popup==========
    $('.all-video-btn a').magnificPopup({
        type: 'iframe',
        iframe: {
            markup: '<div class="mfp-iframe-scaler">' +
                '<div class="mfp-close"></div>' +
                '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
                '</div>',
            patterns: {
                youtube: {
                    index: 'youtube.com/',
                    id: 'v=',
                    src: 'http://www.youtube.com/embed/%id%?autoplay=1'
                }
            },
            srcAction: 'iframe_src'
        }
    });

    //Video Background
    jQuery(".intro").YTPlayer({
        containment:'self',
        autoPlay:true,
        mute:true,
        startAt:0,
        stopAt:55,
        opacity:0.8,
        showYTLogo: false,
        showControls: false 
    });    

	  //======== Header-Slider Screenshot ===============
	 
	$('.slider-carousel-01').owlCarousel({
        loop:true,
        margin:30,
        nav:true,
		dots:false,
        autoplay:true, 
		animateIn: "fadeIn",
        animateOut: "fadeOut",
        navText: ['<i class="fa fa-angle-left" aria-hidden="true">', '<i class="fa fa-angle-right" aria-hidden="true">'],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:1
            }
        }
    })

    //======== Header Screenshot ===============
    $('.screenshot-carousel-01').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        autoplay:true,
        navText: ['<i class="fa fa-angle-left" aria-hidden="true">', '<i class="fa fa-angle-right" aria-hidden="true">'],
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

    //======== Screenshot ===============    
    $('.screenshot-carousel-02').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        autoplay:true,
        responsive:{
            0:{
                items:3
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })
	
    //======== Typed-js=============== 
	
	$("#typed").typed({
        stringsElement: $('#typed-strings'),
        typeSpeed: 60,
        backDelay: 900,
        loop: true,
        contentType: 'html',
        loopCount: true
    });
	
	 /*====  preloader js =====*/
      setTimeout(function() {
            $('body').addClass('loaded');
        }, 500);

    
	    
});
