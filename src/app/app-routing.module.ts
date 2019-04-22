import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TrainingschedulesComponent } from './trainingschedules/trainingschedules.component';
import { ExercisesComponent } from './exercises/exercises.component';
import { FoodsComponent } from './foods/foods.component';
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";




const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
