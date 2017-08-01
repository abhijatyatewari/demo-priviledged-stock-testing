import { Component } from '@angular/core';

let COMPONENT_DECLARATIONS: any = {
    moduleId: module.id,
    templateUrl: 'navigation.component.html',
    selector: 'navigation-component'
};

@Component(COMPONENT_DECLARATIONS)
class NavigationComponent {
    constructor() {
        console.log('Application Navigation Component Initialized!');
    }
}

export default NavigationComponent;
