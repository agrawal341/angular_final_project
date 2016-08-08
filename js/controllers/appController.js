/**
 * Created by apiltiwari on 8/4/16.
 */
angular.module('app').controller('appController', ['$scope', 'itemListService', function ($scope, itemListService) {
    $scope.selectId=0;
    $scope.itemTypeof = itemListService.itemTypes;
    $scope.itemlist = itemListService.items;

    $scope.setSelectedItem = function (selectedId) {
        $scope.selectId = selectedId;
        //alert($scope.selectId);
        $scope.sortedlist=[];
        for(var i=0;i<$scope.itemlist.length;i++){
            if($scope.itemlist[i].itemType==$scope.selectId){
                console.log($scope.selectId);
                $scope.sortedlist.push($scope.itemlist[i]);
            }
        }
    };

}]);