function sparkle () {
    // $('<div>', {
    //     id: 'sparkle-starshine'
    // }).appendTo ('main');
    //
    // $('<div>', {
    //     class: 'sparkle-template sparkle-shine'
    // }).appendTo ('#sparkle-starshine');


    var div = `
        <div id='sparkle-starshine'>
            <div class='sparkle-template sparkle-shine'></div>
        </div>
    `;
    $('main').append (div);


    var body = $('#sparkle-starshine'),
        template = $('.sparkle-template.sparkle-shine'),
        stars =  200,
        sparkle = 20;

    var size = 'small';
    var createStar = function() {
        template.clone().removeAttr('id').css({
            top: (Math.random() * 100) + '%',
            left: (Math.random() * 100) + '%',
            webkitAnimationDelay: (Math.random() * sparkle) + 's',
            mozAnimationDelay: (Math.random() * sparkle) + 's'
        }).addClass(size).appendTo(body);
    };

    for(var i = 0; i < stars; i++) {
        if(i % 2 === 0) {
            size = 'small';
        } else if(i % 3 === 0) {
            size = 'medium';
        } else {
            size = 'large';
        }

        createStar();
    }
}
