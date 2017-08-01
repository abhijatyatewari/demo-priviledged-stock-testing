import { RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import HomeComponent from '../../components/home/home.component';
import AboutUsComponent from '../../components/aboutus/aboutus.component';

let routeEntries = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'about-us',
        component: AboutUsComponent
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    }
];

let sharedRouteEntries: ModuleWithProviders =
    RouterModule.forRoot(routeEntries);

export default sharedRouteEntries;
