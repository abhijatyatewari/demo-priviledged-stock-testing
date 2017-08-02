/**
 * Created by Ramkumar on 12/19/2015.
 */

var objFormat = require('../utilities/obj-formatter');

function Customer(id, name, address, credit, status, remarks) {
    this.id = id;
    this.name = name;
    this.address = address;
    this.credit = credit;
    this.status = status;
    this.remarks = remarks;
}

Customer.prototype.format = function() {
    return objFormat(this);
};

module.exports = Customer;