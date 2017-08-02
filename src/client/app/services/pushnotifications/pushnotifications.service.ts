import { Injectable, Inject } from '@angular/core';

import IPushNotificationService from './ipushnotifications.service';
import { PUSH_NOTIFICATION_SERVICE_URL } from './pushnotifications.tokens';

const NEW_CUSTOMER_RECORD_EVENT: string = 'newCustomerRecord';
@Injectable()
class PushNotificationService implements IPushNotificationService {
    private socketClient: any;
    private callbacks: ((data: any) => void)[] = [];

    constructor(
        @Inject(PUSH_NOTIFICATION_SERVICE_URL)
        private pushNotificationServiceUrl: string) {
        if (this.pushNotificationServiceUrl) {
            let io: any = (<any>window).io;

            this.socketClient = io.connect(this.pushNotificationServiceUrl);
            this.socketClient.on(NEW_CUSTOMER_RECORD_EVENT,
                (eventData: any) => {
                    for (let callback of this.callbacks) {
                        callback(eventData);
                    }
                });
        }
    }

    registerCallback(callback: (data: any) => void): void {
        if (this.callbacks) {
            this.callbacks.push(callback);

            console.log('Callback Registered ...');
        }
    }
}

export default PushNotificationService;
