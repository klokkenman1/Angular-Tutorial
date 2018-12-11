import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, Subject } from 'rxjs';
import { map, tap, take } from 'rxjs/operators';
import { Trainingschedule } from './trainingschedule.model';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class TrainingschedulesService {

  trainingschedules: Trainingschedule[]

  trainingschedulesAvailable = new BehaviorSubject<boolean>(false);

  constructor(
    private http: HttpClient
  ) { console.log('TrainingscheduleService constructed');  }

  public getTrainingschedules(): Observable<Trainingschedule[]> {
    console.log('getTrainingschedules');
    return this.http.get<any>(`${environment.apiUrl}/api/trainingschedule`).pipe(
      map(response => response.map(data => new Trainingschedule(data))),
      tap(trainingschedules => {
        this.trainingschedules = trainingschedules;
        this.trainingschedulesAvailable.next(true);
      })
    );
  }

  getTrainingschedule(id: String): Observable<Trainingschedule> {
    console.log(`getTrainingschedule(${id})`);
    return this.http.get<any>(`${environment.apiUrl}/api/trainingschedule/${id}`).pipe(
      map(response => new Trainingschedule(response))
    );
  }

  saveTrainingschedule(id: String, trainingschedule: Trainingschedule) {
    console.log(`saveTrainingschedule(${id})`);

  }

  saveNewTrainingschedule(trainingschedule: Trainingschedule) {
    console.log(`saveNewTrainingschedule()`);

    if(this.trainingschedules) {
      this.http.post<any>(`${environment.apiUrl}/api/trainingschedule`,{username: 'admin1', name: trainingschedule.name}).subscribe((result) => {this.trainingschedules.push(new Trainingschedule(result))});
    }
  }
}
