import {
    Http, RequestOptions, Request, Response,
    RequestOptionsArgs, Headers, XHRBackend
} from '@angular/http';

import { Inject } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import AUTH_STORAGE_SERVICE from '../services/authstorageservice/authstorageservice.tokens';
import IAuthStorageService from '../services/authstorageservice/iauthstorageservice.service';

const CONTENT_TYPE_HEADER: string = 'Content-Type';
const JSON_CONTENT_TYPE: string = 'application/json';
const ACCEPT_HEADER: string = 'Accept';
const AUTHORIZATION_HEADER: string = 'Authorization';

class InterceptedHttp extends Http {
    constructor(
        @Inject(AUTH_STORAGE_SERVICE) private authStorageService: IAuthStorageService,
        private backend: XHRBackend, private requestOptions: RequestOptions) {
        super(backend, requestOptions);
    }

    request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
        let requestOptions = this.getRequestOptionsArgs(url);
        
        return super.request(url, requestOptions);
    }

    private getRequestOptionsArgs(options: RequestOptionsArgs): RequestOptionsArgs {
        options = options || new RequestOptions();
        options.headers = options.headers || new Headers();

        options.headers.append(CONTENT_TYPE_HEADER, JSON_CONTENT_TYPE);
        options.headers.append(ACCEPT_HEADER, JSON_CONTENT_TYPE);

        let authenticationToken = this.authStorageService.getAuthToken();

        if (authenticationToken) {
            let authorizationHeaderValue = `Bearer ${authenticationToken}`;

            options.headers.append(AUTHORIZATION_HEADER, authorizationHeaderValue);
        }

        return options;
    }
}

export default InterceptedHttp;
