angular.module('MyApp').controller('TodosEventosController', TodosEventosController);

function TodosEventosController($scope, eventosService, $location, $rootScope) {

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



    $scope.mensagemInfo = '';
	$scope.mensagemDanger = '';

    $scope.listar = function () {
        eventosService.getEventos()     // eventosService é um serviço criado para requisições http
            .then(function (response) {
                $scope.eventos = response.data;
                console.log("Exibindo lista");
            }, function (erro) {
                console.log(erro);
            });
    };

    $scope.listar();        // Carregando eventos na página index.html

    $scope.removerEvento = function (evento) {
        eventosService.removerEventos(evento)
            .then(function (response) {
                //$scope.listar();
                var indiceDoEvento = $scope.eventos.indexOf(evento);
                $scope.eventos.splice(indiceDoEvento,1);
                $scope.mensagemInfo = 'Evento excluído com sucesso!';
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