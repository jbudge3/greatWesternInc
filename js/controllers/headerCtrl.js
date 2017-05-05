angular.module('greatWestern').controller('headerCtrl', function($scope) {
    var $ = angular.element;
    $scope.menuOpen = false;

    $scope.showMenu = function() {
        $scope.menuOpen = !$scope.menuOpen;
        $('.header__container-nav').slideToggle();
    }

    $scope.positionTriangle = function() {
        var currentPath = window.location.hash;
        var targetLink = '';

        switch (currentPath) {
            case '#/':
                targetLink = '.js-home';
                break;
            case '#/gallery':
                targetLink = '.js-gallery';
                break;
            default:
                //Have a party!
        }

        console.log(currentPath);

        var posLeft = $(targetLink).position().left - 3;
        var halfWidth = $(targetLink).outerWidth() / 2;

        $('.header__whiteTriangle').animate({
            left: (posLeft + halfWidth) + "px"
        }, 100);
    }

    $(document).ready(function() {
        $scope.positionTriangle();
    });


    $(window).resize(function() {
        $scope.positionTriangle();
    });

    var myElement = document.querySelector(".header__container1");
    var headroom  = new Headroom(myElement);
    headroom.init();

});
