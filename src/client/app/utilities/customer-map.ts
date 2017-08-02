import Customer from '../models/crmsystem/customer';

class CustomerMap {
    static transform(customerObj: any): Customer {
        let customer = new Customer(
            customerObj.id,
            customerObj.name,
            customerObj.address,
            customerObj.credit,
            customerObj.status,
            customerObj.remarks);

        return customer;
    }
}

export default CustomerMap;
