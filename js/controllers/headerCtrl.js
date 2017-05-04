angular.module('greatWestern').controller('headerCtrl', function($scope) {
    var $ = angular.element;
    $scope.menuOpen = false;

    $scope.showMenu = function() {
        $scope.menuOpen = !$scope.menuOpen;
        $('.header__container-nav').slideToggle();
    }

    $scope.positionTriangle = function() {
        var currentPath = window.location.pathname;
        var targetLink = '';

        switch(currentPath) {
            case '/':
                targetLink = '.js-home';
                break;
            default:
                //Have a party!
        }

        var posLeft = $(targetLink).position().left - 3;
        var halfWidth = $(targetLink).outerWidth() / 2;

        $('.header__whiteTriangle').animate({
            left: (posLeft + halfWidth) + "px"
        }, 100);
    }

    $scope.positionTriangle();

    $(window).resize(function() {
        $scope.positionTriangle();
    });

});
