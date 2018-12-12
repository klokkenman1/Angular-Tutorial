import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingschedulesComponent } from './trainingschedules.component';
import { TrainingscheduleListComponent } from './trainingschedule-list/trainingschedule-list.component';
import { TrainingscheduleItemComponent } from './trainingschedule-list/trainingschedule-item/trainingschedule-item.component';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute, RouterModule, ChildrenOutletContexts, Params } from '@angular/router';
import { Observable } from 'rxjs';

describe('TrainingschedulesComponent', () => {
  let component: TrainingschedulesComponent;
  let fixture: ComponentFixture<TrainingschedulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: Router, useValue: {} },
        { provide: HttpClient, useValue: {get:()=>{return new Observable<Params>()}} },
        { provide: ActivatedRoute, useValue: {} },
        { provide: ChildrenOutletContexts, useValue: {onChildOutletCreated: ()=>{}, getContext: ()=>{}} },
      ],
      declarations: [ TrainingschedulesComponent, TrainingscheduleListComponent, TrainingscheduleItemComponent ],
      imports:[RouterModule]
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
