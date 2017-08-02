import { Component } from '@angular/core';
import { async, TestBed } from '@angular/core/testing';
import HomeComponent from './home.component';
import FaqComponent from '../faq/faq.component';

@Component({
    selector: 'test-component',
    template: '<home-component></home-component>'
})
class TestComponent { }

function main() {
    describe('Home Component Test Suite', () => {
        beforeEach(() => {
            TestBed.configureTestingModule({
                declarations: [TestComponent, HomeComponent, FaqComponent]
            });
        });

        it('Home component Should have Lead Title',
            async(() => {
                TestBed.compileComponents().then(() => {
                    let fixture = TestBed.createComponent(TestComponent);
                    let domElement = fixture.debugElement.children[0].nativeElement;

                    expect(domElement.querySelectorAll('h1')[0].textContent).toBe('AWESOME, CUSTOMIZABLE, FREE');
                });
            }));
    });
}

export { main }