var app = angular.module('mainApp', []);
app.controller('loginCtrl', function($scope, $http) {
    $scope.submit = function() {
        $http({
            method: 'POST',
            url: '/login',
            data: $.param($scope.user),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).success(function(data) {
            console.log(data);
            if (data.scode == 1) {
                location.href = '/main';
            }
        });
    }
});