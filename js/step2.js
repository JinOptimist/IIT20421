$(document).ready(function () {
    // $('.password').click(function(){
    //     $(this).toggleClass('active');
    // });

    // const userTag = $('.user');
    // userTag.find('.name').text('Ivan');
    // userTag.find('.age').text(20);
    // userTag.find('.avatar').attr('src', 'images/avatars/man.png');

    const users = generateUsers(15);

    for (let index = 0; index < users.length; index++) {
        const user = users[index];
        drawUser(user);
    }


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