import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrainingschedulesComponent } from './trainingschedules.component';
import { TrainingscheduleListComponent } from './trainingschedule-list/trainingschedule-list.component';
import { TrainingscheduleDetailsComponent } from './trainingschedule-details/trainingschedule-details.component';
import { TrainingscheduleEditComponent } from './trainingschedule-edit/trainingschedule-edit.component';

const routes: Routes = [
  { path: 'trainingschedules/list', component: TrainingscheduleListComponent },
  { path: 'trainingschedules/list/new', component: TrainingscheduleEditComponent, data: { 
    trainingscheduleAlreadyExists : false,
    title: 'New User' 
  } },
  { path: 'trainingschedules/list/:id', component: TrainingscheduleDetailsComponent },
  { path: 'trainingschedules/list/:id/edit', component: TrainingscheduleEditComponent, data: { trainingscheduleAlreadyExists: true, title: 'Edit Trainingschedule' } },
  { path: 'trainingschedules', component: TrainingschedulesComponent, children: [
    { path: '', component: TrainingscheduleDetailsComponent },
    { path: 'new', component: TrainingscheduleEditComponent, data: { trainingscheduleAlreadyExists: false, title: 'New Trainingschedule' } },
    { path: ':id', component: TrainingscheduleDetailsComponent },
    { path: ':id/edit', component: TrainingscheduleEditComponent, data: { trainingscheduleAlreadyExists: true } },
  ] },
];

@NgModule({
  imports: [
    // Always use forChild in child route modules!
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class TrainingschedulesRoutingModule { }
