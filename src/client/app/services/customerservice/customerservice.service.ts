import { Http, Headers } from '@angular/http';
import { Injectable, Inject, OpaqueToken } from '@angular/core';
import { Observable } from 'rxjs';

import { CUSTOMER_SERVICE_BASE_URL } from './customerservice.tokens';
import Customer from '../../models/crmsystem/customer';
import ICustomerService from './icustomerservice.service';
import CustomerMap from '../../utilities/customer-map';

@Injectable()
class CustomerService implements ICustomerService {
    private serviceUrl: string = '';

    constructor( 
        @Inject(CUSTOMER_SERVICE_BASE_URL) private serviceBaseUrl: string,
        private httpService: Http) {

        this.serviceUrl = `${serviceBaseUrl}/api/customers`;
    }

    getCustomers(): Observable<Customer[]> {
        let customers: Observable<Customer[]>;

        if (this.httpService) {
            customers = this.httpService.get(this.serviceUrl)
                .map(response => {
                    let data = response.json();

                    return data.map((item: any) => CustomerMap.transform(item));
                });
        }

        return customers;
    }

    getCustomerDetail(customerId: number): Observable<Customer> {
        let customerDetail: Observable<Customer>;

        if (this.httpService) {
            let detailUrl = `${this.serviceUrl}/${customerId}`;
            customerDetail = this.httpService.get(detailUrl)
                .map(response => {
                    let data = response.json();

                    return CustomerMap.transform(data);
                });
        }

        return customerDetail;
    }

    saveCustomerDetail(customer: Customer): Observable<boolean> {
        let saveStatus: Observable<boolean>;
        let validation = this.httpService && customer;

        if (validation) {
            saveStatus = this.httpService.post(this.serviceUrl, customer)
                .map(response => {
                    let data = response.json();

                    return data && data.status;
                });
        }

        return saveStatus;
    }
}

export default CustomerService;
