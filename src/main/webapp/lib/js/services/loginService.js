angular.module('MyApp').factory('loginService', loginService);

function loginService($http){

    var _getLogin = function(){
        return $http.get('http://localhost:9090/angular/api/usuarios/todos');
    };

    return {
        getLogin : _getLogin
    };

}