import { OpaqueToken } from '@angular/core';

const AUTH_SERVICE_URL: OpaqueToken = new OpaqueToken('authServiceBaseUrl');
const AUTHENTICATION_SERVICE: OpaqueToken = new OpaqueToken('authenticationService');

export {
    AUTH_SERVICE_URL,
    AUTHENTICATION_SERVICE
};
