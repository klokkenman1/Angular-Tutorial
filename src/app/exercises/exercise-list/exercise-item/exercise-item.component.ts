import { Component, OnInit, Input } from '@angular/core';



@Component({
  selector: '[app-exercise-item]',
  templateUrl: './exercise-item.component.html',
  styleUrls: ['./exercise-item.component.scss']
})
export class ExerciseItemComponent {

  @Input() selectedExercise;

}
