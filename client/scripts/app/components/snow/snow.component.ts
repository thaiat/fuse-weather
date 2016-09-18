import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'snow',
    template: require('./snow.component.ngux'),
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SnowComponent {

}