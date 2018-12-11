import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { TrainingschedulesRoutingModule } from './trainingschedules/trainingschedules-routing.module';
import { ExercisesRoutingModule } from './exercises/exercises-routing.module';
import { FoodsRoutingModule } from './foods/foods-routing.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';




import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';



import { TrainingschedulesComponent } from './trainingschedules/trainingschedules.component';
import { TrainingscheduleDetailsComponent } from './trainingschedules/trainingschedule-details/trainingschedule-details.component';
import { TrainingscheduleEditComponent } from './trainingschedules/trainingschedule-edit/trainingschedule-edit.component';
import { TrainingscheduleListComponent } from './trainingschedules/trainingschedule-list/trainingschedule-list.component';
import { TrainingscheduleItemComponent } from './trainingschedules/trainingschedule-list/trainingschedule-item/trainingschedule-item.component';

import { ExercisesComponent } from './exercises/exercises.component';
import { ExerciseDeleteComponent } from './exercises/exercise-delete/exercise-delete.component';
import { ExerciseDetailsComponent } from './exercises/exercise-details/exercise-details.component';
import { ExerciseEditComponent } from './exercises/exercise-edit/exercise-edit.component';
import { ExerciseListComponent } from './exercises/exercise-list/exercise-list.component';
import { ExerciseItemComponent } from './exercises/exercise-list/exercise-item/exercise-item.component';

import { FoodsComponent } from './foods/foods.component';
import { FoodDeleteComponent } from './foods/food-delete/food-delete.component';
import { FoodDetailsComponent } from './foods/food-details/food-details.component';
import { FoodEditComponent } from './foods/food-edit/food-edit.component';
import { FoodListComponent } from './foods/food-list/food-list.component';
import { FoodItemComponent } from './foods/food-list/food-item/food-item.component';

import { AuthInterceptor } from './auth.interceptor';
import { AuthService } from './auth.service';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';



@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MDBBootstrapModule.forRoot(),
    TrainingschedulesRoutingModule,
    ExercisesRoutingModule,
    FoodsRoutingModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    TrainingschedulesComponent,
    TrainingscheduleDetailsComponent,
    TrainingscheduleEditComponent,
    TrainingscheduleListComponent,
    TrainingscheduleItemComponent,
    ExercisesComponent,
    ExerciseDeleteComponent,
    ExerciseDetailsComponent,
    ExerciseEditComponent,
    ExerciseListComponent,
    ExerciseItemComponent,
    FoodsComponent,
    FoodDeleteComponent,
    FoodDetailsComponent,
    FoodEditComponent,
    FoodListComponent,
    FoodItemComponent,
    LoginComponent,
    RegisterComponent
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  },AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }