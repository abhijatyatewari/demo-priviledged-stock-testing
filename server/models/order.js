/**
 * Created by Ramkumar on 12/19/2015.
 */

var objFormat = require('../utilities/obj-formatter');

function Order(orderId, orderDate, customer, bilingAddress, units, amount) {
    this.orderId = orderId;
    this.orderDate = orderDate;
    this.customer = customer;
    this.billingAddress = bilingAddress;
    this.units = units;
    this.amount = amount;
}

Order.prototype.format = function() {
    return objFormat(this);
};

module.exports = Order;