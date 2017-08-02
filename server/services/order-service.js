/**
 * Created by Ramkumar on 12/19/2015.
 */
var Order = require('../models/order');
var genRand = require('../utilities/random-generator');

function OrderService() {
}

OrderService.prototype.getOrdersByCustomerId = function (customerId) {
    var orders = [];

    if (customerId) {
        var noOfOrders = genRand(1, 15);
        for (var index = 1; index < noOfOrders; index++) {
            var units = genRand(10, 50);
            var amount = genRand(100, 1000);

            var order = new Order(index, new Date(),
                customerId, "Bangalore", units, amount);

            orders.push(order);
        }
    }

    return orders;
};

module.exports = OrderService;