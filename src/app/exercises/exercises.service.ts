import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, Subject } from 'rxjs';
import { map, tap, take } from 'rxjs/operators';
import { Exercise } from './exercise.model';
import { Http } from '@angular/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ExercisesService {

  exercises: Exercise[]

  // Step 01: Explain why we use a behavior subject
  exercisesAvailable = new BehaviorSubject<boolean>(false);

  constructor(
    private http: Http
  ) { console.log('ExerciseService constructed');  }

  public getExercises(): Observable<Exercise[]> {
    console.log('getExercises');
    return this.http.get(`${environment.apiUrl}/api/exercise`).pipe(
      map(response => response.json().map(data => new Exercise(data))),
      tap(exercises => {
        this.exercises = exercises;
        this.exercisesAvailable.next(true);
      })
    );
  }

  getExercise(id: String): Observable<Exercise> {
    console.log(`getExercise(${id})`);
    return this.http.get(`${environment.apiUrl}/api/exercise/${id}`).pipe(
      map(response => new Exercise(response.json()))
    );
  }

  saveExercise(id: String, exercise: Exercise) {
    console.log(`saveExercise(${id})`);

    console.log(`saveNewExercise()`);
    console.log(exercise);
    if(this.exercises) {
      this.http.put(`${environment.apiUrl}/api/exercise/${id}`,{name: exercise.name, description: exercise.description, muscles: exercise.muscles}).subscribe((result) => {this.exercises.splice(this.exercises.findIndex(item => item._id == id)); this.exercises.push(new Exercise(result.json()))});
    }
  }

  saveNewExercise(exercise: Exercise) {
    console.log(`saveNewExercise()`);
    console.log(exercise);
    if(this.exercises) {
      this.http.post(`${environment.apiUrl}/api/exercise`,{name: exercise.name, description: exercise.description, muscles: exercise.muscles}).subscribe((result) => {this.exercises.push(new Exercise(result.json()))});
    }
  }

  deleteExercise(id: String) {
    console.log(`deleteExercise()`);
    if(this.exercises) {
      this.http.delete(`${environment.apiUrl}/api/exercise/${id}`).subscribe();
      this.exercises.splice(this.exercises.findIndex(item => item._id == id));
    }
  }
}
