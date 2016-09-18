import { FuseModule, platformFuseDynamic } from '../../../fuse/platform.ts';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainComponent } from './components/main/main.component';
import { HttpModule } from '@angular/http';
import { RainComponent } from './components/rain/rain.component';
import { SnowComponent } from './components/snow/snow.component';
import { CloudComponent } from './components/cloud/cloud.component';
import { TabComponent } from './components/tab/tab.component';
import { TodComponent } from './components/tod/tod.component';
import { Weather } from './services/weather/weather.service';

@NgModule({
    imports: [
        FuseModule, CommonModule, FormsModule, ReactiveFormsModule, HttpModule
    ],
    declarations: [MainComponent, TodComponent, TabComponent, RainComponent, SnowComponent, CloudComponent],
    providers: [Weather],
    bootstrap: [MainComponent]

})
class MainModule { }

if (!window.fusejs) {
    document.addEventListener('DOMContentLoaded', () => {
        if (!(<any>window).bootstraped) {
            (<any>window).bootstraped = true;
            platformFuseDynamic().bootstrapModule(MainModule);
        }
    }, false);
} else {
    window.fusejs.bootstraper = () => platformFuseDynamic().bootstrapModule(MainModule);
}
