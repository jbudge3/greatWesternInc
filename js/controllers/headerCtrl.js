angular.module('greatWestern').controller('headerCtrl', function($scope) {
    var $ = angular.element;
    $scope.menuOpen = false;

    $scope.showMenu = function() {
        $scope.menuOpen = !$scope.menuOpen;
        $('.header__container-nav').slideToggle();
    }

});
