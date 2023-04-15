$(function () {

    "use strict";

    //===== Prealoder

    $(window).on('load', function (event) {
        $('#preloader').delay(500).fadeOut(500);
    });



    //===== close navbar-collapse when a  clicked

    $(".page-scroll").on('click', function () {
        $(".off_canvars_overlay, .offcanvas_menu_wrapper").removeClass("active");
    });


    /*===============================  
         side menu Project 1
    ================================*/


    $('.canvas_open').on('click', function () {
        $('.offcanvas_menu_wrapper,.off_canvars_overlay').addClass('active')
    });

    $('.canvas_close,.off_canvars_overlay').on('click', function () {
        $('.offcanvas_menu_wrapper,.off_canvars_overlay').removeClass('active')
    });

    /*---Off Canvas Menu---*/
    var $offcanvasNav = $('.offcanvas_main_menu'),
        $offcanvasNavSubMenu = $offcanvasNav.find('.sub-menu');
    $offcanvasNavSubMenu.parent().prepend('<span class="menu-expand"><i class="fa fa-angle-down"></i></span>');

    $offcanvasNavSubMenu.slideUp();

    $offcanvasNav.on('click', 'li a, li .menu-expand', function (e) {
        var $this = $(this);
        if (($this.parent().attr('class').match(/\b(menu-item-has-children|has-children|has-sub-menu)\b/)) && ($this.attr('href') === '#' || $this.hasClass('menu-expand'))) {
            e.preventDefault();
            if ($this.siblings('ul:visible').length) {
                $this.siblings('ul').slideUp('slow');
            } else {
                $this.closest('li').siblings('li').find('ul:visible').slideUp('slow');
                $this.siblings('ul').slideDown('slow');
            }
        }
        if ($this.is('a') || $this.is('span') || $this.attr('clas').match(/\b(menu-expand)\b/)) {
            $this.parent().toggleClass('menu-open');
        } else if ($this.is('li') && $this.attr('class').match(/\b('menu-item-has-children')\b/)) {
            $this.toggleClass('menu-open');
        }
    });




    // //===== scrolling nav Active

    // var scrollLink = $('.page-scroll');
    // // Active link switching
    // $(window).scroll(function () {
    //     var scrollbarLocation = $(this).scrollTop();

    //     scrollLink.each(function () {

    //         var sectionOffset = $(this.hash).offset().top - 90;

    //         if (sectionOffset <= scrollbarLocation) {
    //             $(this).parent().addClass('active');
    //             $(this).parent().siblings().removeClass('active');
    //         }
    //     });
    // });



    //===== Sticky

    $(window).on('scroll', function (event) {
        var scroll = $(window).scrollTop();
        if (scroll < 110) {
            $(".header-nav").removeClass("sticky");
        } else {
            $(".header-nav").addClass("sticky");
        }
    });



    //===== capture Active slick slider
    $('.capture-active').slick({
        dots: false,
        infinite: false,
        autoplay: true,    
        autoplaySpeed: 3000,
        arrows: true,
        prevArrow: '<span class="prev"><i class="far fa-arrow-circle-left"></i></span>',
        nextArrow: '<span class="next"><i class="far fa-arrow-circle-right"></i></i></span>',
        speed: 1500,
        slidesToShow: 2.8,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 1201,
                settings: {
                    slidesToShow: 2.5,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1.05,
                    arrows: false,
                    slidesToScroll: 1,
                }
            }
        ]
    });



    //===== testimonial Active slick slider
    $('.testimonial-active').slick({
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        prevArrow: '<span class="prev"><i class="far fa-arrow-circle-left"></i></span>',
        nextArrow: '<span class="next"><i class="far fa-arrow-circle-right"></i></i></span>',
        speed: 1500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1201,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                }
            }
        ]
    });



    //===== screenshot Active slick slider
    $('.screenshot-active').slick({
        dots: false,
        infinite: true,
        autoplay: true,        
        swipeToSlide: true,
        autoplaySpeed: 3000,
        arrows: true,
        prevArrow: $('.screenshot-arrows .prev'),
        nextArrow: $('.screenshot-arrows .next'),
        speed: 1500,
        slidesToShow: 5,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 1201,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1.2,
                    arrows: false,
                    centerMode: true,
                    centerPadding: '100px',
                    slidesToScroll: 1,
                }
            }            
        ]
    });


    //===== faq accrodion

    if ($('.accrodion-grp').length) {
        var accrodionGrp = $('.accrodion-grp');
        accrodionGrp.each(function () {
            var accrodionName = $(this).data('grp-name');
            var Self = $(this);
            var accordion = Self.find('.accrodion');
            Self.addClass(accrodionName);
            Self.find('.accrodion .accrodion-content').hide();
            Self.find('.accrodion.active').find('.accrodion-content').show();
            accordion.each(function () {
                $(this).find('.accrodion-title').on('click', function () {
                    if ($(this).parent().parent().hasClass('active') === false) {
                        $('.accrodion-grp.' + accrodionName).find('.accrodion').removeClass('active');
                        $('.accrodion-grp.' + accrodionName).find('.accrodion').find('.accrodion-content').slideUp();
                        $(this).parent().parent().addClass('active');
                        $(this).parent().parent().find('.accrodion-content').slideDown();
                    };


                });
            });
        });

    };




    //====== Magnific Popup

    $('.video-popup').magnificPopup({
        type: 'iframe'
        // other options
    });


    //===== Magnific Popup

    $('.image-popup').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });


    //===== Back to top

    // Show or hide the sticky footer button
    $(window).on('scroll', function (event) {
        if ($(this).scrollTop() > 600 && $(this).scrollTop() <= 5500) {
            $('.back-to-top').fadeIn(200);
          } else {
            $('.back-to-top').fadeOut(200);
          }
    });


    // //Animate the scroll to yop
    // $('.back-to-top').on('click', function (event) {
    //     event.preventDefault();

    //     $('html, body').animate({
    //         scrollTop: 0,
    //     }, 1500);
    // });
    var wheel, scrolling;
var $carousel = $('#carousel');
$carousel.on('init', () => {
	wheel = new WheelIndicator({
		elem: $carousel[0],
		callback: wheelHandler,
	});
})
.on('beforeChange', () => {
	scrolling = true;
})
.on('afterChange', () => {
	scrolling = false;
})
function wheelHandler(e) {
	if (!scrolling) {
		console.log('Mouse wheel scroll:', e.direction);
		$carousel.slick(e.direction === 'up' ? 'slickPrev' : 'slickNext');
	}
}

});