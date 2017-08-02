import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import './operators';

import BootModule from './modules/boot/boot.module';

const PRODUCTION_BUILD: string = 'prod';

let buildType = String('<%= BUILD_TYPE %>');

if (buildType === PRODUCTION_BUILD) {
    enableProdMode();

    console.log('Production Mode for Angular Runtime Initialized!');
}

platformBrowserDynamic().bootstrapModule(BootModule);
