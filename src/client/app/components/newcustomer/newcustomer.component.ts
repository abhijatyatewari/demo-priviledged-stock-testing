import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import Customer from '../../models/crmsystem/customer';
import ICustomerService from '../../services/customerservice/icustomerservice.service';
import { CUSTOMER_SERVICE } from '../../services/customerservice/customerservice.tokens';
import customerFormGroup from './newcustomer.model';

const COMPONENT_DECLARATION = {
    moduleId: module.id,
    selector: 'new-customer-component',
    templateUrl: 'newcustomer.component.html'
};

@Component(COMPONENT_DECLARATION)
class NewCustomerComponent implements OnInit {
    public newCustomerFormGroup: FormGroup;
    public errorMessage: string = '';

    constructor(
        @Inject(CUSTOMER_SERVICE) private customerService: ICustomerService) {
        console.log('New Customer Component Initialized!');
    }

    ngOnInit() {
        this.newCustomerFormGroup = customerFormGroup;
    }

    save() {
        let validation = this.newCustomerFormGroup &&
            this.newCustomerFormGroup.valid;

        if (!validation) {
            this.errorMessage = 'Validation Failed!';
        }
        else {
            let customerObj: any = this.newCustomerFormGroup.value;

            this.customerService.saveCustomerDetail(<Customer>customerObj)
                .subscribe(
                result => console.log('Save Status : ' + result),
                error => this.errorMessage = 'Error Occurred, Details : ' + JSON.stringify(error),
                () => console.log('Customer Form Save Operation Completed'));
        }
    }
}

export default NewCustomerComponent;
