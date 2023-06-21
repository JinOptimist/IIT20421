$(document).ready(function () {
    const timeDuration = 60 * 1000
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
        const bordeRadius = 120;
        const marginMax = 177;
        $('.size').animate(
            { smile: 3600 },
            {
                step: function (now) {
                    $('.size').css('transform', 'rotate(' + now + 'deg)');
                    const someFunNumber = now % bordeRadius;
                    const currentForMargin = now % marginMax;

                    console.log(someFunNumber);
                    if (someFunNumber < bordeRadius / 2) {
                        $('.size .red').css('border-radius', `${someFunNumber}px`);
                        $('.size').css('margin-top', `${100 - someFunNumber}px`);
                    } else {
                        $('.size .red').css('border-radius', `${bordeRadius - someFunNumber}px`);
                        $('.size').css('margin-top', `${100 - bordeRadius + someFunNumber}px`);
                    }
                    if (currentForMargin < marginMax / 2) {
                        $('.size').css('margin-left', `${100 - currentForMargin}px`);
                    } else {
                        $('.size').css('margin-left', `${100 - marginMax + currentForMargin}px`);
                    }
                },
                duration: timeDuration
            }
        );
    });
});
