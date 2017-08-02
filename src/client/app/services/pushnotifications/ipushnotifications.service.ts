interface IPushNotificationService {
    registerCallback(callback: (data: any) => void): void;
}

export default IPushNotificationService;
