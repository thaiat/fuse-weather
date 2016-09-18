import { Component } from '@angular/core';
import { Weather } from '../../services/weather/weather.service.ts';
@Component({
    selector: 'main',
    template: require('./main.component.ngux')
})
export class MainComponent {
    times: Array<any>;

    constructor(private weatherService: Weather) {
        this.reload();
    }

    reload() {
        this.weatherService.get().subscribe(times => {
            this.times = times;
        });
    }
}
