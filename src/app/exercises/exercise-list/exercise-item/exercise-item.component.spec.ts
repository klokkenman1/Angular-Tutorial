import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseItemComponent } from './exercise-item.component';
import { RouterModule, Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';

describe('ExerciseItemComponent', () => {
  let component: ExerciseItemComponent;
  let fixture: ComponentFixture<ExerciseItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: Router, useValue: {} },
        { provide: ActivatedRoute, useValue: {params: new Observable<Params>(), snapshot: {data:[]}} },
      ],
      declarations: [ ExerciseItemComponent ],
      imports:[RouterModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciseItemComponent);
    component = fixture.componentInstance;
    component.selectedExercise = {name: "test"};
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
