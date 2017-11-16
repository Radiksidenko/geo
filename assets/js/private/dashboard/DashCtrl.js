angular.module('DashMod').controller('DashCtrl', ['$scope', '$http', function ($scope, $http) {
    $scope.getUser = function () {
        console.log('Getting User...');

        $http.get('/getuser_me')
            .then(function onSuccess(user) {
                $scope.user = user.data;
                console.log('lol', user.data);
            })
            .catch(function onError(err) {
                console.log(err);
            })
    };
    $scope.update = function () {
        console.log('update(ok)');

        $http.post('/update', {name: $scope.name,})
            .then(function onSuccess(response) {
                console.log('update(ok,ok)');
            })
            .catch(function onError(err) {
                console.log('Error: ', err);
            })
        $scope.getUser();
        //console.log('update(ok)');
    }
}])