import { Injectable, Inject } from '@angular/core';
import IAuthStorageService from './iauthstorageservice.service';

const AUTH_TOKEN_KEY: string = 'fidelityatk';

@Injectable()
class AuthStorageService implements IAuthStorageService {
    setAuthToken(token: string): void {
        if (token) {
            window.localStorage.setItem(AUTH_TOKEN_KEY, token);
        }
    }

    unsetAuthToken(): void {
        window.localStorage.removeItem(AUTH_TOKEN_KEY);
    }

    getAuthToken(): string {
        return window.localStorage.getItem(AUTH_TOKEN_KEY);
    }
}

export default AuthStorageService;
