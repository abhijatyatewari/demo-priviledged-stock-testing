import { OpaqueToken } from '@angular/core';

const CUSTOMER_SERVICE_BASE_URL: OpaqueToken =
    new OpaqueToken('customerServiceBaseUrl');

const CUSTOMER_SERVICE: OpaqueToken =
    new OpaqueToken('customerService');

export {
    CUSTOMER_SERVICE_BASE_URL,
    CUSTOMER_SERVICE
};