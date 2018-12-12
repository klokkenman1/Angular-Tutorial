import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingscheduleListComponent } from './trainingschedule-list.component';
import { TrainingscheduleItemComponent } from './trainingschedule-item/trainingschedule-item.component';
import { RouterModule, ActivatedRoute, Router, Params } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

describe('TrainingscheduleListComponent', () => {
  let component: TrainingscheduleListComponent;
  let fixture: ComponentFixture<TrainingscheduleListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: Router, useValue: {} },
        { provide: HttpClient, useValue: {get:()=>{return new Observable<Params>()}} },
        { provide: ActivatedRoute, useValue: {} },
      ],
      declarations: [ TrainingscheduleListComponent, TrainingscheduleItemComponent ],
      imports: [RouterModule]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingscheduleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
