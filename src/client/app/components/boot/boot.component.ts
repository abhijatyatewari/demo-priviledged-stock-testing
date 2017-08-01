import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    templateUrl: 'boot.component.html',
    selector: 'boot-component'
})
class BootComponent {
    constructor() {
        console.log('Boot Component Initialized!');
    }
}

export default BootComponent;