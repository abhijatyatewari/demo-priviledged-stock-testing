import { Component } from '@angular/core';

let COMPONENT_DECLARATIONS: any = {
    moduleId: module.id,
    templateUrl: 'layout.component.html',
    selector: 'layout-component'
};

@Component(COMPONENT_DECLARATIONS)
class LayoutComponent {
    constructor() {
        console.log('Application Layout Component Initialized!');
    }
}

export default LayoutComponent;
