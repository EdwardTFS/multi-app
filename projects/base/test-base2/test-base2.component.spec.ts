import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestBase2Component } from './test-base2.component';

describe('TestBase2Component', () => {
  let component: TestBase2Component;
  let fixture: ComponentFixture<TestBase2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestBase2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestBase2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
