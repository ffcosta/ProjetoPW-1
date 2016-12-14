angular.module('MyApp').controller('EventoController',EventoController );



function EventoController($scope, $routeParams, $location, eventosService){
  
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

// Quando clicar na princial é recebido o objeto com evento.
   var evento = $routeParams.evento;
    $scope.eventos = evento;


$scope.removerEvento = function (evento) {
        eventosService.removerEventos(evento)
            .then(function (response) {
                $scope.listar();
            }, function (erro) {
                console.log(erro);
                $scope.mensagemDanger = 'Não foi possível excluir o evento!'
            });
    };

     $scope.carregarEventoEdit = function(evento){
          _eventoSelecionado = evento;
          $location.path('/home/cadastro-esporte');
      }
      

      //var unregisterRouteChangeStart =
       $scope.$on('$routeChangeStart', onRouteChangeStart);     // Escopo escutando o evento

      function onRouteChangeStart(event, next, current) {       // Evento executado na rota
          //unregisterRouteChangeStart();
          if (next.originalPath === '/home/cadastro-esporte') {       // Verificando o caminho e passando o objeto para a próxima rota
              next.params.evento = _eventoSelecionado;
          }
      }



}

