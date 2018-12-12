import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExercisesComponent } from './exercises.component';
import { ExerciseListComponent } from './exercise-list/exercise-list.component';
import { ExerciseDetailsComponent } from './exercise-details/exercise-details.component';
import { ExerciseEditComponent } from './exercise-edit/exercise-edit.component';
import { ExerciseDeleteComponent } from './exercise-delete/exercise-delete.component';


const routes: Routes = [
  { path: 'exercises/list', component: ExerciseListComponent },
  { path: 'exercises/list/new', component: ExerciseEditComponent, data: { 
    exerciseAlreadyExists : false,
    title: 'New User' 
  } },
  { path: 'exercises/list/:id', component: ExerciseDetailsComponent },
  { path: 'exercises/list/:id/edit', component: ExerciseEditComponent, data: { exerciseAlreadyExists: true, title: 'Edit Exercise' } },
  { path: 'exercises', component: ExercisesComponent, children: [
    { path: '', component: ExerciseDetailsComponent },
    { path: 'new', component: ExerciseEditComponent, data: { exerciseAlreadyExists: false, title: 'New Exercise' } },
    { path: ':id/delete', component: ExerciseDeleteComponent },
    { path: ':id', component: ExerciseDetailsComponent },
    { path: ':id/edit', component: ExerciseEditComponent, data: { exerciseAlreadyExists: true } },
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
export class ExercisesRoutingModule { }
