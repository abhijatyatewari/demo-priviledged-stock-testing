import { Observable } from 'rxjs/Rx';

interface IAuthenticationService {
    authenticate(userName: string, password: string): Observable<string>;
}

export default IAuthenticationService;
