import { Component, Input } from '@angular/core';
import Customer from '../../models/crmsystem/customer';

const COMPONENT_DECLARATION = {
    moduleId: module.id,
    selector: 'customer-detail-viewer',
    templateUrl: 'customerdetailviewer.component.html'
};

@Component(COMPONENT_DECLARATION)
class CustomerDetailViewer {
    @Input() public customerDetail: Customer;

    constructor() {
        console.log('Customer Detail Viewer Component Initialized!');
    }
}

export default CustomerDetailViewer;
