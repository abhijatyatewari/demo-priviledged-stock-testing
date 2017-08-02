import { Observable } from 'rxjs';
import Customer from '../../models/crmsystem/customer';

interface ICustomerService {
    getCustomers(): Observable<Customer[]>;
    getCustomerDetail(id: number): Observable<Customer>;
    saveCustomerDetail(customer: Customer): Observable<boolean>;
}

export default ICustomerService;
