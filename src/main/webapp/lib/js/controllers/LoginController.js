angular.module('MyApp').controller('LoginController', LoginController);

function LoginController($scope, loginService) {

    $scope.logar = function(user){
        console.log(user);
        loginService.validaLogin(user);
    }

}