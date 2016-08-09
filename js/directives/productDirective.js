/**
 * Created by apiltiwari on 8/5/16.
 */
angular.module('app').directive('productDirective',[function ($scope) {
    return{
        restrict:'EA',
        scope:true,
        templateUrl:'/angular_final_project/views/products.html',
        link:function () {
           // alert('inside product directive');
        },
        controller:'appController'
            

    }
}]);