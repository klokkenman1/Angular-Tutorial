import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, Subject } from 'rxjs';
import { map, tap, take } from 'rxjs/operators';
import { Exercise } from './exercise.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ExercisesService {

  exercises: Exercise[]

  exercisesAvailable = new BehaviorSubject<boolean>(false);

  constructor(
    private http: HttpClient
  ) { console.log('ExerciseService constructed');  }

  public getExercises(): Observable<Exercise[]> {
    return this.http.get<any>(`${environment.apiUrl}/api/exercise`).pipe(
      map(response => response.map(data => new Exercise(data))),
      tap(exercises => {
        this.exercises = exercises;
        this.exercisesAvailable.next(true);
      })
    );
  }

  getExercise(id: String): Observable<Exercise> {
    console.log(`getExercise(${id})`);
    return this.http.get<any>(`${environment.apiUrl}/api/exercise/${id}`).pipe(
      map(response => new Exercise(response))
    );
  }

  saveExercise(id: String, exercise: Exercise) {
    if(this.exercises) {
      this.http.put<any>(`${environment.apiUrl}/api/exercise/${id}`,{name: exercise.name, description: exercise.description, muscles: exercise.muscles}).subscribe((result) => {this.exercises.splice(this.exercises.findIndex(item => item._id == id), 1); this.exercises.push(new Exercise(result))});
    }
  }

  saveNewExercise(exercise: Exercise) {
    if(this.exercises) {
      this.http.post<any>(`${environment.apiUrl}/api/exercise`,{name: exercise.name, description: exercise.description, muscles: exercise.muscles}).subscribe((result) => {this.exercises.push(new Exercise(result))});
    }
  }

  deleteExercise(id: String) {
    if(this.exercises) {
      this.http.delete(`${environment.apiUrl}/api/exercise/${id}`).subscribe();
      this.exercises.splice(this.exercises.findIndex(item => item._id == id), 1);
    }
  }
}
