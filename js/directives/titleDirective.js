/**
 * Created by apiltiwari on 8/4/16.
 */
angular.module('app').directive('titleDirective', [function ($scope) {
return{
    restrict:'EA',
    templateUrl:'/angular_final_project/views/header.html',
    link:function ($scope) {
       // alert('this is inside directive');
    }
    // controller:function ($scope) {
    //     $scope.test="HELLO WORLD, I am from the controller inside the directive";
    // }

};
}]);