import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingscheduleEditComponent } from './trainingschedule-edit.component';

describe('TrainingscheduleEditComponent', () => {
  let component: TrainingscheduleEditComponent;
  let fixture: ComponentFixture<TrainingscheduleEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingscheduleEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingscheduleEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
