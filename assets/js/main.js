/**
 * Template Name: SafeEarth
 * Template URL: https://safeearthcrypto.com
 * Author: SafeEarth
 */
!(function ($) {
    "use strict";

    // Smooth scroll for the navigation menu and links with .scrollto classes
    var scrolltoOffset = $("#header").outerHeight() - 2;
    $(document).on("click", ".nav-menu a, .mobile-nav a, .scrollto", function (
        e
    ) {
        if (
            location.pathname.replace(/^\//, "") ==
            this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            if (target.length) {
                e.preventDefault();

                var scrollto = target.offset().top - scrolltoOffset;
                if ($(this).attr("href") == "#header") {
                    scrollto = 0;
                }

                $("html, body").animate(
                    {
                        scrollTop: scrollto,
                    },
                    1500,
                    "easeInOutExpo"
                );

                if ($(this).parents(".nav-menu, .mobile-nav").length) {
                    $(".nav-menu .active, .mobile-nav .active").removeClass("active");
                    $(this).closest("li").addClass("active");
                }

                if ($("body").hasClass("mobile-nav-active")) {
                    $("body").removeClass("mobile-nav-active");
                    $(".mobile-nav-toggle i").toggleClass(
                        "icofont-navigation-menu icofont-close"
                    );
                    $(".mobile-nav-overly").fadeOut();
                }
                return false;
            }
        }
    });

    // Activate smooth scroll on page load with hash links
    $(document).ready(function () {
        if (window.location.hash) {
            var initial_nav = window.location.hash;
            if ($(initial_nav).length) {
                var scrollto = $(initial_nav).offset().top - scrolltoOffset;
                $("html, body").animate(
                    {
                        scrollTop: scrollto,
                    },
                    1500,
                    "easeInOutExpo"
                );
            }
        }
        $('.autoplay').slick({
            slidesToShow: 5,
            slidesToScroll: 1,

            infinite: true,
            autoplay: true,
            arrows: true,
            autoplaySpeed: 2000,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        arrows: false,
                        dots: true,
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        arrows: false,
                        dots: true,
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        dots: true,
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        arrows: false,
                        dots: true,
                        slidesToShow: 1
                    }
                }
            ]
        });
    });

    // Mobile Navigation
    if ($(".nav-menu").length) {
        var $mobile_nav = $(".nav-menu").clone().prop({
            class: "mobile-nav d-lg-none",
        });
        $("body").append($mobile_nav);
        $("body").prepend(
            '<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>'
        );
        $("body").append('<div class="mobile-nav-overly"></div>');

        $(document).on("click", ".mobile-nav-toggle", function (e) {
            $("body").toggleClass("mobile-nav-active");
            $(".mobile-nav-toggle i").toggleClass(
                "icofont-navigation-menu icofont-close"
            );
            $(".mobile-nav-overly").toggle();
        });

        $(document).on("click", ".mobile-nav .drop-down > a", function (e) {
            e.preventDefault();
            $(this).next().slideToggle(300);
            $(this).parent().toggleClass("active");
        });

        $(document).click(function (e) {
            var container = $(".mobile-nav, .mobile-nav-toggle");
            if (!container.is(e.target) && container.has(e.target).length === 0) {
                if ($("body").hasClass("mobile-nav-active")) {
                    $("body").removeClass("mobile-nav-active");
                    $(".mobile-nav-toggle i").toggleClass(
                        "icofont-navigation-menu icofont-close"
                    );
                    $(".mobile-nav-overly").fadeOut();
                }
            }
        });
    } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
        $(".mobile-nav, .mobile-nav-toggle").hide();
    }

    // Navigation active state on scroll
    var nav_sections = $("section");
    var main_nav = $(".nav-menu, #mobile-nav");

    $(window).on("scroll", function () {
        var cur_pos = $(this).scrollTop() + 200;

        nav_sections.each(function () {
            var top = $(this).offset().top,
                bottom = top + $(this).outerHeight();

            if (cur_pos >= top && cur_pos <= bottom) {
                if (cur_pos <= bottom) {
                    main_nav.find("li").removeClass("active");
                }
                main_nav
                    .find('a[href="#' + $(this).attr("id") + '"]')
                    .parent("li")
                    .addClass("active");
            }
            if (cur_pos < 300) {
                $(".nav-menu ul:first li:first").addClass("active");
            }
        });
    });

    // Toggle .header-scrolled class to #header when page is scrolled
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $("#header").addClass("header-scrolled");
        } else {
            $("#header").removeClass("header-scrolled");
        }
    });

    if ($(window).scrollTop() > 100) {
        $("#header").addClass("header-scrolled");
    }

    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $(".back-to-top").fadeIn("slow");
        } else {
            $(".back-to-top").fadeOut("slow");
        }
    });

    $(".back-to-top").click(function () {
        $("html, body").animate(
            {
                scrollTop: 0,
            },
            1500,
            "easeInOutExpo"
        );
        return false;
    });

    // Skills section
    $(".skills-content").waypoint(
        function () {
            $(".progress .progress-bar").each(function () {
                $(this).css("width", $(this).attr("aria-valuenow") + "%");
            });
        },
        {
            offset: "80%",
        }
    );

    // Porfolio isotope and filter
    $(window).on("load", function () {
        var portfolioIsotope = $(".portfolio-container").isotope({
            itemSelector: ".portfolio-item",
        });

        $("#portfolio-flters li").on("click", function () {
            $("#portfolio-flters li").removeClass("filter-active");
            $(this).addClass("filter-active");

            portfolioIsotope.isotope({
                filter: $(this).data("filter"),
            });
            aos_init();
        });

        // Initiate venobox (lightbox feature used in portofilo)
        $(document).ready(function () {
            $(".venobox").venobox({
                share: false,
            });
        });
    });

    // Portfolio details carousel
    $(".portfolio-details-carousel").owlCarousel({
        autoplay: true,
        dots: true,
        loop: true,
        items: 1,
    });

    // Roadmap
    $(".time-line-carousel").owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: true,
        navText: [
            "<i class='bx bxs-chevron-left'></i>",
            "<i class='bx bxs-chevron-right'></i>",
        ],
        responsive: {
            0: {
                items: 1,
                nav: true,
            },
            600: {
                items: 1,
                nav: false,
            },
            900: {
                items: 3,
                nav: true,
                loop: false,
            },
        },
    });


    // Init AOS
    function aos_init() {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }


    $(window).on("load", function () {
        aos_init();
    });

    $.fn.digits = function () {
        return this.each(function () {
            $(this).text(
                $(this)
                    .text()
                    .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")
            );
        });
    };

    // Counter
    $(".counter-count").each(function () {
        $(this)
            .prop("Counter", 0)
            .animate(
                {
                    Counter: $(this).text(),
                },
                {
                    //chnage count up speed here
                    duration: 4000,
                    easing: "swing",
                    step: function (now) {
                        $(this).text("$" + Math.ceil(now));
                        // $(this).digits();
                    },
                }
            );
    });

    var items = document.querySelectorAll("li");


    function isItemInView(item) {
        var rect = item.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <=
            (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }


    function callbackFunc() {
        for (var i = 0; i < items.length; i++) {
            if (isItemInView(items[i])) {
                items[i].classList.add("show");
            }
        }
    }


    // listen for events
    window.addEventListener("load", callbackFunc);
    window.addEventListener("resize", callbackFunc);
    window.addEventListener("scroll", callbackFunc);

    $('[data-toggle="tooltip"]').tooltip();
})(jQuery);

