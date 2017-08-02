import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import SigninComponent from '../../components/signin/signin.component';

let routeEntries = [
    {
        path: 'sign-in',
        component: SigninComponent
    }
];

let securityRouteEntries: ModuleWithProviders =
    RouterModule.forRoot(routeEntries);

export default securityRouteEntries;
