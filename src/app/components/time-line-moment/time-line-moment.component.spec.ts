import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeLineMomentComponent } from './time-line-moment.component';

describe('TimeLineMomentComponent', () => {
  let component: TimeLineMomentComponent;
  let fixture: ComponentFixture<TimeLineMomentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeLineMomentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeLineMomentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
