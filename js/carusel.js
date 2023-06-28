$(document).ready(function () {
    const timeAnimation = 2 * 1000;

    const images = [
        'images/logo.webp', //0
        'images/Gats.jpg',//1
        'images/HONDA.jpg',//2
        'images/avatars/man.png',//3
        'images/avatars/woman.jpg',//4
    ];

    let index = 0;

    init();

    $('.btn-next').click(function () {
        index = cyrcleIndex(index + 1);
        moveToImage('.next');
    });

    $('.btn-prev').click(function () {
        index = cyrcleIndex(index - 1);
        moveToImage('.prev');
    });
    $('.go').click(function () {
        let newtest = $('.currentIndex').val() - 0;
        index = newtest;
        const imageUrl = images[newtest];
        $('.next').attr('src', imageUrl);
        moveToImage('.next');
    });
    $('.btn-newImg').click(function () {
        let newURL = $('.addNewImg').val();
        images.push(newURL);
        init();

    });
    $('.o-blocks a').click(function () {
        const newIndex = $(this).attr('index') - 0;
        index = newIndex;
        const imageUrl = images[index];
        $('.next').attr('src', imageUrl);
        moveToImage('.next');

        // updateImagesBaseOnIndex();
    });

    function moveToImage(blockSelector) {
        $('.center').animate(
            {
                width: 0
            },
            timeAnimation);

        $(blockSelector).animate(
            {
                width: 100
            },
            timeAnimation,
            'swing',
            function () {
                //At the end of animation
                updateImagesBaseOnIndex();
                $('.center').css('width', '100px');
                $(blockSelector).css('width', '0');
            });
    }

    function updateImagesBaseOnIndex() {
        let prevIndex = cyrcleIndex(index - 1);
        let nextIndex = cyrcleIndex(index + 1);

        $('.prev').attr('src', images[prevIndex]);
        $('.center').attr('src', images[index]);
        $('.next').attr('src', images[nextIndex]);

        $('.currentIndex').val(index);

        $(`.o-blocks a`).text('o');
        $(`.o-blocks a[index=${index}]`).text('x');
    }

    function cyrcleIndex(index) {
        let goodIndex = index;
        if (goodIndex < 0) {
            goodIndex = images.length - 1;
        }

        if (goodIndex >= images.length) {
            goodIndex = 0;
        }

        return goodIndex;
    }

    function init() {
        $('.o-blocks').empty();
        for (let i = 0; i < images.length; i++) {
            //const oTag = $('<a>');
            const oTagJquery = $(document.createElement('a'));
            oTagJquery.text('o');
            oTagJquery.attr('index', i);
            $('.o-blocks').append(oTagJquery);
        }

        updateImagesBaseOnIndex();
    }
});
