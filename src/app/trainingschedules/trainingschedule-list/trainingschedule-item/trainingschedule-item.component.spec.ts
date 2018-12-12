import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingscheduleItemComponent } from './trainingschedule-item.component';
import { Router, ActivatedRoute, RouterModule, Params } from '@angular/router';
import { Observable } from 'rxjs';

describe('TrainingscheduleItemComponent', () => {
  let component: TrainingscheduleItemComponent;
  let fixture: ComponentFixture<TrainingscheduleItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: Router, useValue: {} },
        { provide: ActivatedRoute, useValue: {params: new Observable<Params>(), snapshot: {data:[]}} },
      ],
      declarations: [ TrainingscheduleItemComponent ],
      imports:[RouterModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingscheduleItemComponent);
    component = fixture.componentInstance;
    component.selectedTrainingschedule = {name: "test"};
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
