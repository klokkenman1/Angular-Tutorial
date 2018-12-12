import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Trainingschedule } from '../trainingschedule.model';
import { TrainingschedulesService } from '../trainingschedules.service';
import { Exercise } from '../../exercises/exercise.model';
import { ExercisesService } from '../../exercises/exercises.service';
@Component({
  selector: 'app-trainingschedule-edit',
  templateUrl: './trainingschedule-edit.component.html',
  styleUrls: ['./trainingschedule-edit.component.scss']
})
export class TrainingscheduleEditComponent implements OnInit {

  title: string;
  editMode: boolean;
  id: String;
  trainingschedule: Trainingschedule;
  submitted = false;
  exercises: Exercise[];
  public selectedExercises: String[] = [];

  constructor(
    private exercisesService: ExercisesService,
    private trainingschedulesService: TrainingschedulesService,
    private route: ActivatedRoute,
    private router: Router
  ) { 
    this.exercisesService.getExercises().subscribe(result => this.exercises = result);
  }

  ngOnInit() {
    this.title = this.route.snapshot.data['title'] || 'Edit Trainingschedule';
    this.editMode = this.route.snapshot.data['trainingscheduleAlreadyExists'] || false;

    if(this.editMode){
      this.route.params.subscribe((params) => {
        if (params['id']) {
          this.trainingschedulesService.trainingschedulesAvailable.subscribe(trainingscheduleAvailable => {
            if (trainingscheduleAvailable) {
              this.id = params['id'];
              this.trainingschedulesService.getTrainingschedule(this.id).subscribe(response => this.trainingschedule = response);
            }
          })
        }
      });
    } else {
      this.trainingschedule = new Trainingschedule();
      this.trainingschedule.days = [[],[],[],[],[],[],[]]
    }
  }

  onSubmit() { 
    this.submitted = true;

    console.log(this.trainingschedule);
    // if(this.editMode) {
    //   this.trainingschedulesService.saveTrainingschedule(this.id, this.trainingschedule);
    // } else {
    //   this.trainingschedulesService.saveNewTrainingschedule(this.trainingschedule);
    // }
    
    this.router.navigate(['..'], { relativeTo: this.route });
  }

  addExercise(i){
    this.trainingschedule.days[i].push(this.selectedExercises[i]);
  }

  removeExercise(i, exercise){
    this.trainingschedule.days[i].splice(this.trainingschedule.days[i].indexOf(exercise),1);
  }

  public filterExercises(i){
    return this.exercises.filter((value) => { return !this.trainingschedule.days[i].includes(value._id)});
  }
}
