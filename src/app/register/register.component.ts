import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  title = "Register"
  usernameText : string;
  passwordText : string;

  constructor(private authService : AuthService,private route: ActivatedRoute,
    private router: Router) { }

  onSubmit() {
    this.authService.register(this.usernameText, this.passwordText).subscribe(result => {
      console.log(result);
      if(result){
        this.router.navigate(['..'], { relativeTo: this.route });
      }
    })
  }
}
