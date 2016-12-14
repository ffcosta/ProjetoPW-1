angular.module('MyApp').factory('usersService', usersService);

function usersService($http) {

    var _salvarUsers = function(usuario){
		return $http.post('http://localhost:9090/angular/api/usuarios/cadastrar', usuario);
	}
	
	var _retornarUsers = function(){
		return $http.get('http://localhost:9090/angular/api/usuarios/todos');
	}

	return {
		salvarUsers : _salvarUsers,
		retornarUsers : _retornarUsers
	};

}