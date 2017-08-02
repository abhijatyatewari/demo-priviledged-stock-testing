import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import HeaderComponent from '../../components/header/header.component';
import LayoutComponent from '../../components/layout/layout.component';
import FooterComponent from '../../components/footer/footer.component';
import NavigationComponent from '../../components/navigation/navigation.component';
import HomeComponent from '../../components/home/home.component';
import FaqComponent from '../../components/faq/faq.component';
import AboutUsComponent from '../../components/aboutus/aboutus.component';
import VacanciesComponent from '../../components/vacancies/vacancies.component';

import sharedRouteEntries from '../../routing/shared/shared.routes';

let MODULE_DECLARATIONS: any = {
    imports: [CommonModule, sharedRouteEntries],
    declarations: [
        LayoutComponent, HeaderComponent,
        FooterComponent, NavigationComponent,
        HomeComponent, FaqComponent, AboutUsComponent, VacanciesComponent],
    exports: [LayoutComponent]
};

@NgModule(MODULE_DECLARATIONS)
class SharedModule {
    constructor() {
        console.log('Shared Module Initialized!');
    }
}

export default SharedModule;
