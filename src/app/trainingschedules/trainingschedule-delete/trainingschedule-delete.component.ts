import { Component, OnInit } from '@angular/core';
import { TrainingschedulesService } from '../trainingschedules.service';
import { Router, ActivatedRoute } from '@angular/router';
import { filter, map, tap, switchMap } from 'rxjs/operators';
import { Trainingschedule } from '../trainingschedule.model';


@Component({
  selector: 'app-trainingschedule-delete',
  templateUrl: './trainingschedule-delete.component.html',
  styleUrls: ['./trainingschedule-delete.component.scss']
})
export class TrainingscheduleDeleteComponent implements OnInit {

  title = "Verwijder oefening?";
  trainingschedule: Trainingschedule;
  id: String;

  constructor(
    private route: ActivatedRoute,
    private trainingscheduleService: TrainingschedulesService,
    private router: Router
  ) { }

  onClickDelete() {
    this.trainingscheduleService.deleteTrainingschedule(this.id);
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
      // then wait for foods to become available
      switchMap(id => this.trainingscheduleService.trainingschedulesAvailable)
    ).subscribe(available => this.trainingscheduleService.getTrainingschedule(this.id).subscribe(response => this.trainingschedule = response));
  }
}
