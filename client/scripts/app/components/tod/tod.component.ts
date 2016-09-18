import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
    selector: 'tod',
    template: require('./tod.component.ngux'),
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodComponent {
    @Input() name: String;
}
