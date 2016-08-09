/**
 * Created by macbooktiwari on 8/5/16.
 */
angular.module('app').service('itemListService', function () {

    this.itemTypes = [{'itemDescp': 'Electronics', 'itemId': '1'},
        {'itemDescp': 'Home Appliances', 'itemId': '2'},
        {'itemDescp': 'Kitchen Utensils', 'itemId': '3'},
        {'itemDescp': 'Stationery', 'itemId': '4'},
        {'itemDescp': 'Grocery', 'itemId': '5'},
        {'itemDescp': 'Vehicles', 'itemId': '6'}];
    this.items = [{
        'src': '/angular_final_project/images/macbook.jpg',
        'itemName': 'Mac Book Pro, Electronics',
        'price': '$1499.00',
        'itemType': this.itemTypes[0].itemId,
        'description': 'This is the latest macbook available in the market, with high performance and best processing ever'
    }, {
        'src': '/angular_final_project/images/macbook.jpg',
        'itemName': 'Iphone 6S',
        'price': '$1499.00',
        'itemType': this.itemTypes[0].itemId,
        'description': 'This is the latest macbook available in the market, with high performance and best processing ever'
    }, {
        'src': '/angular_final_project/images/macbook.jpg',
        'itemName': 'Samsung Note 5',
        'price': '$1499.00',
        'itemType': this.itemTypes[0].itemId,
        'description': 'This is the latest macbook available in the market, with high performance and best processing ever'
    }, {
        'src': '/angular_final_project/images/macbook.jpg',
        'itemName': 'Apple Watch',
        'price': '$1499.00',
        'itemType': this.itemTypes[0].itemId,
        'description': 'This is the latest macbook available in the market, with high performance and best processing ever'
    }, {
        'src': '/angular_final_project/images/macbook.jpg',
        'itemName': 'Dell XPS',
        'price': '$1499.00',
        'itemType': this.itemTypes[0].itemId,
        'description': 'This is the latest macbook available in the market, with high performance and best processing ever'
    }, {
        'src': '/angular_final_project/images/macbook.jpg',
        'itemName': 'Canon DSLR',
        'price': '$1499.00',
        'itemType': this.itemTypes[0].itemId,
        'description': 'This is the latest macbook available in the market, with high performance and best processing ever'
    },
        {
            'src': '/angular_final_project/images/home.jpg',
            'itemName': 'Vaccum Cleaner',
            'price': '$1499.00',
            'itemType': this.itemTypes[1].itemId,
            'description': 'This is the latest macbook available in the market, with high performance and best processing ever'
        }, {
            'src': '/angular_final_project/images/home.jpg',
            'itemName': 'Table',
            'price': '$1499.00',
            'itemType': this.itemTypes[1].itemId,
            'description': 'This is the latest macbook available in the market, with high performance and best processing ever'
        }, {
            'src': '/angular_final_project/images/home.jpg',
            'itemName': 'Couch',
            'price': '$1499.00',
            'itemType': this.itemTypes[1].itemId,
            'description': 'This is the latest macbook available in the market, with high performance and best processing ever'
        }, {
            'src': '/angular_final_project/images/home.jpg',
            'itemName': 'Sofa',
            'price': '$1499.00',
            'itemType': this.itemTypes[1].itemId,
            'description': 'This is the latest macbook available in the market, with high performance and best processing ever'
        }, {
            'src': '/angular_final_project/images/home.jpg',
            'itemName': 'Bed',
            'price': '$1499.00',
            'itemType': this.itemTypes[1].itemId,
            'description': 'This is the latest macbook available in the market, with high performance and best processing ever'
        }, {
            'src': '/angular_final_project/images/home.jpg',
            'itemName': 'Light',
            'price': '$1499.00',
            'itemType': this.itemTypes[1].itemId,
            'description': 'This is the latest macbook available in the market, with high performance and best processing ever'
        },
        {
            'src': '../images/kitchen.jpg',
            'itemName': 'Pressure Cooker',
            'price': '$1499.00',
            'itemType': this.itemTypes[2].itemId,
            'description': 'This is the latest macbook available in the market, with high performance and best processing ever'
        }, {
            'src': '../images/kitchen.jpg',
            'itemName': 'Toaster',
            'price': '$1499.00',
            'itemType': this.itemTypes[2].itemId,
            'description': 'This is the latest macbook available in the market, with high performance and best processing ever'
        }, {
            'src': '../images/kitchen.jpg',
            'itemName': 'Mac Pro',
            'price': '$1499.00',
            'itemType': this.itemTypes[2].itemId,
            'description': 'This is the latest macbook available in the market, with high performance and best processing ever'
        }, {
            'src': '../images/kitchen.jpg',
            'itemName': 'Filter',
            'price': '$1499.00',
            'itemType': this.itemTypes[2].itemId,
            'description': 'This is the latest macbook available in the market, with high performance and best processing ever'
        }, {
            'src': '../images/kitchen.jpg',
            'itemName': 'Micro wave',
            'price': '$1499.00',
            'itemType': this.itemTypes[2].itemId,
            'description': 'This is the latest macbook available in the market, with high performance and best processing ever'
        }, {
            'src': '../images/kitchen.jpg',
            'itemName': 'Blender',
            'price': '$1499.00',
            'itemType': this.itemTypes[2].itemId,
            'description': 'This is the latest macbook available in the market, with high performance and best processing ever'
        },
        {
            'src': '../images/stationery.jpg',
            'itemName': 'Wrapper',
            'price': '$1499.00',
            'itemType': this.itemTypes[3].itemId,
            'description': 'This is the latest macbook available in the market, with high performance and best processing ever'
        }, {
            'src': '../images/stationery.jpg',
            'itemName': 'Highlighter',
            'price': '$1499.00',
            'itemType': this.itemTypes[3].itemId,
            'description': 'This is the latest macbook available in the market, with high performance and best processing ever'
        }, {
            'src': '../images/stationery.jpg',
            'itemName': 'Note Book',
            'price': '$1499.00',
            'itemType': this.itemTypes[3].itemId,
            'description': 'This is the latest macbook available in the market, with high performance and best processing ever'
        }, {
            'src': '../images/stationery.jpg',
            'itemName': 'Pen',
            'price': '$1499.00',
            'itemType': this.itemTypes[3].itemId,
            'description': 'This is the latest macbook available in the market, with high performance and best processing ever'
        }, {
            'src': '../images/stationery.jpg',
            'itemName': 'Book',
            'price': '$1499.00',
            'itemType': this.itemTypes[3].itemId,
            'description': 'This is the latest macbook available in the market, with high performance and best processing ever'
        }, {
            'src': '../images/stationery.jpg',
            'itemName': 'Book Pro',
            'price': '$1499.00',
            'itemType': this.itemTypes[3].itemId,
            'description': 'This is the latest macbook available in the market, with high performance and best processing ever'
        },
        {
            'src': '../images/grocery.jpg',
            'itemName': 'Potato',
            'price': '$1499.00',
            'itemType': this.itemTypes[4].itemId,
            'description': 'This is the latest macbook available in the market, with high performance and best processing ever'
        }, {
            'src': '../images/grocery.jpg',
            'itemName': 'Corriander',
            'price': '$1499.00',
            'itemType': this.itemTypes[4].itemId,
            'description': 'This is the latest macbook available in the market, with high performance and best processing ever'
        }, {
            'src': '../images/grocery.jpg',
            'itemName': 'Onion',
            'price': '$1499.00',
            'itemType': this.itemTypes[4].itemId,
            'description': 'This is the latest macbook available in the market, with high performance and best processing ever'
        }, {
            'src': '../images/grocery.jpg',
            'itemName': 'Asparagus',
            'price': '$1499.00',
            'itemType': this.itemTypes[4].itemId,
            'description': 'This is the latest macbook available in the market, with high performance and best processing ever'
        }, {
            'src': '../images/grocery.jpg',
            'itemName': 'Brocouli',
            'price': '$1499.00',
            'itemType': this.itemTypes[4].itemId,
            'description': 'This is the latest macbook available in the market, with high performance and best processing ever'
        }, {
            'src': '../images/grocery.jpg',
            'itemName': 'Cauli Flower',
            'price': '$1499.00',
            'itemType': this.itemTypes[4].itemId,
            'description': 'This is the latest macbook available in the market, with high performance and best processing ever'
        },
        {
            'src': '../images/vehicle.jpg',
            'itemName': 'Chevrolet',
            'price': '$1499.00',
            'itemType': this.itemTypes[5].itemId,
            'description': 'This is the latest macbook available in the market, with high performance and best processing ever'
        }, {
            'src': '../images/vehicle.jpg',
            'itemName': 'Volkswagen',
            'price': '$1499.00',
            'itemType': this.itemTypes[5].itemId,
            'description': 'This is the latest macbook available in the market, with high performance and best processing ever'
        }, {
            'src': '../images/vehicle.jpg',
            'itemName': 'Mercedes',
            'price': '$1499.00',
            'itemType': this.itemTypes[5].itemId,
            'description': 'This is the latest macbook available in the market, with high performance and best processing ever'
        }, {
            'src': '../images/vehicle.jpg',
            'itemName': 'Hyundai',
            'price': '$1499.00',
            'itemType': this.itemTypes[5].itemId,
            'description': 'This is the latest macbook available in the market, with high performance and best processing ever'
        }, {
            'src': '../images/vehicle.jpg',
            'itemName': 'Toyota',
            'price': '$1499.00',
            'itemType': this.itemTypes[5].itemId,
            'description': 'This is the latest macbook available in the market, with high performance and best processing ever'
        }, {
            'src': '../images/vehicle.jpg',
            'itemName': 'BMW',
            'price': '$1499.00',
            'itemType': this.itemTypes[5].itemId,
            'description': 'This is the latest macbook available in the market, with high performance and best processing ever'
        }];
});