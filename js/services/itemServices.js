/**
 * Created by apiltiwari on 8/5/16.
 */
angular.module('app').service('itemListService',function () {

    this.itemTypes = ['Electronics', 'Home Appliances', 'Kitchen Utensils', 'Stationery', 'Grocery', 'Vehicles'];
    this.items = [{
        'itemName': 'Mac Book Pro',
        'price': '$1499.00',
        'itemType': this.itemTypes[0],
        'description': 'This is the latest macbook available in the market, with high performance and best processing ever'
    },
        {
            'itemName': 'Mac Book Pro',
            'price': '$1499.00',
            'itemType': this.itemTypes[1],
            'description': 'This is the latest macbook available in the market, with high performance and best processing ever'
        },
        {
            'itemName': 'Mac Book Pro',
            'price': '$1499.00',
            'itemType': this.itemTypes[2],
            'description': 'This is the latest macbook available in the market, with high performance and best processing ever'
        },
        {
            'itemName': 'Mac Book Pro',
            'price': '$1499.00',
            'itemType': this.itemTypes[3],
            'description': 'This is the latest macbook available in the market, with high performance and best processing ever'
        },
        {
            'itemName': 'Mac Book Pro',
            'price': '$1499.00',
            'itemType': this.itemTypes[4],
            'description': 'This is the latest macbook available in the market, with high performance and best processing ever'
        },
        {
            'itemName': 'Mac Book Pro',
            'price': '$1499.00',
            'itemType': this.itemTypes[5],
            'description': 'This is the latest macbook available in the market, with high performance and best processing ever'
        }];
});