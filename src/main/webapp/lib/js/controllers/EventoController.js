angular.module('MyApp').controller('EventoController',EventoController );



function EventoController($scope, $routeParams, $location, eventosService){
  
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
                //$scope.listar();
                var indiceDoEvento = $scope.eventos.indexOf(evento);
                $scope.eventos.splice(indiceDoEvento,1);
                $scope.mensagemInfo = 'Evento excluído com sucesso!';
            }, function (erro) {
                console.log(erro);
                $scope.mensagemDanger = 'Não foi possível excluir o evento!'
            });
    };



}

