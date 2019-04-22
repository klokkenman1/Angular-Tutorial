import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FoodsComponent } from './foods.component';
import { FoodListComponent } from './food-list/food-list.component';
import { FoodDetailsComponent } from './food-details/food-details.component';
import { FoodEditComponent } from './food-edit/food-edit.component';
import { FoodDeleteComponent } from './food-delete/food-delete.component';
import { AuthGuard } from '../auth.guard';


const routes: Routes = [
  {
    path: 'foods', component: FoodsComponent, children: [
      { path: '', component: FoodDetailsComponent },
      { path: 'new', component: FoodEditComponent, data: { foodAlreadyExists: false, title: 'New Food' } },
      { path: ':id/delete', component: FoodDeleteComponent },
      { path: ':id', component: FoodDetailsComponent },
      { path: ':id/edit', component: FoodEditComponent, data: { foodAlreadyExists: true } },
      { path: 'list/:id/edit', component: FoodEditComponent, data: { foodAlreadyExists: true, title: 'Edit Food' } },
      { path: 'list/:id', component: FoodDetailsComponent },
      {
        path: 'list/new', component: FoodEditComponent, data: {
          foodAlreadyExists: false,
          title: 'New Food'
        }
      },
      { path: 'list', component: FoodListComponent },
    ], canActivate: [AuthGuard]
  },
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
