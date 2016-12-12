angular.module('MyApp').controller('TodosEventosController', TodosEventosController);

function TodosEventosController($scope, eventosService) {

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

    

}