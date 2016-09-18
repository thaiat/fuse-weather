import { TestBed } from '@angular/core/testing';
import { CloudComponent } from './cloud.component';

describe('Module: app', () => {
    describe('Component: CloudComponent', () => {

        beforeEach(() => {
            TestBed.configureTestingModule({
                declarations: [CloudComponent],
                providers: [],
                imports: []
            });
        });

        it('should be defined', () => {
            const fixture = TestBed.createComponent(CloudComponent);
            fixture.detectChanges();
            let element = fixture.debugElement.nativeElement;
            let cmpInstance = fixture.debugElement.componentInstance;
            expect(cmpInstance).toBeDefined();
            expect(element).toBeDefined();
        });

    });
});