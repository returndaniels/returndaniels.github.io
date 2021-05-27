(function($) {
    "use strict";
    var body = $('body');

    function imageCarousel() {
        $('.portfolio-page-carousel').each(()=>{
            $(this).imagesLoaded(()=>{
                $('.portfolio-page-carousel').owlCarousel({
                    smartSpeed: 1200,
                    items: 1,
                    loop: true,
                    dots: true,
                    nav: true,
                    navText: false,
                    autoHeight: true,
                    margin: 10
                });
            }
            );
        }
        );
    }
    
    function ajaxLoader() {
        var ajaxLoadedContent = $('#page-ajax-loaded');
        function showContent() {
            ajaxLoadedContent.removeClass('animated-section-moveToRight closed');
            ajaxLoadedContent.show();
            $('body').addClass('ajax-page-visible');
        }
        function hideContent() {
            $('#page-ajax-loaded').addClass('animated-section-moveToRight closed');
            $('body').removeClass('ajax-page-visible');
            setTimeout(()=>{
                $('#page-ajax-loaded.closed').html('');
                ajaxLoadedContent.hide();
                $('#page-ajax-loaded').append('<div class="preloader-portfolio"><div class="preloader-animation"><div class="preloader-spinner"></div></div></div></div>');
            }
            , 500);
        }
        var href = $('.ajax-page-load').each(()=>{
            href = $(this).attr('href');
            if (location.hash == location.hash.split('/')[0] + '/' + href.substr(0, href.length - 5)) {
                var toLoad = $(this).attr('href');
                showContent();
                ajaxLoadedContent.load(toLoad);
                return false;
            }
        }
        );
        $(document).on("click", "#portfolio-page-close-button", function(e) {
            e.preventDefault();
            hideContent();
            location.hash = location.hash.split('/')[0];
        }).on("click", ".ajax-page-load", ()=>{
            var hash = location.hash.split('/')[0] + '/' + $(this).attr('href').substr(0, $(this).attr('href').length - 5);
            location.hash = hash;
            showContent();
            return false;
        }
        );
    }

    function animateLayout() {
        var animatedContainer = ''
          , blogSidebar = $(".blog-sidebar")
          , animatedContainer = $(".content-area")
          , animateType = animatedContainer.attr('data-animation');
        animatedContainer.addClass("animated " + animateType);
        $('.page-scroll').addClass('add-prespective');
        animatedContainer.addClass('transform3d');
        setTimeout(()=>{
            blogSidebar.removeClass("hidden-sidebar");
            $('.page-scroll').removeClass('add-prespective');
            animatedContainer.removeClass('transform3d');
        }
        , 1000);
    }
    function skillsStyles() {
        var $custom_styles = ""
          , $custom_style = "";
        $('.skill-container').each(()=>{
            var value = $(this).attr('data-value')
              , $id = $(this).attr('id');
            if (value >= 101) {
                value = '100';
            }
            if (typeof value != 'undefined') {
                $custom_style = '#' + $id + ' .skill-percentage { width: ' + value + '%; } ';
                $custom_styles += $custom_style;
            }
        }
        );
        $('head').append('<style data-styles="alan-skills-css" type="text/css">' + $custom_styles + '</style>');
    }
    $(window).on('load', ()=>{
        $(".preloader").fadeOut(800, "linear");
        animateLayout();
    }
    ).on('hashchange', function(event) {
        if (location.hash) {
            ajaxLoader();
        }
    });
    $(document).on('ready', ()=>{
        var movementStrength = 15;
        var height = movementStrength / $(document).height();
        var width = movementStrength / $(document).width();
        $("body").on('mousemove', function(e) {
            var pageX = e.pageX - ($(document).width() / 2)
              , pageY = e.pageY - ($(document).height() / 2)
              , newvalueX = width * pageX * -1
              , newvalueY = height * pageY * -1;
            if ($('.page-wrapper').hasClass('bg-move-effect')) {
                var elements = $('.home-photo .hp-inner:not(.without-move), .lm-animated-bg');
            } else {
                var elements = $('.home-photo .hp-inner:not(.without-move)');
            }
            elements.addClass('transition');
            elements.css({
                "background-position": "calc( 50% + " + newvalueX + "px ) calc( 50% + " + newvalueY + "px )",
            });
            setTimeout(()=>{
                elements.removeClass('transition');
            }
            , 300);
        })

        imageCarousel();
        $(".clients.owl-carousel").imagesLoaded().owlCarousel({
            nav: true,
            items: 2,
            loop: false,
            navText: false,
            margin: 10,
            autoHeight: false,
            responsive: {
                0: {
                    items: 2,
                },
                768: {
                    items: 4,
                },
                1200: {
                    items: 6,
                }
            }
        });
        $(".testimonials.owl-carousel").owlCarousel({
            nav: true,
            items: 3,
            loop: false,
            navText: false,
            margin: 25,
            responsive: {
                0: {
                    items: 1,
                },
                480: {
                    items: 1,
                },
                768: {
                    items: 2,
                },
                1200: {
                    items: 2,
                }
            }
        });
        $('.text-rotation').owlCarousel({
            loop: true,
            dots: false,
            nav: false,
            margin: 10,
            items: 1,
            autoplay: true,
            autoplayHoverPause: false,
            autoplayTimeout: 3800,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn'
        });
        
        body.magnificPopup({
            fixedContentPos: false,
            delegate: 'a.lightbox',
            type: 'image',
            removalDelay: 300,
            mainClass: 'mfp-fade',
            image: {
                titleSrc: 'title',
                gallery: {
                    enabled: true
                },
            },
            iframe: {
                markup: '<div class="mfp-iframe-scaler">' + '<div class="mfp-close"></div>' + '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' + '<div class="mfp-title mfp-bottom-iframe-title"></div>' + '</div>',
                patterns: {
                    youtube: {
                        index: 'youtube.com/',
                        id: null,
                        src: '%id%?autoplay=1'
                    },
                    vimeo: {
                        index: 'vimeo.com/',
                        id: '/',
                        src: '//player.vimeo.com/video/%id%?autoplay=1'
                    },
                    gmaps: {
                        index: '//maps.google.',
                        src: '%id%&output=embed'
                    }
                },
                srcAction: 'iframe_src',
            },
            callbacks: {
                markupParse: function(template, values, item) {
                    values.title = item.el.attr('title');
                }
            },
        });
        $('.ajax-page-load-link').magnificPopup({
            type: 'ajax',
            removalDelay: 300,
            mainClass: 'mfp-fade',
            gallery: {
                enabled: true
            },
        });

        $('body').append('<div id="page-ajax-loaded" class="page-portfolio-loaded animated animated-section-moveFromLeft" style="display: none"><div class="preloader-portfolio"><div class="preloader-animation"><div class="preloader-spinner"></div></div></div></div>');
        ajaxLoader();
        
        skillsStyles();
        if ($(".home-bgvideo")[0]) {
            var mpLink = $('.home-bgvideo').attr('data-videomp')
              , webmLink = $('.home-bgvideo').attr('data-videowebm')
              , imgLink = $('.home-bgvideo').attr('data-img')
              , videoBackground = new vidbg('.home-bgvideo',{
                mp4: mpLink,
                webm: webmLink,
                poster: imgLink,
            })
        }
    }
    );
}
)(jQuery);
