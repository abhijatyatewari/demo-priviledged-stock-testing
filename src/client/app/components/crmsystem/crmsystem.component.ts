import { Component, OpaqueToken, Inject, OnInit } from '@angular/core';

import Customer from '../../models/crmsystem/customer';
import ICustomerService from '../../services/customerservice/icustomerservice.service';
import { CUSTOMER_SERVICE } from '../../services/customerservice/customerservice.tokens';
import { PUSH_NOTIFICATION_SERVICE } from '../../services/pushnotifications/pushnotifications.tokens';
import IPushNotificationService from '../../services/pushnotifications/ipushnotifications.service';

const INVALID_SERVICE_CONTEXT_SPECIFIED: string = 'Invalid Customer Service Context Specified!';
const COMPONENT_DECLARATION = {
    moduleId: module.id,
    selector: 'crm-system-component',
    templateUrl: 'crmsystem.component.html'
};

@Component(COMPONENT_DECLARATION)
class CrmSystemComponent implements OnInit {
    public customers: Customer[] = [];
    public errorMessage: string = '';
    public isLoading: boolean = false;

    constructor(
        @Inject(CUSTOMER_SERVICE) private customerService: ICustomerService,
        @Inject(PUSH_NOTIFICATION_SERVICE) private pushNotificationService: IPushNotificationService) {
        console.log('Crm System Component Initialized!');
        if (!this.customerService)
            throw new Error(INVALID_SERVICE_CONTEXT_SPECIFIED);
    }

    ngOnInit() {
        this.isLoading = true;

        this.pushNotificationService.registerCallback(
            (data: any) => {
                if (this.customers) {
                    this.customers.push(<Customer>data);
                }
            });

        this.customerService.getCustomers()
            .subscribe(
            result => this.customers = result,
            error => this.errorMessage = JSON.stringify(error),
            () => this.isLoading = false);
    }
}

export default CrmSystemComponent;