$.getJSON(
    "https://api.coingecko.com/api/v3/coins/safemars?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false",
    function (data) {
        var value = data.market_data.current_price.usd;
        var volume = data.market_data.total_volume.usd;
        var oneh = data.market_data.price_change_percentage_1h_in_currency.usd;
        var fourh = data.market_data.price_change_percentage_24h_in_currency.usd;
        var sevend = data.market_data.price_change_percentage_14d_in_currency.usd;
        var marketcap = data.market_data.market_cap.usd;

        if (oneh >= 0) {
            $(".1hc").addClass("po");
        } else {
            $(".1hc").addClass("ne");
        }

        if (fourh >= 0) {
            $(".24hc").addClass("po");
        } else {
            $(".24hc").addClass("ne");
        }

        if (sevend >= 0) {
            $(".7dc").addClass("po");
        } else {
            $(".7dc").addClass("ne");
        }

        const valuef = new Intl.NumberFormat("en", {
            style: "decimal",
            useGrouping: true,
            notation: "compact",
            minimumFractionDigits: 8,
        });

        const volumef = new Intl.NumberFormat("en", {
            style: "decimal",
            useGrouping: true,
        });

        const marketf = new Intl.NumberFormat("en", {
            style: "decimal",
            useGrouping: true,
            // notation: "compact",
        });

        const changef = new Intl.NumberFormat("en", {
            style: "decimal",
            signDisplay: "never",
            useGrouping: true,
            maximumFractionDigits: 2,
        });

        $(".value").append(valuef.format(value));
        $(".volume").append(volumef.format(volume));
        $(".1hc").append(changef.format(oneh));
        $(".24hc").append(changef.format(fourh));
        $(".7dc").append(changef.format(sevend));
        $(".marketcap").append(marketf.format(marketcap));

        // console.log(data);
        // console.log(value);
        // console.log(volume);
        // console.log(oneh);
        // console.log(fourh);
        // console.log(sevend);
    }
);

$.getJSON(
    "https://uoiwpt8d40.execute-api.eu-west-1.amazonaws.com/stats?name=mars",
    function (records) {
        var burned = records.burned;
        var hodlers = records.total_holders;
        var liquid = records.liquidity;

        formatter = new Intl.NumberFormat("en", {
            style: "decimal",
            useGrouping: true,
        });

        $(".burned").append(formatter.format(+burned / 1_000_000_000_000_000_000_000) + " T");
        $(".hodlers").append(formatter.format(hodlers));
        $(".liquid").append(formatter.format(liquid));

        // console.log(burned);
        console.log(records);
    }
);

// setTimeout ( () => {
// 		var modal = document.getElementById ( "myModal" );
//
// 		// Get the <span> element that closes the modal
// 		var span = document.getElementById ( 'close-modal' );
//
// 		modal.style.display = "flex";
//
// 		// When the user clicks on <span> (x), close the modal
// 		span.onclick = () => {
// 				console.error ( modal );
// 				modal.style.display = "none";
// 		};
//
// 		// When the user clicks anywhere outside of the modal, close it
// 		window.onclick = function ( event ) {
// 				if ( event.target == modal ) {
// 						modal.style.display = "none";
// 				}
// 		};
// }, 3000 );
