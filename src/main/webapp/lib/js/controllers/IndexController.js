(function(){

angular.module('MyApp').controller('IndexController', IndexController);


    function IndexController($scope, eventosService, $rootScope) {


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

    $scope.categorias = ['Futebol','Voleibol','Natação','Tênis','Skate','Airsoft','Atletismo','Basquetebol'];

    $scope.carregarCategoria = function(categoria){
        $scope.categoriaSelecionada = categoria;
        $scope.listar();
    }

    $scope.mensagemInfo = '';
	$scope.mensagemDanger = '';

    $scope.listar = function () {
        eventosService.getEventos()     // eventosService é um serviço criado para requisições http
            .then(function (response) {
                $scope.eventos = response.data;
                console.log("Exibindo lista");
                console.log(response.data);
            }, function (erro) {
                console.log(erro);
            });
    };

    

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

})();



