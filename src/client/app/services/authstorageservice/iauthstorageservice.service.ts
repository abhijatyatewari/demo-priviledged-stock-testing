import AUTH_SERVICE_URL from './authstorageservice.tokens';

interface IAuthStorageService {
    setAuthToken(token: string): void;
    unsetAuthToken(): void;
    getAuthToken(): string;
}

export default IAuthStorageService;
