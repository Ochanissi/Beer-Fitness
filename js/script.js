$(document).ready(function() {

    // For the sticky navigation
    $('.js--header__text-box').waypoint(function(direction) {
        if(direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        // offset: '60px;'
    });

    // Scroll on buttons 
    $('.js--scroll-to-header').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-header').offset().top}, 1000); 
     });

    $('.js--scroll-to-description').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-description').offset().top}, 1000); 
     });

     $('.js--scroll-to-schedule').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-schedule').offset().top}, 1000); 
     });

     $('.js--scroll-to-features').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000); 
     });
     
     $('.js--scroll-to-footer').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-footer').offset().top}, 1000); 
     });

     $('.js--scroll-to-gallery').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-gallery').offset().top}, 1000); 
     });


    // Navigation scroll

    // Select all links with hashes
    $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
    // On-page links
    if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
        && 
        location.hostname == this.hostname
    ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 1000, function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
            return false;
            } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
            };
        });
        }
    }
    });

    // Animation on scroll
    $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('heading--animated--left');
    }, {
        offset: '80%'
    });
    
    $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-2').addClass('btn--animated');
    }, {
        offset: '80%'
    });

    $('.js--wp-3').waypoint(function(direction) {
        $('.js--wp-3').addClass('heading--animated--left');
    }, {
        offset: '80%'
    });

    $('.js--wp-4').waypoint(function(direction) {
        $('.js--wp-4').addClass('heading--animated--left');
    }, {
        offset: '80%'
    });

    $('.js--wp-5').waypoint(function(direction) {
        $('.js--wp-5').addClass('heading--animated--top');
    }, {
        offset: '80%'
    });

    $('.js--wp-5').waypoint(function(direction) {
        $('.js--wp-6').addClass('heading--animated--bottom');
    }, {
        offset: '80%'
    });

    $('.js--wp-7').waypoint(function(direction) {
        $('.js--wp-7').addClass('heading--animated--top');
    }, {
        offset: '80%'
    });

    // Mobile navigation
    $('.js--nav-icon').click(function() {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');
        
        nav.slideToggle(200);
        
        if (icon.hasClass('ion-navicon-round')) {
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        } else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }        
    });
});
