(function () {
    'use strict';

    $(document).ready(function(){

        var $card = $("[data-animate]");

        $card.bind('inview', function (event, visible) {
            var animation = $(this).data("animate");

            if (visible == true) {
                // element is now visible in the viewport
                $(this).addClass(animation);
                alert('found h2!')
            } else {
                // element has gone out of viewport
                $(this).removeClass(animation);
            }
        });

    });


})();
