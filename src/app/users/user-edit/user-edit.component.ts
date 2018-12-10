import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user.model';
import { UserService } from '../users.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  title: string;
  // editMode switches between editing existing user or creating a new user.
  // Default is false (= create new user)
  editMode: boolean;
  id: number;
  user: User;
  submitted = false;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.title = this.route.snapshot.data['title'] || 'Edit User';
    this.editMode = this.route.snapshot.data['userAlreadyExists'] || false;
    // Get the data statically - changes are not reflected.
    // this.id = +this.route.snapshot.paramMap.get('id');

    if(this.editMode){
      
      // Subscribe to changes in route params. When the route changes we get updates on route params.
      this.route.params.subscribe((params) => {
        if (params['id']) {
          // Subscribe for available users. Once users are available we get our specific user.
          this.userService.usersAvailable.subscribe(userAvailable => {
            if (userAvailable) {
              // Step 03: Get the current user from the service
              this.id = +params['id'];
              this.user = this.userService.getUser(this.id);
            }
          })
        }
      });
    } else {
      // Create a new empty user. The required properties are filled 
      // with empty values by the usermodel.
      this.user = new User();
    }
  }

  onSubmit() { 
    this.submitted = true;
    console.log('onSubmit');
    // Save user via the service
    console.log(this.user);
    console.log(this.id);

    if(this.editMode) {
      this.userService.saveUser(this.id, this.user);
    } else {
      this.userService.saveNewUser(this.user);
    }
    
    // Part 17: navigate back to user-detail, displaying the correct user!
    this.router.navigate(['..'], { relativeTo: this.route });
  }

}
