import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseDetailsComponent } from './exercise-details.component';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

describe('ExerciseDetailsComponent', () => {
  let component: ExerciseDetailsComponent;
  let fixture: ComponentFixture<ExerciseDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({providers: [
      { provide: ActivatedRoute, useValue: {params: new Observable<Params>()} },
      { provide: HttpClient, useValue: {} },
      { provide: Router, useValue: {} }
    ],
      declarations: [ ExerciseDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciseDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
