import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodsComponent } from './foods.component';
import { FoodListComponent } from './food-list/food-list.component';
import { FoodItemComponent } from './food-list/food-item/food-item.component';
import { Router, ActivatedRoute, ChildrenOutletContexts, Params, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

describe('FoodsComponent', () => {
  let component: FoodsComponent;
  let fixture: ComponentFixture<FoodsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: Router, useValue: {} },
        { provide: HttpClient, useValue: {get:()=>{return new Observable<Params>()}} },
        { provide: ActivatedRoute, useValue: {} },
        { provide: ChildrenOutletContexts, useValue: {onChildOutletCreated: ()=>{}, getContext: ()=>{}} },
      ],
      declarations: [ FoodsComponent, FoodListComponent, FoodItemComponent ],
      imports:[RouterModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
