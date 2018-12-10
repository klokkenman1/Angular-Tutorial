import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Exercise } from '../exercise.model';
import { ExercisesService } from '../exercises.service';

@Component({
  selector: 'app-exercise-edit',
  templateUrl: './exercise-edit.component.html',
  styleUrls: ['./exercise-edit.component.scss']
})
export class ExerciseEditComponent implements OnInit {

  title: string;
  editMode: boolean;
  id: String;
  exercise: Exercise;
  submitted = false;

  constructor(
    private exercisesService: ExercisesService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.title = this.route.snapshot.data['title'] || 'Edit Exercise';
    this.editMode = this.route.snapshot.data['exerciseAlreadyExists'] || false;

    if(this.editMode){
      this.route.params.subscribe((params) => {
        if (params['id']) {
          this.exercisesService.exercisesAvailable.subscribe(exerciseAvailable => {
            if (exerciseAvailable) {
              this.id = params['id'];
              this.exercisesService.getExercise(this.id).subscribe(response => this.exercise = response);
            }
          })
        }
      });
    } else {
      this.exercise = new Exercise();
    }
  }

  onSubmit() { 
    this.submitted = true;
    console.log('onSubmit');
    console.log(this.exercise);
    console.log(this.id);

    this.exercise.muscles = this.exercise.muscles.toString().split(/,|\n/);

    if(this.editMode) {
      this.exercisesService.saveExercise(this.id, this.exercise);
    } else {
      this.exercisesService.saveNewExercise(this.exercise);
    }
    
    this.router.navigate(['..'], { relativeTo: this.route });
  }

}
