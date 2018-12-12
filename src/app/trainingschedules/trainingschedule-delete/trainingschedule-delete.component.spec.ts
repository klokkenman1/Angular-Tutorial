import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingscheduleDeleteComponent } from './trainingschedule-delete.component';

describe('TrainingscheduleDeleteComponent', () => {
  let component: TrainingscheduleDeleteComponent;
  let fixture: ComponentFixture<TrainingscheduleDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingscheduleDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingscheduleDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
