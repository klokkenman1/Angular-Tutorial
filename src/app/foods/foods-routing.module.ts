import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FoodsComponent } from './foods.component';
import { FoodListComponent } from './food-list/food-list.component';
import { FoodDetailsComponent } from './food-details/food-details.component';
import { FoodEditComponent } from './food-edit/food-edit.component';
import { FoodDeleteComponent } from './food-delete/food-delete.component';


const routes: Routes = [
  { path: 'foods/list', component: FoodListComponent },
  { path: 'foods/list/new', component: FoodEditComponent, data: { 
    foodAlreadyExists : false,
    title: 'New User' 
  } },
  { path: 'foods/list/:id', component: FoodDetailsComponent },
  { path: 'foods/list/:id/edit', component: FoodEditComponent, data: { foodAlreadyExists: true, title: 'Edit Food' } },
  { path: 'foods', component: FoodsComponent, children: [
    { path: '', component: FoodDetailsComponent },
    { path: 'new', component: FoodEditComponent, data: { foodAlreadyExists: false, title: 'New Food' } },
    { path: ':id/delete', component: FoodDeleteComponent },
    { path: ':id', component: FoodDetailsComponent },
    { path: ':id/edit', component: FoodEditComponent, data: { foodAlreadyExists: true } },
  ] },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class FoodsRoutingModule { }
