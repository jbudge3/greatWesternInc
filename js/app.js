angular.module('greatWestern', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                views: {
                    header: {
                        templateUrl: './views/header.html',
                        controller: 'headerCtrl'
                    },
                    body: {
                        templateUrl: './views/home.html',
                        controller: 'homeCtrl'
                    },
                    footer: {
                        templateUrl: './views/footer.html',
                        controller: 'footerCtrl'
                    }
                }
            }).state('gallery', {
                url: '/gallery',
                views: {
                    header: {
                        templateUrl: './views/header.html',
                        controller: 'headerCtrl'
                    },
                    body: {
                        templateUrl: './views/gallery.html',
                        controller: 'galleryCtrl'
                    },
                    footer: {
                        templateUrl: './views/footer.html',
                        controller: 'footerCtrl'
                    }
                }
            });

        $urlRouterProvider.otherwise('/');
    });
