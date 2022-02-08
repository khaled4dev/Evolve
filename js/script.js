jQuery(function ($) {
	'use strict';
    var nav_offset_top = $('.header_area').height()+50; 
		//* Navbar Fixed  
		function navbarFixed(){
			if ( $('.header_area').length ){ 
				$(window).scroll(function() {
					var scroll = $(window).scrollTop();   
					if (scroll >= nav_offset_top ) {
						$(".header_area").addClass("navbar_fixed");
					} else {
						$(".header_area").removeClass("navbar_fixed");
					}
				});
			};
		};
		navbarFixed();

	/* ----------------------------------------------------------- */
	/*  Fixed header
	/* ----------------------------------------------------------- */
	$(window).on('scroll', function () {

		// fixedHeader on scroll
		function fixedHeader() {
			var headerTopBar = $('.top-bar').outerHeight();
			var headerOneTopSpace = $('.header-one .logo-area').outerHeight();

			var headerOneELement = $('.header-one .site-navigation');
			var headerTwoELement = $('.header-two .site-navigation');

			if ($(window).scrollTop() > headerTopBar + headerOneTopSpace) {
				$(headerOneELement).addClass('navbar-fixed');
				$('.header-one').css('margin-bottom', headerOneELement.outerHeight());
			} else {
				$(headerOneELement).removeClass('navbar-fixed');
				$('.header-one').css('margin-bottom', 0);
			}
			if ($(window).scrollTop() > headerTopBar) {
				$(headerTwoELement).addClass('navbar-fixed');
				$('.header-two').css('margin-bottom', headerTwoELement.outerHeight());
			} else {
				$(headerTwoELement).removeClass('navbar-fixed');
				$('.header-two').css('margin-bottom', 0);
			}
		}
		fixedHeader();


	


		// scroll to top btn show/hide
		function scrollTopBtn() {
			var scrollToTop = $('#back-to-top'),
				scroll = $(window).scrollTop();
			if (scroll >= 50) {
				scrollToTop.fadeIn();
			} else {
				scrollToTop.fadeOut();
			}
		}
		scrollTopBtn();
	});


	$(document).ready(function () {

		// navSearch show/hide
		function navSearch() {
			$('.nav-search').on('click', function () {
				$('.search-block').fadeIn(350);
			});
			$('.search-close').on('click', function () {
				$('.search-block').fadeOut(350);
			});
		}
		navSearch();

		// navbarDropdown
		function navbarDropdown() {
			if ($(window).width() < 992) {
				$('.site-navigation .dropdown-toggle').on('click', function () {
					$(this).siblings('.dropdown-menu').animate({
						height: 'toggle'
					}, 300);
				});

				var navbarHeight = $('.site-navigation').outerHeight();
				$('.site-navigation .navbar-collapse').css('max-height', 'calc(100vh - ' + navbarHeight + 'px)');
			}
		}
		navbarDropdown();


		// back to top
		function backToTop() {
			$('#back-to-top').on('click', function () {
				$('#back-to-top').tooltip('hide');
				$('body,html').animate({
					scrollTop: 0
				}, 800);
				return false;
			});
		}
		backToTop();


		// banner-carousel
		function bannerCarouselOne() {
			$('.banner-carousel.banner-carousel-1').slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				autoplay: true,
				dots: true,
				speed: 600,
				arrows: true,
				prevArrow: '<button type="button" class="carousel-control left" aria-label="carousel-control"><i class="fas fa-chevron-left"></i></button>',
				nextArrow: '<button type="button" class="carousel-control right" aria-label="carousel-control"><i class="fas fa-chevron-right"></i></button>'
			});
			$('.banner-carousel.banner-carousel-1').slickAnimation();
		}
		bannerCarouselOne();


		// banner Carousel Two
		function bannerCarouselTwo() {
			$('.banner-carousel.banner-carousel-2').slick({
				fade: true,
				slidesToShow: 1,
				slidesToScroll: 1,
				autoplay: true,
				dots: false,
				speed: 600,
				arrows: true,
				prevArrow: '<button type="button" class="carousel-control left" aria-label="carousel-control"><i class="fas fa-chevron-left"></i></button>',
				nextArrow: '<button type="button" class="carousel-control right" aria-label="carousel-control"><i class="fas fa-chevron-right"></i></button>'
			});
		}
		bannerCarouselTwo();


		// pageSlider
		function pageSlider() {
			$('.page-slider').slick({
				fade: true,
				slidesToShow: 1,
				slidesToScroll: 1,
				autoplay: true,
				dots: false,
				speed: 600,
				arrows: true,
				prevArrow: '<button type="button" class="carousel-control left" aria-label="carousel-control"><i class="fas fa-chevron-left"></i></button>',
				nextArrow: '<button type="button" class="carousel-control right" aria-label="carousel-control"><i class="fas fa-chevron-right"></i></button>'
			});
		}
		pageSlider();


		// Shuffle js filter and masonry
		function projectShuffle() {
			if ($('.shuffle-wrapper').length !== 0) {
				var Shuffle = window.Shuffle;
				var myShuffle = new Shuffle(document.querySelector('.shuffle-wrapper'), {
					itemSelector: '.shuffle-item',
					sizer: '.shuffle-sizer',
					buffer: 1
				});
				$('input[name="shuffle-filter"]').on('change', function (evt) {
					var input = evt.currentTarget;
					if (input.checked) {
						myShuffle.filter(input.value);
					}
				});
				$('.shuffle-btn-group label').on('click', function () {
					$('.shuffle-btn-group label').removeClass('active');
					$(this).addClass('active');
				});
			}
		}
		projectShuffle();


		// testimonial carousel
		function testimonialCarousel() {
			$('.testimonial-slide').slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				dots: true,
				speed: 600,
				arrows: false
			});
		}
		testimonialCarousel();


		// team carousel
		function teamCarousel() {
			$('.team-slide').slick({
				dots: false,
				infinite: false,
				speed: 300,
				slidesToShow: 4,
				slidesToScroll: 2,
				arrows: true,
				prevArrow: '<button type="button" class="carousel-control left" aria-label="carousel-control"><i class="fas fa-chevron-left"></i></button>',
				nextArrow: '<button type="button" class="carousel-control right" aria-label="carousel-control"><i class="fas fa-chevron-right"></i></button>',
				responsive: [{
						breakpoint: 992,
						settings: {
							slidesToShow: 3,
							slidesToScroll: 3
						}
					},
					{
						breakpoint: 768,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 2
						}
					},
					{
						breakpoint: 481,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1
						}
					}
				]
			});
		}
		teamCarousel();


		// media popup
		function mediaPopup() {
			$('.gallery-popup').colorbox({
				rel: 'gallery-popup',
				transition: 'slideshow',
				innerHeight: '500'
			});
			$('.popup').colorbox({
				iframe: true,
				innerWidth: 600,
				innerHeight: 400
			});
		}
		mediaPopup();

	});

	$('.box-slider-text a').on('click',function(e){
		var href= $(this).attr('href');
		$( 'html, body' ).animate({
			scrollTop: $( href ).offset().top
	  }, '300' );
		
	  // Prevent the browser from showing the attribute name of the clicked link in the address bar
	  e.preventDefault();
	});

	    $('a[href*="#"]').click(function (event) {
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top - 74
          }, 1000);
        }
      }
    });

	

});



