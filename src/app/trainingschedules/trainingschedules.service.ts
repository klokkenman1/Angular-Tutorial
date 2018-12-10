import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, Subject } from 'rxjs';
import { map, tap, take } from 'rxjs/operators';
import { Trainingschedule } from './trainingschedule.model';
import { Http } from '@angular/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class TrainingschedulesService {

  trainingschedules: Trainingschedule[]

  // Step 01: Explain why we use a behavior subject
  trainingschedulesAvailable = new BehaviorSubject<boolean>(false);

  constructor(
    private http: Http
  ) { console.log('TrainingscheduleService constructed');  }

  public getTrainingschedules(): Observable<Trainingschedule[]> {
    console.log('getTrainingschedules');
    return this.http.get(`${environment.apiUrl}/api/trainingschedule`).pipe(
      map(response => response.json().map(data => new Trainingschedule(data))),
      tap(trainingschedules => {
        this.trainingschedules = trainingschedules;
        this.trainingschedulesAvailable.next(true);
      })
    );
  }

  getTrainingschedule(id: String): Observable<Trainingschedule> {
    console.log(`getTrainingschedule(${id})`);
    return this.http.get(`${environment.apiUrl}/api/trainingschedule/${id}`).pipe(
      map(response => new Trainingschedule(response.json()))
    );
  }

  saveTrainingschedule(id: String, trainingschedule: Trainingschedule) {
    console.log(`saveTrainingschedule(${id})`);

    // could also save in the database from here

    // if(this.trainingschedules && id >= 0 && id < this.trainingschedules.length){
    //   this.trainingschedules[id] = trainingschedule;
    // }
  }

  saveNewTrainingschedule(trainingschedule: Trainingschedule) {
    console.log(`saveNewTrainingschedule()`);

    if(this.trainingschedules) {
      this.http.post(`${environment.apiUrl}/api/trainingschedule`,{username: 'admin1', name: trainingschedule.name}).subscribe((result) => {this.trainingschedules.push(new Trainingschedule(result.json()))});
    }
  }
}
