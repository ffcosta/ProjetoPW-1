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
        .when('/futebol', {
            templateUrl: 'views/esportes/futebol.html',
        })
        .when('/airsoft', {
            templateUrl: 'views/esportes/airsoft.html',
        })
        .when('/volei', {
            templateUrl: 'views/esportes/volei.html',
        })
        .when('/atletismo', {
            templateUrl: 'views/esportes/atletismo.html',
        })
        .when('/basquete', {
            templateUrl: 'views/esportes/basquete.html',
        })
        .when('/natacao', {
            templateUrl: 'views/esportes/natacao.html',
        })
        .when('/skate', {
            templateUrl: 'views/esportes/skate.html',
        })
        .when('/tenis', {
            templateUrl: 'views/esportes/tenis.html',
        });

    $routeProvider.otherwise({redirectTo: '/home'});
}
