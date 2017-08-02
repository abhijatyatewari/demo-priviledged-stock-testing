import { FormsModule } from '@angular/forms';
import { async, TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';
import CrmSystemComponent from './crmsystem.component';
import CustomerDetailViewerComponent from '../../components/customerdetailviewer/customerdetailviewer.component';
import CustomerViewerComponent from '../../components/customerviewer/customerviewer.component';
import CustomerSearchPanelComponent from '../../components/customersearchpanel/customersearchpanel.component';
import WherePipe from '../../pipes/where/where.pipe';
import CustomerPhotoUrlPipe from '../../pipes/photourl/photourl.pipe';
import CustomerService from '../../services/customerservice/customerservice.service';
import Customer from '../../models/crmsystem/customer';
import { CUSTOMER_SERVICE } from '../../services/customerservice/customerservice.tokens';
import { PUSH_NOTIFICATION_SERVICE } from '../../services/pushnotifications/pushnotifications.tokens';

class MockCustomerService {
    returnValues: Customer[] = [];

    getCustomers(): Observable<Customer[]> {
        let observable = Observable.create(
            (observer: any) => {
                observer.next(this.returnValues);
                observer.complete();
            });

        return observable;
    }
}

class MockPushNotificationService {
    registerCallback(callback: (data: any) => void): void {
    }
}

function main() {
    describe('Crm System Component Test Suite', () => {
        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [FormsModule],
                declarations: [
                    CustomerSearchPanelComponent, CustomerViewerComponent, CustomerDetailViewerComponent,
                    CrmSystemComponent,
                    WherePipe, CustomerPhotoUrlPipe],
                providers: [
                    {
                        provide: CUSTOMER_SERVICE,
                        useClass: MockCustomerService
                    },
                    {
                        provide: PUSH_NOTIFICATION_SERVICE,
                        useClass: MockPushNotificationService
                    },

                ]
            });
        });

        it('Should Return Valid Results',
            async(() => {
                TestBed.compileComponents().then(() => {
                    let fixture = TestBed.createComponent(CrmSystemComponent);
                    let fixtureInstance = fixture.debugElement.componentInstance;
                    let mockServiceInstance = <MockCustomerService>fixture.debugElement.injector.get(CUSTOMER_SERVICE);
                    let mockServiceSpy = spyOn(mockServiceInstance, 'getCustomers').and.callThrough();

                    mockServiceInstance.returnValues =
                        [
                            new Customer(11, 'Fake Customer 11', 'BLR', 23000, true, 'Simple'),
                            new Customer(12, 'Fake Customer 12', 'MLR', 13000, true, 'Simple'),
                            new Customer(13, 'Fake Customer 13', 'MSR', 33000, true, 'Simple')
                        ];

                    fixture.detectChanges();

                    expect(fixtureInstance.customers).toBeDefined();
                    expect(fixtureInstance.customers.length).toBe(3);
                    expect(fixtureInstance.customers).toEqual(mockServiceInstance.returnValues);
                    expect(fixtureInstance.customers[0].id).toBe(11);

                    expect(mockServiceSpy.calls.count()).toBe(1);
                });
            }));
    });
}

export { main };