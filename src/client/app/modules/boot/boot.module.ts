import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Http, RequestOptions, XHRBackend } from '@angular/http';

import BootComponent from '../../components/boot/boot.component';
import SharedModule from '../shared/shared.module';
import CrmSystemModule from '../crmsystem/crmsystem.module';
import SecurityModule from '../security/security.module';

import AUTH_STORAGE_SERVICE from '../../services/authstorageservice/authstorageservice.tokens';
import USER_PROFILE_SERVICE from '../../services/userprofileservice/userprofileservice.tokens';

import AuthStorageService from '../../services/authstorageservice/authstorageservice.service';
import InterceptedHttp from '../../extensibility/intercepted-http';
import UserProfileService from '../../services/userprofileservice/userprofileservice.service';

const MODULE_DECLARATION =
    {
        imports: [BrowserModule, SharedModule, CrmSystemModule, SecurityModule],
        declarations: [BootComponent],
        exports: [BootComponent],
        providers: [
            {
                provide: AUTH_STORAGE_SERVICE,
                useClass: AuthStorageService
            },
            {
                provide: Http,
                useClass: InterceptedHttp,
                deps: [AUTH_STORAGE_SERVICE, XHRBackend, RequestOptions]
            },
            {
                provide: USER_PROFILE_SERVICE,
                useClass: UserProfileService,
                deps: [AUTH_STORAGE_SERVICE]
            }
        ],
        bootstrap: [BootComponent]
    };

@NgModule(MODULE_DECLARATION)
class BootModule {
    constructor() {
        console.log('Boot Module Initialized!');
    }
}

export default BootModule;
