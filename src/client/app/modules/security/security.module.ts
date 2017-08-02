import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Http } from '@angular/http';

import SigninComponent from '../../components/signin/signin.component';
import securityRouteEntries from '../../routing/security/security.routes';
import { AUTH_SERVICE_URL, AUTHENTICATION_SERVICE } from '../../services/authenticationservice/authenticationservice.tokens';
import AUTH_STORAGE_SERVICE from '../../services/authstorageservice/authstorageservice.tokens';
import AuthenticationService from '../../services/authenticationservice/authenticationservice.service';
import AuthStorageService from '../../services/authstorageservice/authstorageservice.service';

const PRODUCTION: string = 'prod';
const MODULE_DECLARATION = {
    imports: [CommonModule, FormsModule, securityRouteEntries],
    declarations: [SigninComponent],
    providers: [
        {
            provide: AUTH_SERVICE_URL,
            useFactory: () => {
                let serviceUrl: string = '';
                let buildType = String('<%= BUILD_TYPE %>');

                if (buildType === PRODUCTION) {
                    serviceUrl = String('<%= PROD_SERVICE_URL %>');
                } else {
                    serviceUrl = String('<%= DEV_SERVICE_URL %>');
                }

                return serviceUrl;
            }
        },
        {
            provide: AUTHENTICATION_SERVICE,
            useClass: AuthenticationService,
            deps: [AUTH_SERVICE_URL, Http]
        }
    ]
};

@NgModule(MODULE_DECLARATION)
class SecurityModule {
    constructor() {
        console.log('Security Module Initialized!');
    }
}

export default SecurityModule;
