import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import BootComponent from '../../components/boot/boot.component';
import SharedModule from '../shared/shared.module';

@NgModule({
    imports: [BrowserModule, SharedModule],
    declarations: [BootComponent],
    exports: [BootComponent],
    bootstrap: [BootComponent]
})
class BootModule {
    constructor() {
        console.log('Boot Module Initialized!');
    }
}

export default BootModule;
