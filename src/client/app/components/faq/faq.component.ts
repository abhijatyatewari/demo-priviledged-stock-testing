import { Component } from '@angular/core';

let COMPONENT_DECLARATIONS: any = {
    moduleId: module.id,
    templateUrl: 'faq.component.html',
    selector: 'faq-component'
};

@Component(COMPONENT_DECLARATIONS)
class FaqComponent {
    constructor() {
        console.log('Faq Component Initialized!');
    }
}

export default FaqComponent;
