import { NgModule } from '@angular/core';
import { HttpModule, Http } from '@angular/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import crmSystemRouteEntries from '../../routing/crmsystem/crmsystem.routes';
import CrmSystemComponent from '../../components/crmsystem/crmsystem.component';
import NewCustomerComponent from '../../components/newcustomer/newcustomer.component';
import CustomerViewerComponent from '../../components/customerviewer/customerviewer.component';
import CustomerDetailViewerComponent from '../../components/customerdetailviewer/customerdetailviewer.component';
import CustomerSearchPanelComponent from '../../components/customersearchpanel/customersearchpanel.component';

import PhotoUrlPipe from '../../pipes/photourl/photourl.pipe';
import WherePipe from '../../pipes/where/where.pipe';

import {
    CUSTOMER_SERVICE,
    CUSTOMER_SERVICE_BASE_URL
} from '../../services/customerservice/customerservice.tokens';
import CustomerService from '../../services/customerservice/customerservice.service';

import {
    PUSH_NOTIFICATION_SERVICE_URL,
    PUSH_NOTIFICATION_SERVICE
} from '../../services/pushnotifications/pushnotifications.tokens';

import PushNotificationService from '../../services/pushnotifications/pushnotifications.service';

function getServiceUrl(): string {
    let serviceUrl: string = '';
    let buildType = String('<%= BUILD_TYPE %>');

    if (buildType === PRODUCTION) {
        serviceUrl = String('<%= PROD_SERVICE_URL %>');
    } else {
        serviceUrl = String('<%= DEV_SERVICE_URL %>');
    }

    return serviceUrl;
}

const PRODUCTION: string = 'prod';
const MODULE_DECLARATION: any = {
    imports: [CommonModule, FormsModule, ReactiveFormsModule, HttpModule, crmSystemRouteEntries],
    declarations: [
        CrmSystemComponent, CustomerViewerComponent,
        NewCustomerComponent,
        CustomerSearchPanelComponent,
        CustomerDetailViewerComponent, PhotoUrlPipe, WherePipe
    ],
    providers: [
        {
            provide: CUSTOMER_SERVICE_BASE_URL,
            useFactory: getServiceUrl
        },
        {
            provide: CUSTOMER_SERVICE,
            useClass: CustomerService,
            deps: [CUSTOMER_SERVICE_BASE_URL, Http]
        },
        {
            provide: PUSH_NOTIFICATION_SERVICE_URL,
            useFactory: getServiceUrl
        },
        {
            provide: PUSH_NOTIFICATION_SERVICE,
            useClass: PushNotificationService,
            deps: [PUSH_NOTIFICATION_SERVICE_URL]
        }
    ]
};

@NgModule(MODULE_DECLARATION)
class CrmSystemModule {
    constructor() {
        console.log('Crm System Module Initialized!');
    }
}

export default CrmSystemModule;