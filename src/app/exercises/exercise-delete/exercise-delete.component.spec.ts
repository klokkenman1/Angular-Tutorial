import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseDeleteComponent } from './exercise-delete.component';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

describe('ExerciseDeleteComponent', () => {
  let component: ExerciseDeleteComponent;
  let fixture: ComponentFixture<ExerciseDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: ActivatedRoute, useValue: {params: new Observable<Params>()} },
        { provide: HttpClient, useValue: {} },
        { provide: Router, useValue: {} }
      ],
      declarations: [ExerciseDeleteComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciseDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

