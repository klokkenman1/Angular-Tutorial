import { Component, OnInit } from '@angular/core';
import { ExercisesService } from '../exercises.service';
import { Router, ActivatedRoute } from '@angular/router';
import { filter, map, tap, switchMap } from 'rxjs/operators';
import { Exercise } from '../exercise.model';


@Component({
  selector: 'app-exercise-delete',
  templateUrl: './exercise-delete.component.html',
  styleUrls: ['./exercise-delete.component.scss']
})
export class ExerciseDeleteComponent implements OnInit  {
  title = "Verwijder oefening?";
  exercise: Exercise;
  id: String;

  constructor(
    private route: ActivatedRoute,
    private exercisesService: ExercisesService,
    private router: Router
  ) { }

  onClickDelete() {
    this.exercisesService.deleteExercise(this.id);
    this.router.navigate(['../..'], { relativeTo: this.route });
  }

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
      switchMap(id => this.exercisesService.exercisesAvailable)
    ).subscribe(available => this.exercisesService.getExercise(this.id).subscribe(response => this.exercise = response));
  }

}
