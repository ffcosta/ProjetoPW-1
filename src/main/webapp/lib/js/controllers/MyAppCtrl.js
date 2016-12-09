(function () {
    angular.module('MyApp')
        .controller('MyAppCtrl', MyAppCtrl);

    function MyAppCtrl($scope, $http) {

        $scope.user = {
			'usuario' : '',
			'senha' : ''
		};


        $scope.cadastrar = function () {
            $http.post('http://localhost:9090/angular/api/usuarios/cadastrar', $scope.user)
                .then(function (response) {
                    $scope.user = response.data;
                }, function(erro){
                    console.log(erro);
                }); 
        }
    }
})();
