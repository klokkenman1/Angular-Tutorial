import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Trainingschedule } from '../trainingschedule.model';
import { TrainingschedulesService } from '../trainingschedules.service';

@Component({
  selector: 'app-trainingschedule-list',
  templateUrl: './trainingschedule-list.component.html',
  styleUrls: ['./trainingschedule-list.component.scss']
})
export class TrainingscheduleListComponent implements OnInit {

  title = 'Trainingschedules ListComponent'
  trainingschedules: Trainingschedule[];

  constructor(
    private router: Router,
    private trainingschedulesService: TrainingschedulesService
  ) { }

  ngOnInit() {
    this.trainingschedulesService.getTrainingschedules().subscribe(trainingschedules => this.trainingschedules = trainingschedules);
  }

}
