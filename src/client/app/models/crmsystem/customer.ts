import ObjectFormatter from '../../utilities/object-formatter';

class Customer {
    constructor(public id: number, public name: string, public address: string,
        public credit: number, public status: boolean, public remarks: string) { }

    toString() {
        return ObjectFormatter.format(this);
    }
}

export default Customer;
