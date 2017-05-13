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
    });
});
