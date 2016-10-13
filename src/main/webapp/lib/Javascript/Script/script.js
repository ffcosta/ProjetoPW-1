var $j = jQuery.noConflict();

var user = {
	username:'',
	password:'',
	email:''
};

var novoLogin = angular.module("novoLogin",[]);

novoLogin.controller("novoLoginCtrl",function($scope){
	//Validando senhas inconsistentes
	$scope.cadastrar = function(){
		if($scope.senha != $scope.senha_confirm) {
			$j('.erro-senha').show();
			$scope.erro = "Senhas inconsistentes!!!";
			$scope.submitForm = null;
			$j('.submit-sucess').hide();
			$j('#ir-login').attr("href","#logincad");
		}
		else{
				$j('.submit-sucess').show();
				$scope.sucess = "Formulário submetido com sucesso!!";
				$j('.erro-senha').hide();
				user.username = $scope.usuario;
				user.password = $scope.senha;
				user.email = $scope.email;
				$j('#ir-login').attr("href","page_login.html");
		}
	};
});


