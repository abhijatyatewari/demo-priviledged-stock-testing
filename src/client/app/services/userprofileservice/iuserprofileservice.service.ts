import { Subject } from 'rxjs';

interface IUserProfileService {
    isUserAuthenticated(): boolean;
    broadcast(): void;
    getSubject(): Subject<boolean>;
}

export default IUserProfileService;
