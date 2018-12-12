import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingscheduleDeleteComponent } from './trainingschedule-delete.component';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

describe('TrainingscheduleDeleteComponent', () => {
  let component: TrainingscheduleDeleteComponent;
  let fixture: ComponentFixture<TrainingscheduleDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: ActivatedRoute, useValue: {params: new Observable<Params>()} },
        { provide: HttpClient, useValue: {} },
        { provide: Router, useValue: {} }
      ],
      declarations: [ TrainingscheduleDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingscheduleDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
