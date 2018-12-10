import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingschedulesComponent } from './trainingschedules.component';

describe('TrainingschedulesComponent', () => {
  let component: TrainingschedulesComponent;
  let fixture: ComponentFixture<TrainingschedulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingschedulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingschedulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
