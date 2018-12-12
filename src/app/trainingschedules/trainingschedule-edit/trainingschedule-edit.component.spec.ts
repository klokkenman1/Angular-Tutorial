import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingscheduleEditComponent } from './trainingschedule-edit.component';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { Exercise } from 'src/app/exercises/exercise.model';

describe('TrainingscheduleEditComponent', () => {
  let component: TrainingscheduleEditComponent;
  let fixture: ComponentFixture<TrainingscheduleEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: ActivatedRoute, useValue: {params: new Observable<Params>(), snapshot: {data:[]}} },
        { provide: HttpClient, useValue: {get: ()  =>{ return new Observable<Exercise>()} }},
        { provide: Router, useValue: {} }
      ],
      declarations: [ TrainingscheduleEditComponent ],
      imports: [FormsModule]

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
