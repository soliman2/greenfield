$(function () {

    // Start Navbar Menu




    // Button Togell To Show and Hide Menu
    $(".navbar_button").click(function () {
        $(".nanbar_overlay").fadeIn();
        $(".nanbar_menu").animate({
            right: 0 //Change
        }, 500);

    });

    // Overlay Click To  Hide Menu
    $(".nanbar_overlay").click(function () {
        $(this).fadeOut("slow");
        $(".nanbar_overlay").animate({
            right: -260 //Change
        }, 500);

    });
    $(" .nanbar_overlay").children().click(function (e) {
        e.stopPropagation();
    });


    // Hiden Menu in Mobile By Using Esc Button
    $(document).keydown(function (e) {
        if (e.keyCode == 27)
            $(".nanbar_overlay").fadeOut("slow");
    });

    /*======= Backgrounds ======*/
    $("[data-src]").each(function () {
        var backgroundImage = $(this).attr("data-src");
        $(this).css("background-image", "url(" + backgroundImage + ")");
    });


    /**Start Header Slider **/
    $('.header_slider-js').slick({
        dots: true,
        arrows: false,
        //        rtl:true,
        autoplay: true,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
    });

    /**Start Webiner Slider **/
    $('.our_product-js').slick({
        //  dots: true,
        //        rtl:true,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    //        dots: true
                }
    },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
    },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
    });
    /**End Webiner Slider **/

    /**Start Our Company Slider **/
    $('.other_product-js').slick({
        //  dots: true,
        //        rtl:true,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    //        dots: true
                }
    },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
    },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
    });
    /**End Our Company **/



    //Button Go to Top Hidden and Show
    $(window).scroll(function () {

        var buttonUp = $(".go_up-js");

        if ($(window).scrollTop() >= 400) {
            buttonUp.fadeIn(1000);
        } else {
            buttonUp.fadeOut(1000);

        }


    });

    //Button Click To Scroll to top
    $(".go_up-js").on('click', function () {
        $('html,body').animate({
            scrollTop: 0
        }, 1000)
    });


    /*************Start Style For Single Page************/
    /******Services Page*****/
    /**Start Webiner Slider **/
    $('.services_department-slider').slick({
        arrows: false,
        dots: true,
        //  rtl:true,
        infinite: true,
        autoplay: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
    });
    /**End Webiner Slider **/

    /****Services Page Tabs*******/
    $(".sidebar li:first-child").addClass("active");

    //Tagle Active Class
    $(".sidebar li").click(function () {
        $(this).addClass("active").siblings().removeClass("active");

        //Hide All Content
        $(".all_tabs > div").hide();

        //Show Dive With This Link
        $('.' + $(this).data('class')).fadeIn(1000);
    });


    /**Start Webiner Slider **/
    $('.tab_content-slide-js').slick({
        arrows: false,
        dots: true,
        //  rtl:true,
        infinite: true,
        autoplay: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
    });
    /**End Webiner Slider **/

});
