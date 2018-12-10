import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingscheduleDetailsComponent } from './trainingschedule-details.component';

describe('TrainingscheduleDetailsComponent', () => {
  let component: TrainingscheduleDetailsComponent;
  let fixture: ComponentFixture<TrainingscheduleDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingscheduleDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingscheduleDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
