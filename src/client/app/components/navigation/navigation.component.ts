import { Component, Inject, OnInit } from '@angular/core';
import IUserProfileService from '../../services/userprofileservice/iuserprofileservice.service';
import USER_PROFILE_SERVICE from '../../services/userprofileservice/userprofileservice.tokens';

let COMPONENT_DECLARATIONS: any = {
    moduleId: module.id,
    templateUrl: 'navigation.component.html',
    selector: 'navigation-component'
};

@Component(COMPONENT_DECLARATIONS)
class NavigationComponent implements OnInit {
    public loginStatus: boolean = false;

    constructor(
        @Inject(USER_PROFILE_SERVICE) private userprofileservice: IUserProfileService) {
        console.log('Application Navigation Component Initialized!');
    }

    ngOnInit() {
        console.log('Login Status : ' + this.loginStatus);
        if (this.userprofileservice) {
            let subject = this.userprofileservice.getSubject();

            subject.subscribe(
                status => this.loginStatus = status);
        }
    }
}

export default NavigationComponent;
