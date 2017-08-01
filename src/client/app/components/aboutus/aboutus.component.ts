import { Component } from '@angular/core';

let COMPONENT_DECLARATIONS: any = {
    moduleId: module.id,
    templateUrl: 'aboutus.component.html',
    selector: 'aboutus-component'
};

@Component(COMPONENT_DECLARATIONS)
class AboutUsComponent {
    constructor() {
        console.log('About Us Component Initialized!');
    }
}

export default AboutUsComponent;
