import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'rain',
    template: require('./rain.component.ngux'),
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class RainComponent {

}