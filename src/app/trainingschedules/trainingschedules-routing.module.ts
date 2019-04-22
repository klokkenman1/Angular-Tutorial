import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrainingschedulesComponent } from './trainingschedules.component';
import { TrainingscheduleListComponent } from './trainingschedule-list/trainingschedule-list.component';
import { TrainingscheduleDetailsComponent } from './trainingschedule-details/trainingschedule-details.component';
import { TrainingscheduleEditComponent } from './trainingschedule-edit/trainingschedule-edit.component';
import { TrainingscheduleDeleteComponent } from './trainingschedule-delete/trainingschedule-delete.component';
import { AuthGuard } from '../auth.guard';


const routes: Routes = [

  {
    path: 'trainingschedules', component: TrainingschedulesComponent, children: [
      { path: '', component: TrainingscheduleDetailsComponent },
      { path: 'new', component: TrainingscheduleEditComponent, data: { trainingscheduleAlreadyExists: false, title: 'New Trainingschedule' } },
      { path: ':id/delete', component: TrainingscheduleDeleteComponent },
      { path: ':id', component: TrainingscheduleDetailsComponent },
      { path: ':id/edit', component: TrainingscheduleEditComponent, data: { trainingscheduleAlreadyExists: true } },
      { path: 'list/:id/edit', component: TrainingscheduleEditComponent, data: { trainingscheduleAlreadyExists: true, title: 'Edit Trainingschedule' } },
      { path: 'list/:id', component: TrainingscheduleDetailsComponent },
      {
        path: 'list/new', component: TrainingscheduleEditComponent, data: {
          trainingscheduleAlreadyExists: false,
          title: 'New User'
        }
      },
      { path: 'list', component: TrainingscheduleListComponent },
    ], canActivate: [AuthGuard]
  },
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
