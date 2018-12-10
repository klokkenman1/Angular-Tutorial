import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingscheduleItemComponent } from './trainingschedule-item.component';

describe('TrainingscheduleItemComponent', () => {
  let component: TrainingscheduleItemComponent;
  let fixture: ComponentFixture<TrainingscheduleItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingscheduleItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingscheduleItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
