import { Component, OnInit } from '@angular/core';
import { FoodsService } from '../foods.service';
import { Router, ActivatedRoute } from '@angular/router';
import { filter, map, tap, switchMap } from 'rxjs/operators';
import { Food } from '../food.model';


@Component({
  selector: 'app-food-delete',
  templateUrl: './food-delete.component.html',
  styleUrls: ['./food-delete.component.scss']
})
export class FoodDeleteComponent implements OnInit  {
  title = "Verwijder oefening?";
  food: Food;
  id: String;

  constructor(
    private route: ActivatedRoute,
    private foodsService: FoodsService,
    private router: Router
  ) { }

  onClickDelete() {
    this.foodsService.deleteFood(this.id);
    this.router.navigate(['../..'], { relativeTo: this.route });
  }

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
      switchMap(id => this.foodsService.foodsAvailable)
    ).subscribe(available => this.foodsService.getFood(this.id).subscribe(response => this.food = response));
  }

}
