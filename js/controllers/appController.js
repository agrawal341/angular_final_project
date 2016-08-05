/**
 * Created by apiltiwari on 8/4/16.
 */
angular.module('app').controller('appController', ['$scope','itemListService', function ($scope, itemListService) {

    $scope.itemLists=itemListService.itemTypes;
    $scope.itemlist=itemListService.items;

}]);