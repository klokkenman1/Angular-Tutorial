import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodDeleteComponent } from './food-delete.component';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

describe('FoodDeleteComponent', () => {
  let component: FoodDeleteComponent;
  let fixture: ComponentFixture<FoodDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: ActivatedRoute, useValue: {params: new Observable<Params>()} },
        { provide: HttpClient, useValue: {} },
        { provide: Router, useValue: {} }
      ],
      declarations: [ FoodDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
