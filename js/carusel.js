$(document).ready(function () {
    const timeAnimation = 2 * 1000;

    $('img').click(function () {
        $('.center').animate(
            {
                width: 0
            },
            timeAnimation);

        $('.next').animate(
            {
                width: 100
            },
            timeAnimation,
            'swing',
            function () {
                //At the end of animation
                const urlFirstImage = $('.center').attr('src');
                const urlSecondImage = $('.next').attr('src');

                $('.center').attr('src', urlSecondImage);
                $('.next').attr('src', urlFirstImage);
                $('.center').css('width', '100px');
                $('.next').css('width', '0');
            });
    });

});