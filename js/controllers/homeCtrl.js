angular.module('greatWestern').controller('homeCtrl', function($scope) {
    var $ = angular.element;

    $(document).ready(function(){
        $('.homeContainer__carousel').slick({
        arrows: false,
        dots: true,
        slidesToShow: 1,
        autoplay: true,
        autoplayspeed: 2000,
        mobileFirst: true
        });

        if ($(window).width() < 740) {
            $('.homeContainer__carousel').hide();
            $('.logoAndCall__logo').attr('src', './images/gwi-mobile.png');
        } else {
            $('.homeContainer__mainImageContainer').hide();
        }

        $('.slick-dots').find('button').text('');
    });

});
