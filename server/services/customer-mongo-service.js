/**
 * Created by Ramkumar on 12/19/2015.
 */
var MongoDB = require('mongodb');
var Customer = require('../models/customer')

var mongoDbConnectionString = "mongodb://ramasuspc:27017/crmsystem";
var mongoClient = MongoDB.MongoClient;

function CustomerService() {
}

CustomerService.prototype.getAllCustomers = function (callback) {
    mongoClient.connect(mongoDbConnectionString, function (error, db) {
        if (error) throw error;

        if (db) {
            db.collection('customers', function (error, collection) {
                if (error) throw error;

                if (collection) {
                    collection.find({}).toArray(
                        function (error, records) {
                            if (db) db.close();
                            if (error) throw error;

                            if (typeof callback === 'function')
                                callback(records);
                        });
                }
            });
        }
    });
};

CustomerService.prototype.getCustomer = function (id, callback) {
    if (id) {
        mongoClient.connect(mongoDbConnectionString, function (error, db) {
            if (error) throw error;

            if (db) {
                db.collection('customers', function (error, collection) {
                    if (error) throw error;

                    if (collection) {
                        collection.findOne({id: parseInt(id)},
                            function (error, record) {
                                if (db) db.close();
                                if (error) throw error;

                                if (typeof callback === 'function')
                                    callback(record);
                            });
                    }
                });
            }
        });
    }
};

CustomerService.prototype.addCustomer = function (customer, callback) {
    if (customer) {
        mongoClient.connect(mongoDbConnectionString, function (error, db) {
            if (error) throw error;

            if (db) {
                db.collection('customers', function (error, collection) {
                    if (error) throw error;

                    if (collection) {
                        collection.insert(customer, function (error, status) {
                            if (db) db.close();
                            if (error) throw error;

                            if (typeof callback === 'function')
                                callback(status);
                        });
                    }
                });
            }
        });
    }
};

module.exports = CustomerService;