import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Food } from '../food.model';
import { FoodsService } from '../foods.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss']
})
export class FoodListComponent implements OnInit {

  title = 'Foods ListComponent'
  foods: Food[];

  constructor(
    private router: Router,
    private foodsService: FoodsService
  ) { }

  ngOnInit() {
    this.foodsService.getFoods().subscribe(foods => this.foods = foods);
  }

}
