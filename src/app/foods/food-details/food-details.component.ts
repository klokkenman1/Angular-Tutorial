import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Food } from '../food.model';
import { FoodsService } from '../foods.service';
import { filter, map, tap, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-food-details',
  templateUrl: './food-details.component.html',
  styleUrls: ['./food-details.component.scss']
})
export class FoodDetailsComponent implements OnInit {

  title = 'Eten Details';
  food: Food;
  id: String;
  
  constructor(
    private route: ActivatedRoute,
    private foodService: FoodsService
  ) { }

  ngOnInit() {
    // Subscribe to changes in route params. 
    // When the route changes we get updates on route params.
    this.route.params.pipe(
      // we need the 'id' param
      filter(params => params['id']),
      // we do not want empty params
      filter(params => !!params),
      // get the number 'id' from the params
      map(params => params['id']),
      // save id locally
      tap(id => this.id = id),
      // then wait for foods to become available
      switchMap(id => this.foodService.foodsAvailable)
    ).subscribe(available => this.foodService.getFood(this.id).subscribe(response => this.food = response));
  }

}
