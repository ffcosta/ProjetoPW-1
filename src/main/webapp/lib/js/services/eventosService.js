angular.module('MyApp').factory('eventosService', eventosService);

function eventosService($http) {
	var _getEventos = function () {
		return $http.get('http://localhost:9090/angular/api/eventos/todos');
	};

	var _salvarEventos = function (evento) {
		return $http.post('http://localhost:9090/angular/api/eventos/cadastrar', evento);
	}

	var _removerEventos = function (evento) {
		return $http.post('http://localhost:9090/angular/api/eventos/remover', evento);
	}

	var _alterarEventos = function (evento) {
		return $http.post('http://localhost:9090/angular/api/eventos/alterar', evento);
	}

	var _selecionarEventos = function (categoria) {
		return $http
			.get('http://localhost:9090/angular/api/eventos/selecionar', {
				params: { categoria: categoria }
			});
	}


	return {
		getEventos: _getEventos,
		salvarEventos: _salvarEventos,
		removerEventos: _removerEventos,
		alterarEventos: _alterarEventos,
		selecionarEventos: _selecionarEventos
	};
}