import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingscheduleListComponent } from './trainingschedule-list.component';

describe('TrainingscheduleListComponent', () => {
  let component: TrainingscheduleListComponent;
  let fixture: ComponentFixture<TrainingscheduleListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingscheduleListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingscheduleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
