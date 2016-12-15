angular.module('MyApp').service('loginService', loginService);

function loginService($rootScope, $location, usersService) {

    this.validaLogin = function (user) {

        var usuarios = [{}];

        usersService.retornarUsers()
            .then(function (response) {
                usuarios = response.data;
                verificarLogin();
                console.log('Usuarios recebeu user');
            }, function (erro) {
                console.log(erro);
            });

        var verificarLogin = function () {
            angular.forEach(usuarios, function (value, index) {
                if (value.usuario === user.usuario && value.senha === user.senha) {
                    delete value.senha;
                    $rootScope.usuarioLogado = value;
                    $location.path('/home');
                }
            });
        };
    };

    this.logout = function () {
        $rootScope.usuarioLogado = null;
        $location.path('/home');
    }


}