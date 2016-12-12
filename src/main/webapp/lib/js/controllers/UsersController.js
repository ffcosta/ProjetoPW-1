angular.module('MyApp').controller('UsersController', UsersController);

function UsersController($scope, $http, usersService) {


    $scope.user = {
        'usuario': '',
        'senha': '',
        'codigo': ''
    };

    $scope.cadastrar = function () {
        usersService.salvarUsers($scope.user)
            .then(function (response) {
                console.log('Usuário cadastrado!!');
                console.log(response.data);
            }, function (erro) {
                console.log(erro);
            });
    };


}