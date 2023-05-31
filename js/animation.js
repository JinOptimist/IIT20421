$(document).ready(function () {
    const timeDuration = 10 * 1000
    $('.size').click(function () {
        $('.red').animate(
            {
                width: '0',
            },
            timeDuration);

        $('.green').animate(
            {
                width: '100%',
            },
            timeDuration);
        const bordeRadius = 100;
        $('.size').animate(
            { smile: 360 },
            {
                step: function (now) {
                    $('.size').css('transform', 'rotate(' + now + 'deg)');
                    const someFunNumber = now % bordeRadius;

                    console.log(someFunNumber);
                    if (someFunNumber < bordeRadius / 2) {
                        $('.size .red').css('border-radius', `${someFunNumber}px`);
                        $('.size').css('margin-left', `${100 - someFunNumber}px`);
                    } else {
                        $('.size .red').css('border-radius', `${bordeRadius - someFunNumber}px`);
                        $('.size').css('margin-left', `${100 - bordeRadius + someFunNumber}px`);
                    }
                },
                duration: timeDuration
            }
        );
    });
});