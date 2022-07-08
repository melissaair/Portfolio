var height = $('navigation').height();

$(window).scroll(function () {
    if($().scrollTop() > height) {
        $('.navbar').addClass('fixed');
    }else{
        $('.navbar').removeClass('fixed');
    }
});