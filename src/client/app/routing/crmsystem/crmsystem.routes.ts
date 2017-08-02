import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import CrmSystemComponent from '../../components/crmsystem/crmsystem.component';
import NewCustomerComponent from '../../components/newcustomer/newcustomer.component';

let routeEntries = [
    {
        path: 'crm-system',
        component: CrmSystemComponent
    },
    {
        path: 'new-customer',
        component: NewCustomerComponent
    }
];

let crmSystemRouteEntries = RouterModule.forRoot(routeEntries);

export default crmSystemRouteEntries;
