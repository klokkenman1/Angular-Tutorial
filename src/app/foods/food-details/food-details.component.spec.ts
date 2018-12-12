import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodDetailsComponent } from './food-details.component';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

describe('FoodDetailsComponent', () => {
  let component: FoodDetailsComponent;
  let fixture: ComponentFixture<FoodDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: ActivatedRoute, useValue: {params: new Observable<Params>()} },
        { provide: HttpClient, useValue: {} },
        { provide: Router, useValue: {} }
      ],
      declarations: [ FoodDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
