import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Exercise } from '../exercise.model';
import { ExercisesService } from '../exercises.service';
import { filter, map, tap, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-exercise-details',
  templateUrl: './exercise-details.component.html',
  styleUrls: ['./exercise-details.component.scss']
})
export class ExerciseDetailsComponent implements OnInit {

  title = 'Oefening Details';
  exercise: Exercise;
  id: String;
  
  constructor(
    private route: ActivatedRoute,
    private exerciseService: ExercisesService
  ) { }

  ngOnInit() {
    // Subscribe to changes in route params. 
    // When the route changes we get updates on route params.
    this.route.params.pipe(
      // we need the 'id' param
      filter(params => params['id']),
      // we do not want empty params
      filter(params => !!params),
      // get the number 'id' from the params
      map(params => params['id']),
      // save id locally
      tap(id => this.id = id),
      // then wait for exercises to become available
      switchMap(id => this.exerciseService.exercisesAvailable)
    ).subscribe(available => this.exerciseService.getExercise(this.id).subscribe(response => this.exercise = response));
  }

}
