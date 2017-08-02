/**
 * Created by Ramkumar on 2/2/2016.
 */

var Customer = require('../models/customer');

function CustomerService() {
    this.customers =
        [
            new Customer(1, 'Northwind Traders', 'Bangalore', 12000, true, 'Video provides a powerful way to help you prove your point. When you click Online Video, you can paste in the embed code for the video you want to add. You can also type a keyword to search online for the video that best fits your document.'),
            new Customer(2, 'Eastwind Traders', 'New Delhi', 22000, true, 'Video provides a powerful way to help you prove your point. When you click Online Video, you can paste in the embed code for the video you want to add. You can also type a keyword to search online for the video that best fits your document.'),
            new Customer(3, 'Southwind Traders', 'Chennai', 32000, true, 'Video provides a powerful way to help you prove your point. When you click Online Video, you can paste in the embed code for the video you want to add. You can also type a keyword to search online for the video that best fits your document.'),
            new Customer(4, 'Westwind Traders', 'Hyderabad', 42000, false, 'Video provides a powerful way to help you prove your point. When you click Online Video, you can paste in the embed code for the video you want to add. You can also type a keyword to search online for the video that best fits your document.'),
            new Customer(5, 'Oxyrich Traders', 'Mysore', 52000, false, 'Video provides a powerful way to help you prove your point. When you click Online Video, you can paste in the embed code for the video you want to add. You can also type a keyword to search online for the video that best fits your document.'),
            new Customer(6, 'Adventureworks', 'Mangalore', 62000, true, 'Video provides a powerful way to help you prove your point. When you click Online Video, you can paste in the embed code for the video you want to add. You can also type a keyword to search online for the video that best fits your document.'),
            new Customer(7, 'Footmart', 'Bangalore', 12000, true, 'Video provides a powerful way to help you prove your point. When you click Online Video, you can paste in the embed code for the video you want to add. You can also type a keyword to search online for the video that best fits your document.'),
            new Customer(8, 'ePublishers', 'Bangalore', 72000, false, 'Video provides a powerful way to help you prove your point. When you click Online Video, you can paste in the embed code for the video you want to add. You can also type a keyword to search online for the video that best fits your document.'),
            new Customer(9, 'Citizen Kane', 'Mysore', 12000, true, 'Video provides a powerful way to help you prove your point. When you click Online Video, you can paste in the embed code for the video you want to add. You can also type a keyword to search online for the video that best fits your document.'),
            new Customer(10, 'Adata Corporation', 'Mangalore', 92000, true, 'Video provides a powerful way to help you prove your point. When you click Online Video, you can paste in the embed code for the video you want to add. You can also type a keyword to search online for the video that best fits your document.')
        ];
}

CustomerService.prototype.getAllCustomers = function (callback) {
    if (typeof callback === 'function') {
        callback(this.customers);
    }
};

CustomerService.prototype.getCustomer = function (id, callback) {
    if (id) {
        var filteredCustomer = null;

        for (var index in this.customers) {
            if (this.customers[index].id === id) {
                filteredCustomer = this.customers[index];
                break;
            }
        }

        if (filteredCustomer && typeof callback === 'function') {
            callback(filteredCustomer);
        }
    }
};

CustomerService.prototype.addCustomer = function (customer, callback) {
    var status = false;

    if (customer) {
        this.customers.push(customer);

        status = customer != null;
    }

    if (typeof callback === 'function') {
        callback(status);
    }
};

module.exports = CustomerService;