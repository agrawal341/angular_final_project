/**
 * Created by apiltiwari on 8/8/16.
 */
angular.module('app').directive('landingDirective',[function ($scope) {
    return{
        restrict:'EA',
        scope:true,
        templateUrl:'/angular_final_project/views/landing.html',
        link:function () {
            // alert('inside landing directive');
        }
    }
}]);