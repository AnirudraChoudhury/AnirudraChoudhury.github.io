angular.module('myApp', [])
.controller('myCtrl', ['$scope','$http', function($scope,$http) {
    $scope.nmsg = "";
    $scope.sendMsg = function() {
        var urle = "https://api.telegram.org/bot847005289:AAFZjuM8WweR5fkWd8fzfAR_qy_HJPrIUx0/sendMessage?chat_id=969149187&parse_mode=HTML&text=<b>"+$scope.name+": </b>"+$scope.msg
        $http({
            method : "GET",
            url : urle
        }).then(function mySuccess(response) {
            $scope.nmsg = "Your Message Sent Success fully";
            $scope.msg = "";
            $scope.name = ""
        }, function myError(response) {
            $scope.nmsg = "Unable To sent the msg";
            $scope.msg = "";
            $scope.name="";
        });
    };
}]);