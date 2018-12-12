import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercisesComponent } from './exercises.component';
import { ExerciseListComponent } from './exercise-list/exercise-list.component';
import { RouterModule, Router, ActivatedRoute, Params, ChildrenOutletContexts } from '@angular/router';
import { ExerciseItemComponent } from './exercise-list/exercise-item/exercise-item.component';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

describe('ExercisesComponent', () => {
  let component: ExercisesComponent;
  let fixture: ComponentFixture<ExercisesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: Router, useValue: {} },
        { provide: HttpClient, useValue: {get:()=>{return new Observable<Params>()}} },
        { provide: ActivatedRoute, useValue: {} },
        { provide: ChildrenOutletContexts, useValue: {onChildOutletCreated: ()=>{}, getContext: ()=>{}} },
      ],
      declarations: [ ExercisesComponent, ExerciseListComponent, ExerciseItemComponent ],
      imports:[RouterModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExercisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
