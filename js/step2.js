$(document).ready(function () {
    let users = [];

    $('.generateUsers').click(function () {
        const userCount = $('.user-count').val() - 0;
        users = generateUsers(userCount);
        reDrawUsers();
    });

    $('.sortByAge').click(function () {
        sortUserByAge(users);
        reDrawUsers();
    });

    $('.sortByName').click(function () {
        sortUserByName(users);
        reDrawUsers();
    });

    function reDrawUsers() {
        $('.users').empty();
        for (let index = 0; index < users.length; index++) {
            const user = users[index];
            drawUser(user);
        }
    }

    // $('.password').click(function(){
    //     $(this).toggleClass('active');
    // });

    // const userTag = $('.user');
    // userTag.find('.name').text('Ivan');
    // userTag.find('.age').text(20);
    // userTag.find('.avatar').attr('src', 'images/avatars/man.png');

    function drawUser(user) {
        const copyOfUserTag = $('.user.template').clone();
        copyOfUserTag.removeClass('template');

        copyOfUserTag.find('.name').text(user.name);
        copyOfUserTag.find('.age').text(user.age);

        // if (user.isWoman) {
        //     copyOfUserTag.find('.avatar').attr('src', 'images/avatars/woman.jpg');
        // } else {
        //     copyOfUserTag.find('.avatar').attr('src', 'images/avatars/man.png');
        // }

        // const url = user.isWoman
        //     ? 'images/avatars/woman.jpg'
        //     : 'images/avatars/man.png';

        copyOfUserTag
            .find('.avatar')
            .attr('src',
                user.isWoman
                    ? 'images/avatars/woman.jpg'
                    : 'images/avatars/man.png'
            );

        $('.users').append(copyOfUserTag);
    }
});