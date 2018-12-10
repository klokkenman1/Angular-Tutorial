import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Exercise } from '../exercise.model';
import { ExercisesService } from '../exercises.service';

@Component({
  selector: 'app-exercise-list',
  templateUrl: './exercise-list.component.html',
  styleUrls: ['./exercise-list.component.scss']
})
export class ExerciseListComponent implements OnInit {

  title = 'Exercises ListComponent'
  exercises: Exercise[];

  constructor(
    private router: Router,
    private exercisesService: ExercisesService
  ) { }

  ngOnInit() {
    this.exercisesService.getExercises().subscribe(exercises => this.exercises = exercises);
  }

}
