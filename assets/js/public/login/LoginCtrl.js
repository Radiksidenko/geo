angular.module('LoginMod').controller('LoginCtrl',['$scope', '$http','toastr', function($scope, $http, toastr){
	console.log('Login Controller initialized...');

	$scope.runLogin = function(){
        io.socket.post('/login', {
        	email: $scope.email, password: $scope.password
        },function (resData, jwRes) {
            window.location = '/dashboard';
        });
	}
}])