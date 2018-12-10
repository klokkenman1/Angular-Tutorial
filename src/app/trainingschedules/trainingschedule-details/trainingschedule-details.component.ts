import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Trainingschedule } from '../trainingschedule.model';
import { TrainingschedulesService } from '../trainingschedules.service';
import { filter, map, tap, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-trainingschedule-details',
  templateUrl: './trainingschedule-details.component.html',
  styleUrls: ['./trainingschedule-details.component.scss']
})
export class TrainingscheduleDetailsComponent implements OnInit {

  title = 'Trainingschedule Detail';
  trainingschedule: Trainingschedule;
  id: String;
  
  constructor(
    private route: ActivatedRoute,
    private trainingscheduleService: TrainingschedulesService
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
      // then wait for trainingschedules to become available
      switchMap(id => this.trainingscheduleService.trainingschedulesAvailable)
    ).subscribe(available => this.trainingscheduleService.getTrainingschedule(this.id).subscribe(response => this.trainingschedule = response));
  }

}
