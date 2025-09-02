$(window).on("load", function () {

    var up = $('#upButton');

    $(window).on('scroll', function () {
        if ($(window).scrollTop() >= 200) {
            up.fadeIn(500);
            //$('#upButton').fadeIn(1000);
        }
        else {
            up.fadeOut(500);
        }

    });

    up.on('click', function () {
        $('html,body').animate({ scrollTop: 0 }, 10);
    });
});