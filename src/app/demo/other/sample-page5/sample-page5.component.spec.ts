import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SamplePage5Component } from './sample-page5.component';

describe('SamplePage5Component', () => {
  let component: SamplePage5Component;
  let fixture: ComponentFixture<SamplePage5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SamplePage5Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SamplePage5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
