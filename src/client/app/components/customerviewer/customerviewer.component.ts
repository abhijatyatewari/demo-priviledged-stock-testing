import { Component, Input } from '@angular/core';

import Customer from '../../models/crmsystem/customer';

const COMPONENT_DECLARATION = {
    moduleId: module.id,
    selector: 'customer-viewer',
    templateUrl: 'customerviewer.component.html'
};

@Component(COMPONENT_DECLARATION)
class CustomerViewerComponent {
    @Input() public customerInfo: Customer;

    constructor() {
        console.log('Customer Viewer Component Initialized!');
    }
}

export default CustomerViewerComponent;
