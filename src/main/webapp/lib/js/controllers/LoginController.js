angular.module('MyApp').controller('LoginController', LoginController);

function LoginController($scope, $http, loginService, $rootScope) {

    $rootScope.usuarioLogado = {};

    $scope.user = {
        'usuario': '',
        'senha': '',
        'codigo': ''
    };

    $scope.login = function(){
        loginService.getLogin()
        .then(function(response){
            for(var i = 0 ; i < response.length; i++) {
                if($scope.user.codigo === response[i].codigo 
                && $scope.user.usuario === response[i].usuario && $scope.user.senha === response[i].senha) {
                    $rootScope.usuarioLogado = response[i];
                    break;
                } 
                else if(i === response.length-1 && $scope.user.codigo != response[i].codigo) {
                    alert("Usuário ou senha inválidos!")
                }
            }
        },function(erro){
            console.log(erro);
        });
    };

}