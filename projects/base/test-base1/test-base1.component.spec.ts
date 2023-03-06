import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestBase1Component } from './test-base1.component';

describe('TestBase1Component', () => {
  let component: TestBase1Component;
  let fixture: ComponentFixture<TestBase1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestBase1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestBase1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
