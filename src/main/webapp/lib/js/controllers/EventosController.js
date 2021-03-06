(function () {
	angular.module('MyApp').controller('EventosController', EventosController);


	function EventosController($scope, eventosService, $routeParams, $filter) {

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

		$scope.mensagemInfo = '';
		$scope.mensagemDanger = '';

		var evt = $routeParams.evento;
    	$scope.eventos = evt;
	

		$scope.cadastrarEvento = function () {
			eventosService.salvarEventos($scope.eventos)
				.then(function (response) {
					//$scope.eventos = response.data;
					$scope.mensagemInfo = 'Evento cadastrado com sucesso!';
				}, function (erro) {
					console.log(erro);
					$scope.mensagemDanger = 'Não foi possível cadastrar o evento';
				});
		};


		$scope.alterarEvento = function () {
			eventosService.alterarEventos($scope.eventos)
				.then(function(){
					$scope.mensageInfo = 'Evento alterado com sucesso';
				},
				function (erro) {
					console.log(erro);
					$scope.mensagemDanger = 'Não foi possível alterar o evento';
				});
		};

		


	}
})();