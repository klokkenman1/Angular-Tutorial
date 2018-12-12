import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: '[app-trainingschedule-item]',
  templateUrl: './trainingschedule-item.component.html',
  styleUrls: ['./trainingschedule-item.component.scss']
})
export class TrainingscheduleItemComponent implements OnInit {

  @Input() selectedTrainingschedule;
  @Input() index;

  constructor() { 
  }
  
  ngOnInit() {
    // console.log(`${this.selectedTrainingschedule.name.first}`);
  }

}
