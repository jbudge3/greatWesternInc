angular.module('greatWestern').controller('homeCtrl', function($scope) {
    var $ = angular.element;

    $(document).ready(function(){
        $('.testing').slick({
        dots: true,
        slidesToShow: 1,
        autoplay: true,
        autoplayspeed: 2000
        });
    });
});
