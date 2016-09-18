import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
    selector: 'tab',
    template: require('./tab.component.ngux'),
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabComponent {
    @Input() content: {};
}
