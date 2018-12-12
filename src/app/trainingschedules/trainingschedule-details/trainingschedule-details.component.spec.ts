import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingscheduleDetailsComponent } from './trainingschedule-details.component';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { Exercise } from 'src/app/exercises/exercise.model';

describe('TrainingscheduleDetailsComponent', () => {
  let component: TrainingscheduleDetailsComponent;
  let fixture: ComponentFixture<TrainingscheduleDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: ActivatedRoute, useValue: {params: new Observable<Params>()} },
        { provide: HttpClient, useValue: {get: ()  =>{ return new Observable<Exercise>()} } },
        { provide: Router, useValue: {} }
      ],
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
