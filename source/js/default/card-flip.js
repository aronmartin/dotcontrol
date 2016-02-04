(function () {
    'use strict';

    var $card = $("[data-card-flip]");

    $($card).on("click", function () {
        if ($(this).hasClass("flipped")) {
            $($card).removeClass("flipped");
            $(this).removeClass("flipped");
            $(".block--wat-kun-je-met__item").removeClass("scaled");
        } else {
            $(".block--wat-kun-je-met__item").removeClass("scaled");
            $($card).removeClass("flipped");
            $(this).addClass("flipped");
        }
    });
})();
