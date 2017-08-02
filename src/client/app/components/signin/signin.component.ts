import { Component, Input, Inject } from '@angular/core';
import { Router } from '@angular/router';

import { AUTHENTICATION_SERVICE } from '../../services/authenticationservice/authenticationservice.tokens';
import USER_PROFILE_SERVICE from '../../services/userprofileservice/userprofileservice.tokens';
import AUTH_STORAGE_SERVICE from '../../services/authstorageservice/authstorageservice.tokens';
import IAuthenticationService from '../../services/authenticationservice/iauthenticationservice.service';
import IAuthStorageService from '../../services/authstorageservice/iauthstorageservice.service';
import IUserProfileService from '../../services/userprofileservice/iuserprofileservice.service';

const REDIRECT_PATH_AFTER_SIGNIN: string = "home";
const COMPONENT_DECLARATION = {
    moduleId: module.id,
    selector: 'sign-in-component',
    templateUrl: 'signin.component.html'
};

@Component(COMPONENT_DECLARATION)
class SigninComponent {
    @Input() public userName: string = '';
    @Input() public password: string = '';

    public errorMessage: string = '';

    constructor(
        @Inject(AUTHENTICATION_SERVICE) private authenticationService: IAuthenticationService,
        @Inject(AUTH_STORAGE_SERVICE) private authStorageService: IAuthStorageService,
        @Inject(USER_PROFILE_SERVICE) private userProfileService: IUserProfileService,
        private routerService: Router) {
        console.log('Signin Component Initialized!');
    }

    signin(): void {
        var validation = this.authenticationService && this.authStorageService &&
            this.routerService;

        if (validation) {
            this.authenticationService.authenticate(this.userName, this.password)
                .subscribe(
                result => {
                    if (result) {
                        this.authStorageService.setAuthToken(result);
                        this.routerService.navigate([REDIRECT_PATH_AFTER_SIGNIN]);
                        this.userProfileService.broadcast();
                    }
                },
                error => this.errorMessage = 'Authentication Failed, Error : ' + JSON.stringify(error),
                () => console.log('Signin Completed ...'));
        }
    }
}

export default SigninComponent;