$(function() {

	var siteSticky = function() {
		  $(".js-sticky-header").sticky({topSpacing:0});
	  };
	  siteSticky();
  
	  var siteMenuClone = function() {
  
		  $('.js-clone-nav').each(function() {
			  var $this = $(this);
			  $this.clone().attr('class', 'site-nav-wrap').appendTo('.site-mobile-menu-body');
		  });
  
  
		  setTimeout(function() {
			  
			  var counter = 0;
		$('.site-mobile-menu .has-children').each(function(){
		  var $this = $(this);
		  
		  $this.prepend('<span class="arrow-collapse collapsed">');
  
		  $this.find('.arrow-collapse').attr({
			'data-toggle' : 'collapse',
			'data-target' : '#collapseItem' + counter,
		  });
  
		  $this.find('> ul').attr({
			'class' : 'collapse',
			'id' : 'collapseItem' + counter,
		  });
  
		  counter++;
  
		});
  
	  }, 1000);
  
		  $('body').on('click', '.arrow-collapse', function(e) {
		var $this = $(this);
		if ( $this.closest('li').find('.collapse').hasClass('show') ) {
		  $this.removeClass('active');
		} else {
		  $this.addClass('active');
		}
		e.preventDefault();  
		
	  });
  
		  $(window).resize(function() {
			  var $this = $(this),
				  w = $this.width();
  
			  if ( w > 768 ) {
				  if ( $('body').hasClass('offcanvas-menu') ) {
					  $('body').removeClass('offcanvas-menu');
				  }
			  }
		  })
  
		  $('body').on('click', '.js-menu-toggle', function(e) {
			  var $this = $(this);
			  e.preventDefault();
  
			  if ( $('body').hasClass('offcanvas-menu') ) {
				  $('body').removeClass('offcanvas-menu');
				  $this.removeClass('active');
			  } else {
				  $('body').addClass('offcanvas-menu');
				  $this.addClass('active');
			  }
		  }) 
  
		  // click outisde offcanvas
		  $(document).mouseup(function(e) {
		  var container = $(".site-mobile-menu");
		  if (!container.is(e.target) && container.has(e.target).length === 0) {
			if ( $('body').hasClass('offcanvas-menu') ) {
					  $('body').removeClass('offcanvas-menu');
				  }
		  }
		  });
	  }; 
	  siteMenuClone();
  
  });