import { Http, Headers, RequestOptions } from '@angular/http';
import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import IAuthenticationService from './iauthenticationservice.service';
import { AUTH_SERVICE_URL } from './authenticationservice.tokens';

const MIN_TOKEN_LENGTH: number = 10;
const AUTHENTICATION_TOKEN_ERROR: string = 'Unable to Receive Valid Authentication Token!';

@Injectable()
class AuthenticationService implements IAuthenticationService {
    private serviceUrl: string = '';

    constructor(
        @Inject(AUTH_SERVICE_URL) private serviceBaseUrl: string,
        private httpService: Http) {
        this.serviceUrl = `${serviceBaseUrl}/authenticate`;
    }

    authenticate(userName: string, password: string): Observable<string> {
        let result: Observable<string>;

        if (this.httpService) {
            let credentials = {
                userName,
                password
            };

            result = this.httpService.post(this.serviceUrl, credentials)
                .map(response => {
                    let data = response.json();
                    let validation = data && data.token &&
                        data.token.length >= MIN_TOKEN_LENGTH;

                    if (!validation)
                        throw new Error(AUTHENTICATION_TOKEN_ERROR);

                    return data.token;
                });
        }

        return result;
    }
}

export default AuthenticationService;
