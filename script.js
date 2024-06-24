// parallax

$(window).scroll(function() {
    var wscroll = $(this).scrolltop();

    $('section.jumbotron img').css({
        'transform' : 'translate(0px, '+ wscroll/2+'%)'
    });
});