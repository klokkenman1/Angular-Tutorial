import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Food } from '../food.model';
import { FoodsService } from '../foods.service';
import * as moment from 'moment';


@Component({
  selector: 'app-food-edit',
  templateUrl: './food-edit.component.html',
  styleUrls: ['./food-edit.component.scss']
})
export class FoodEditComponent implements OnInit {

  title: string;
  editMode: boolean;
  id: String;
  food: Food;
  submitted = false;

  constructor(
    private foodsService: FoodsService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.title = this.route.snapshot.data['title'] || 'Edit Food';
    this.editMode = this.route.snapshot.data['foodAlreadyExists'] || false;

    if(this.editMode){
      this.route.params.subscribe((params) => {
        if (params['id']) {
          this.foodsService.foodsAvailable.subscribe(foodAvailable => {
            if (foodAvailable) {
              this.id = params['id'];
              this.foodsService.getFood(this.id).subscribe(response => this.food = response);
            }
          })
        }
      });
    } else {
      this.food = new Food();
      this.food.date = moment().format("MM-DD-YYYY");
    }
  }

  onSubmit() { 
    this.submitted = true;
    console.log('onSubmit');
    console.log(this.food);
    console.log(this.id);

    if(this.editMode) {
      this.foodsService.saveFood(this.id, this.food);
    } else {
      this.foodsService.saveNewFood(this.food);
    }
    
    this.router.navigate(['..'], { relativeTo: this.route });
  }

}
