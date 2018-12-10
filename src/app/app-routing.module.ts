import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent }      from './home/home.component';
import { TrainingschedulesComponent }      from './trainingschedules/trainingschedules.component';
import { ExercisesComponent }      from './exercises/exercises.component';



const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'trainingschedules', component: TrainingschedulesComponent },
  { path: 'exercises', component: ExercisesComponent },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
