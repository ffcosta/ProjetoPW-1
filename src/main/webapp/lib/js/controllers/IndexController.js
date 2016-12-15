(function(){

angular.module('MyApp').controller('IndexController', IndexController);


    function IndexController($scope, eventosService, $rootScope, loginService) {


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
        $rootScope.categoriaSelecionada = categoria;
    }

    $scope.mensagemInfo = '';
	$scope.mensagemDanger = '';

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

    $scope.logout = function(){
        loginService.logout();
    }

    

}

})();



