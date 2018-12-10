import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Trainingschedule } from '../trainingschedule.model';
import { TrainingschedulesService } from '../trainingschedules.service';

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

  constructor(
    private trainingschedulesService: TrainingschedulesService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.title = this.route.snapshot.data['title'] || 'Edit Trainingschedule';
    this.editMode = this.route.snapshot.data['trainingscheduleAlreadyExists'] || false;
    // Get the data statically - changes are not reflected.
    // this.id = +this.route.snapshot.paramMap.get('id');

    if(this.editMode){
      
      // Subscribe to changes in route params. When the route changes we get updates on route params.
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
      // Create a new empty trainingschedule. The required properties are filled 
      // with empty values by the trainingschedulemodel.
      this.trainingschedule = new Trainingschedule();
    }
  }

  onSubmit() { 
    this.submitted = true;
    console.log('onSubmit');
    // Save trainingschedule via the service
    console.log(this.trainingschedule);
    console.log(this.id);

    if(this.editMode) {
      this.trainingschedulesService.saveTrainingschedule(this.id, this.trainingschedule);
    } else {
      this.trainingschedulesService.saveNewTrainingschedule(this.trainingschedule);
    }
    
    // Part 17: navigate back to trainingschedule-detail, displaying the correct trainingschedule!
    this.router.navigate(['..'], { relativeTo: this.route });
  }

}
