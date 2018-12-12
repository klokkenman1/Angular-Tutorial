import { Component, OnInit, Input } from '@angular/core';



@Component({
  selector: '[app-food-item]',
  templateUrl: './food-item.component.html',
  styleUrls: ['./food-item.component.scss']
})
export class FoodItemComponent {

  @Input() selectedFood;

}
