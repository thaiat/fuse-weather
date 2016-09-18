import { TestBed } from '@angular/core/testing';
import { TabComponent } from './tab.component';

describe('Module: app', () => {
    describe('Component: TabComponent', () => {

        beforeEach(() => {
            TestBed.configureTestingModule({
                declarations: [TabComponent],
                providers: [],
                imports: []
            });
        });

        it('should be defined', () => {
            const fixture = TestBed.createComponent(TabComponent);
            fixture.detectChanges();
            let element = fixture.debugElement.nativeElement;
            let cmpInstance = fixture.debugElement.componentInstance;
            expect(cmpInstance).toBeDefined();
            expect(element).toBeDefined();
        });

    });
});