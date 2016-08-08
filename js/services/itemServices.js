/**
 * Created by apiltiwari on 8/5/16.
 */
angular.module('app').service('itemListService', function () {

    this.itemTypes = [{'itemDescp': 'Electronics', 'itemId': '1'},
        {'itemDescp': 'Home Appliances', 'itemId': '2'},
        {'itemDescp': 'Kitchen Utensils', 'itemId': '3'},
        {'itemDescp': 'Stationery', 'itemId': '4'},
        {'itemDescp': 'Grocery', 'itemId': '5'},
        {'itemDescp': 'Vehicles', 'itemId': '6'}];
    this.items = [{
        'itemName': 'Mac Book Pro, Electronics',
        'price': '$1499.00',
        'itemType': this.itemTypes[0].itemId,
        'description': 'This is the latest macbook available in the market, with high performance and best processing ever'
    },
        {
            'itemName': 'Mac Book Home Appliances',
            'price': '$1499.00',
            'itemType': this.itemTypes[1].itemId,
            'description': 'This is the latest macbook available in the market, with high performance and best processing ever'
        },
        {
            'itemName': 'Mac Pro',
            'price': '$1499.00',
            'itemType': this.itemTypes[2].itemId,
            'description': 'This is the latest macbook available in the market, with high performance and best processing ever'
        },
        {
            'itemName': 'Book Pro',
            'price': '$1499.00',
            'itemType': this.itemTypes[3].itemId,
            'description': 'This is the latest macbook available in the market, with high performance and best processing ever'
        },
        {
            'itemName': 'Mac Book Pro west',
            'price': '$1499.00',
            'itemType': this.itemTypes[4].itemId,
            'description': 'This is the latest macbook available in the market, with high performance and best processing ever'
        },
        {
            'itemName': 'Mac Book Pro',
            'price': '$1499.00',
            'itemType': this.itemTypes[5].itemId,
            'description': 'This is the latest macbook available in the market, with high performance and best processing ever'
        }];
});