import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodItemComponent } from './food-item.component';
import { RouterModule, ActivatedRoute, Router, Params } from '@angular/router';
import { Observable } from 'rxjs';

describe('FoodItemComponent', () => {
  let component: FoodItemComponent;
  let fixture: ComponentFixture<FoodItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: Router, useValue: {} },
        { provide: ActivatedRoute, useValue: {params: new Observable<Params>(), snapshot: {data:[]}} },
      ],
      declarations: [ FoodItemComponent ],
      imports:[RouterModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodItemComponent);
    component = fixture.componentInstance;
    component.selectedFood = {name: "test"};
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
