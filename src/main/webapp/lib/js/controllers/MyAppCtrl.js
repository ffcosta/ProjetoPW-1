(function () {
    angular.module('MyApp')
        .controller('MyAppCtrl', MyAppCtrl);

    function MyAppCtrl($rootScope, $scope, eventosService, usersService, $location) {

        var _eventoSelecionado = null;

        $scope.eventos = {
            'titulo': '',
            'responsavel': '',
            'endereco': '',
            'data': '',
            'categoria': '',
            'descricao': '',
            'foto': '',
            'codigo': ''
        };


        $scope.listar = function () {
            eventosService.getEventos()     // eventosService é um serviço criado para requisições http
                .then(function (response) {
                    $scope.eventos = response.data;
                }, function (erro) {
                    console.log(erro);
                });
        };

        $scope.listar();        // Carregando eventos na página index.html

// Quando clicar em editar executa os eventos abaixo para redirecionar para /home/evento

      $scope.carregarEventoUnico = function(evento){
          _eventoSelecionado = evento;
          $location.path('/home/evento');
      }
      

      //var unregisterRouteChangeStart =
       $scope.$on('$routeChangeStart', onRouteChangeStart);     // Escopo escutando o evento

      function onRouteChangeStart(event, next, current) {       // Evento executado na rota
          //unregisterRouteChangeStart();
          if (next.originalPath === '/home/evento') {       // Verificando o caminho e passando o objeto para a próxima rota
              next.params.evento = _eventoSelecionado;
          }
      }



    }
})();
