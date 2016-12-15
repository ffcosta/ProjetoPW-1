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
        .when('/home/eventosPorCategoria', {
            templateUrl: 'views/eventosPorCategoria.html',
            controller: 'IndexController'
        })
        .when('/home/eventosHistorico', {
            templateUrl: 'views/eventosHistorico.html',
            controller: 'EventosHistoricoController'
        })
        .when('/home/Futebol', {
            templateUrl: 'views/esportes/futebol.html',
            controller: 'MyAppCtrl'
        })
        .when('/home/Airsoft', {
            templateUrl: 'views/esportes/airsoft.html',
            controller: 'MyAppCtrl'
        })
        .when('/home/Voleibol', {
            templateUrl: 'views/esportes/volei.html',
            controller: 'MyAppCtrl'
        })
        .when('/home/Atletismo', {
            templateUrl: 'views/esportes/atletismo.html',
            controller: 'MyAppCtrl'
        })
        .when('/home/Basquetebol', {
            templateUrl: 'views/esportes/basquete.html',
            controller: 'MyAppCtrl'
        })
        .when('/home/Natação', {
            templateUrl: 'views/esportes/natacao.html',
            controller: 'MyAppCtrl'
        })
        .when('/home/Skate', {
            templateUrl: 'views/esportes/skate.html',
            controller: 'MyAppCtrl'
        })
        .when('/home/Tênis', {
            templateUrl: 'views/esportes/tenis.html',
            controller: 'MyAppCtrl'
        });

    $routeProvider.otherwise({redirectTo: '/home'});
}




