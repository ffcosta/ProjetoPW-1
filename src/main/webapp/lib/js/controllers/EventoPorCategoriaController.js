(function(){
    angular.module('MyApp')
    .controller('EventoPorCategoriaController', EventoPorCategoriaController);

function EventoPorCategoriaController($scope, $rootScope, eventosService) {

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
    
     listar();

     function listar() {
        eventosService.selecionarEventos($rootScope.categoriaSelecionada)     // eventosService é um serviço criado para requisições http
            .then(function (response) {
                $scope.eventos = response.data;
                console.log("Exibindo lista");
                console.log(response.data);
            }, function (erro) {
                console.log(erro);
            });
    };

    

}



})();