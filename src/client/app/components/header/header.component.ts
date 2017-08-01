import { Component } from '@angular/core';

let COMPONENT_DECLARATIONS: any = {
    moduleId: module.id,
    templateUrl: 'header.component.html',
    selector: 'header-component'
};

@Component(COMPONENT_DECLARATIONS)
class HeaderComponent {
    constructor() {
        console.log('Header Component Initialized!');
    }
}

export default HeaderComponent;
