import { Component, Input } from '@angular/core';

const COMPONENT_DECLARATION = {
    moduleId: module.id,
    selector: 'customer-search-panel',
    templateUrl: 'customersearchpanel.component.html'
};

@Component(COMPONENT_DECLARATION)
class CustomerSearchPanelComponent {
    @Input() private searchString = '';

    constructor() {
        console.log('Customer Search Panel Component Initialized!');
    }
}

export default CustomerSearchPanelComponent;
