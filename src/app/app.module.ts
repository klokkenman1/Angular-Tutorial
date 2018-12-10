import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './users/users-routing.module';
import { TrainingschedulesRoutingModule } from './trainingschedules/trainingschedules-routing.module';
import { ExercisesRoutingModule } from './exercises/exercises-routing.module';




import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';

import { UsersComponent } from './users/users.component';
import { UserDetailsComponent } from './users/user-details/user-details.component';
import { UserEditComponent } from './users/user-edit/user-edit.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { UserItemComponent } from './users/user-list/user-item/user-item.component';

import { TrainingschedulesComponent } from './trainingschedules/trainingschedules.component';
import { TrainingscheduleDetailsComponent } from './trainingschedules/trainingschedule-details/trainingschedule-details.component';
import { TrainingscheduleEditComponent } from './trainingschedules/trainingschedule-edit/trainingschedule-edit.component';
import { TrainingscheduleListComponent } from './trainingschedules/trainingschedule-list/trainingschedule-list.component';
import { TrainingscheduleItemComponent } from './trainingschedules/trainingschedule-list/trainingschedule-item/trainingschedule-item.component';

import { ExercisesComponent } from './exercises/exercises.component';
import { ExerciseDetailsComponent } from './exercises/exercise-details/exercise-details.component';
import { ExerciseEditComponent } from './exercises/exercise-edit/exercise-edit.component';
import { ExerciseListComponent } from './exercises/exercise-list/exercise-list.component';
import { ExerciseItemComponent } from './exercises/exercise-list/exercise-item/exercise-item.component';
import { ExerciseDeleteComponent } from './exercises/exercise-delete/exercise-delete.component';




@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MDBBootstrapModule.forRoot(),
    UserRoutingModule,
    TrainingschedulesRoutingModule,
    ExercisesRoutingModule,
    AppRoutingModule,
    NgbModule,
    HttpModule
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
    UsersComponent,
    UserDetailsComponent,
    UserEditComponent,
    UserListComponent,
    UserItemComponent,
    ExercisesComponent,
    ExerciseDetailsComponent,
    ExerciseEditComponent,
    ExerciseListComponent,
    ExerciseItemComponent,
    ExerciseDeleteComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }