import { OpaqueToken } from '@angular/core';

const PUSH_NOTIFICATION_SERVICE_URL: OpaqueToken =
    new OpaqueToken('pushNotificationServiceUrl');
const PUSH_NOTIFICATION_SERVICE: OpaqueToken =
    new OpaqueToken('pushNotificationService');

export {
    PUSH_NOTIFICATION_SERVICE_URL,
    PUSH_NOTIFICATION_SERVICE
};
