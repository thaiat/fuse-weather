import { TestBed } from '@angular/core/testing';
import { TodComponent } from './tod.component';

describe('Module: app', () => {
    describe('Component: TodComponent', () => {

        beforeEach(() => {
            TestBed.configureTestingModule({
                declarations: [TodComponent],
                providers: [],
                imports: []
            });
        });

        it('should be defined', () => {
            const fixture = TestBed.createComponent(TodComponent);
            fixture.detectChanges();
            let element = fixture.debugElement.nativeElement;
            let cmpInstance = fixture.debugElement.componentInstance;
            expect(cmpInstance).toBeDefined();
            expect(element).toBeDefined();
        });

    });
});