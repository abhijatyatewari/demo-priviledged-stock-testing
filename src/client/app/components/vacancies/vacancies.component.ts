import { Component } from '@angular/core';

let COMPONENT_DECLARATIONS: any = {
    moduleId: module.id,
    templateUrl: 'vacancies.component.html',
    selector: 'vacancies-component'
};

@Component(COMPONENT_DECLARATIONS)
class VacanciesComponent {
    constructor() {
        console.log('About Us Component Initialized!');
    }
}

export default VacanciesComponent;
