/**
 * Created by Ramkumar on 12/19/2015.
 */
var express = require('express');
var Order = require('../models/order');
var OrderService = require('../services/order-service');

var orderRouter = new express.Router();
var orderService = new OrderService();

orderRouter.get('/:customerId', function (request, response) {
    var selectedCustomerId = parseInt(request.params.customerId);

    if (!selectedCustomerId)
        throw new Error("Invalid Customer Id Specified!");

    var orders = orderService.getOrdersByCustomerId(selectedCustomerId);

    response.json(orders);
});

module.exports = orderRouter;