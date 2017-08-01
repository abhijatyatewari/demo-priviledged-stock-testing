import { Component } from '@angular/core';

let COMPONENT_DECLARATIONS: any = {
    moduleId: module.id,
    templateUrl: 'footer.component.html',
    selector: 'footer-component'
};

@Component(COMPONENT_DECLARATIONS)
class FooterComponent {
    constructor() {
        console.log('Application Footer Component Initialized!');
    }
}

export default FooterComponent;
