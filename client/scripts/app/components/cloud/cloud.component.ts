import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'cloud',
    template: require('./cloud.component.ngux'),
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CloudComponent {

}