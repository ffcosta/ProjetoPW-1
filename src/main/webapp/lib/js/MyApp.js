angular.module('MyApp', ['ngRoute']).config(configurar);

function configurar($routeProvider) {
    $routeProvider
        .when('/home' ,{
            templateUrl: 'views/principal.html',
            controller: 'MyAppCtrl'
        })
        .when('/home/login', {
            templateUrl: 'views/login/page-login.html',
            controller: 'LoginController'
        })
        .when('/home/login/cadastro-login', {
            templateUrl: 'views/login/cadastro-login.html',
            controller: 'UsersController'
        })
        .when('/home/cadastro-esporte', {
            templateUrl: 'views/cadastro-esporte.html',
            controller: 'EventosController'
        })
        .when('/home/eventos', {
            templateUrl: 'views/eventos.html',
            controller: 'TodosEventosController'
        })
        .when('/home/evento', {
            templateUrl: 'views/evento.html',
            controller: 'EventoController'
        })
        .when('/home/futebol', {
            templateUrl: 'views/esportes/futebol.html',
            controller: 'MyAppCtrl'
        })
        .when('/home/airsoft', {
            templateUrl: 'views/esportes/airsoft.html',
            controller: 'MyAppCtrl'
        })
        .when('/home/volei', {
            templateUrl: 'views/esportes/volei.html',
            controller: 'MyAppCtrl'
        })
        .when('/home/atletismo', {
            templateUrl: 'views/esportes/atletismo.html',
            controller: 'MyAppCtrl'
        })
        .when('/home/basquete', {
            templateUrl: 'views/esportes/basquete.html',
            controller: 'MyAppCtrl'
        })
        .when('/home/natacao', {
            templateUrl: 'views/esportes/natacao.html',
            controller: 'MyAppCtrl'
        })
        .when('/home/skate', {
            templateUrl: 'views/esportes/skate.html',
            controller: 'MyAppCtrl'
        })
        .when('/home/tenis', {
            templateUrl: 'views/esportes/tenis.html',
            controller: 'MyAppCtrl'
        });

    $routeProvider.otherwise({redirectTo: '/home'});
}
