(function () {
    'use strict';



    //Scroll to links - targets an a element <a href src('#example')>


    $('a[href*=#]:not([href=#])').click(function () {

        //stop scrolling if its still scrolling
        $('html,body').clearQueue();


        if (jQuery(window).width() < 786) {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                $(".text-block").removeClass("linked");
                target.addClass("linked");
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top - 65
                    }, 750);
                    return false;
                }
            }
        } else {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                $(".text-block").removeClass("linked");
                target.addClass("linked");
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top - 90
                    }, 750);
                    return false;
                }


            }
        }
    });


    //Modals

    $(".form-modal-trigger").on("click", function(e) {
        e.preventDefault();
        $("body").addClass("form-modal--open");
    });

    $(".form-modal__close-btn, .form-overlay").on("click", function(e) {
        e.preventDefault();
        $("body").removeClass("form-modal--open");
        $(".form-modal").removeClass("done");
    });


    $(".lead__modal-trigger").on("click", function(e) {
        e.preventDefault();
        $("body").addClass("video-modal--open");
    });

    $(".video-modal__close-btn, .video-overlay").on("click", function(e) {
        e.preventDefault();
        $("body").removeClass("video-modal--open");
    });


    //Form


    $(".form-modal__form__submit").on("click", function(e) {

    });









    //Video depend -> froogaloop

    var iframe = document.getElementById('video');

    var player = $f(iframe);

    $(".lead__modal-trigger").on("click", function() {
        player.api("play");
    });

    $(".video-overlay, .video-modal__close-btn").on("click", function() {
        player.api("pause");
    });


    //

    //ifscrolled

    $(window).scroll(function () {

        //if I scroll more than 50px...
        if ($(window).scrollTop() > 1) {
            $(".navbar").addClass("is-scrolled");
        } else {
            if ($(".navbar").hasClass("is-scrolled")) {
                $(".navbar").removeClass("is-scrolled");
            }
        }
    });










    // Slick Carousel

    $('.carousel__list').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 700,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 10000,
        prevArrow: "<div class='slick-prev control'><i class='icon-chevron-left'></i></div>",
        nextArrow: "<div class='slick-next control'><i class='icon-chevron-right'></i></div>"
    });





    $(".form-modal-trigger").on("click", function(){
        $('#contactform').submit(function(){

            var action = $(this).attr('action');

            $("#message").slideUp(750,function() {
                $('#message').hide();

                $('#submit').attr('disabled','disabled');

                var naam = $("#name").val();
                $(".form-modal__succes__name").html(naam);

                $.post(action, {
                        name: $('#name').val(),
                        email: $('#email').val(),
                        phone: $('#phone').val(),
                        comments: $('#comments').val()
                    },
                    function(data){
                        document.getElementById('message').innerHTML = data;
                        $('#message').slideDown('slow');
                        $('#contactform img.loader').fadeOut('slow',function(){$(this).remove()});
                        $('#submit').removeAttr('disabled');
                        if(data.match('success') != null) $('#contactform').slideUp('slow');

                        $(".form-modal").addClass("done");
                        $(".form-modal__form")[0].reset();
                    }
                );
            });
            return false;
        });
    });

    $('input, textarea').keyup(function() {
        var empty = false;
        $('input, textarea').each(function() {
            if ($(this).val() == '') {
                empty = true;
            }
        });
        if (empty) {
            $('#submit').attr('disabled', 'disabled'); // updated according to http://stackoverflow.com/questions/7637790/how-to-remove-disabled-attribute-with-jquery-ie
        } else {
            $('#submit').removeAttr('disabled'); // updated according to http://stackoverflow.com/questions/7637790/how-to-remove-disabled-attribute-with-jquery-ie
        }
    });

    $(".test").on("click", function(e){
        e.preventDefault();

        $("body").toggleClass("portfolio--open");

    })








})();
