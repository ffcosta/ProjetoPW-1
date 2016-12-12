(function () {
    angular.module('MyApp')
        .controller('MyAppCtrl', MyAppCtrl);

    function MyAppCtrl($scope, eventosService, usersService) {



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

      $scope.carregarEvento = function(evento){
          $scope.eventos = evento;
      }



    }
})();
