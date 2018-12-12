import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodListComponent } from './food-list.component';
import { RouterModule, ActivatedRoute, Router, Params } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FoodItemComponent } from './food-item/food-item.component';

describe('FoodListComponent', () => {
  let component: FoodListComponent;
  let fixture: ComponentFixture<FoodListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: Router, useValue: {} },
        { provide: HttpClient, useValue: {get:()=>{return new Observable<Params>()}} },
        { provide: ActivatedRoute, useValue: {} },
      ],
      declarations: [ FoodListComponent, FoodItemComponent ],
      imports: [RouterModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
