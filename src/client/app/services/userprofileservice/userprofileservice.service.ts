import { Inject } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import IUserProfileService from './iuserprofileservice.service';
import AUTH_STORAGE_SERVICE from '../authstorageservice/authstorageservice.tokens';
import IAuthStorageService from '../authstorageservice/iauthstorageservice.service';

const MIN_TOKEN_LENGTH: number = 10;

class UserProfileService implements IUserProfileService {
    private subject: Subject<boolean>;

    constructor(
        @Inject(AUTH_STORAGE_SERVICE) private authStorageService: IAuthStorageService) {
        this.subject = new Subject<boolean>();
    }

    isUserAuthenticated(): boolean {
        let status = false;

        if (this.authStorageService) {
            let token = this.authStorageService.getAuthToken();

            if (token && token.length >= MIN_TOKEN_LENGTH) {
                status = true;
            }
        }

        return status;
    }

    broadcast(): void {
        let status = this.isUserAuthenticated();

        this.subject.next(status);
    }

    getSubject(): Subject<boolean> {
        return this.subject;
    }
}

export default UserProfileService;
