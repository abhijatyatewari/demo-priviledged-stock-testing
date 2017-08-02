/**
 * Created by Ramkumar on 12/19/2015.
 */
var express = require('express');
var Customer = require('../models/customer');
var CustomerService = require('../services/customer-service');

var customerRouter = new express.Router();
var customerService = new CustomerService();

customerRouter.get('/', function (request, response) {
    customerService.getAllCustomers(
        function (customers) {
            if (!customers)
                throw new Error("Unable to retrieve Customer Records!");

            response.json(customers);
        });
});

customerRouter.get('/:customerId', function (request, response) {
    var selectedCustomerId = parseInt(request.params.customerId);

    customerService.getCustomer(selectedCustomerId, function (record) {
        if (!record)
            throw new Error("Unable to retrieve specific Customer Record!");

        response.json(record);
    });
});

customerRouter.post('/', function (request, response) {
    var body = request.body;
    var customer = new Customer(body.id, body.name, body.address,
        body.credit, body.status, body.remarks);

    customerService.addCustomer(customer, function (status) {
        if (!status)
            throw new Error("Unable to add a new Record to DB!");

        if (sioimpl) {
            sioimpl.emit('newCustomerRecord', customer);
        }

        response.json({
            status: true
        });
    });
});

module.exports = customerRouter;