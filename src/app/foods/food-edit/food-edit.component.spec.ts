import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodEditComponent } from './food-edit.component';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';

describe('FoodEditComponent', () => {
  let component: FoodEditComponent;
  let fixture: ComponentFixture<FoodEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: ActivatedRoute, useValue: {params: new Observable<Params>(), snapshot: {data:[]}} },
        { provide: HttpClient, useValue: {} },
        { provide: Router, useValue: {} }
      ],
      declarations: [ FoodEditComponent ],
      imports: [FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
