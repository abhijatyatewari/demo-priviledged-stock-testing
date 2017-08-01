import { Component } from '@angular/core';

let COMPONENT_DECLARATIONS: any = {
    moduleId: module.id,
    templateUrl: 'home.component.html',
    selector: 'home-component'
};

@Component(COMPONENT_DECLARATIONS)
class HomeComponent {
    constructor() {
        console.log('Home Component Initialized!');
    }
}

export default HomeComponent;
