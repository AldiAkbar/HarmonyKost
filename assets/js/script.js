$(function() {
    
    "use strict";
    
    //===== Prealoder
    
    $(window).on('load', function() {
        $('.preloader').delay(500).fadeOut(500);
    });

    // navbar script
    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $(function() {
        $(document).on('click', 'a.page-scroll', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top
            }, 600, 'easeInOutExpo');
            event.preventDefault();
        });
    });

    /* Back To Top Button */
    // create the back to top button
    $('body').prepend('<a href="body" class="back-to-top page-scroll">Back to Top</a>');
        var amountScrolled = 700;
        $(window).scroll(function() {
            if ($(window).scrollTop() > amountScrolled) {
                $('a.back-to-top').fadeIn('500');
            } else {
                $('a.back-to-top').fadeOut('500');
            }
        });


        /*=====================================
    Sticky
    ======================================= */
    window.onscroll = function () {
        var section_navbar = document.querySelector(".navbar-area");
        var sticky = section_navbar.offsetTop;

        var logo = document.querySelector('.navbar-logo img')
        if (window.pageYOffset > sticky) {
          section_navbar.classList.add("sticky");
          logo.src = 'assets/img/Logo-color.svg';
        } else {
          section_navbar.classList.remove("sticky");
          logo.src = 'assets/img/Logo.svg';
        }
    };

        
        //===== Section Menu Active

        var scrollLink = $('.page-scroll');
        // Active link switching
        $(window).scroll(function () {
            var scrollbarLocation = $(this).scrollTop();
            // console.log(scrollbarLocation);
    
            scrollLink.each(function () {

                var $anchor = $(this);
                var sectionOffset = $($anchor.attr('href')).offset().top - 73;
                // console.log(sectionOffset);
                // alert(sectionOffset);
    
                if (sectionOffset <= scrollbarLocation) {
                    $(this).parent().addClass('active');
                    $(this).parent().siblings().removeClass('active');
                }
            });
        });

        /* Card Slider - Swiper */
	var cardSlider = new Swiper('.card-slider', {
		autoplay: {
            delay: 5000,
            disableOnInteraction: false
		},
        loop: true,
        navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev'
		},
		slidesPerView: 3,
		spaceBetween: 20,
        breakpoints: {
            // when window is <= 992px
            992: {
                slidesPerView: 2
            },
            // when window is <= 768px
            768: {
                slidesPerView: 1
            } 
        }
    });

    

    $(".navbar-nav a").on('click', function () {
        $(".navbar-collapse").removeClass("show");
    });

    $(".navbar-toggler").on('click', function () {
        $(this).toggleClass("active");
    });

    $(".navbar-nav a").on('click', function () {
        $(".navbar-toggler").removeClass('active');
    });

});