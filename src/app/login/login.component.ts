import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  title = "Login"
  usernameText : string;
  passwordText : string;

  constructor(private authService : AuthService,private route: ActivatedRoute,
    private router: Router) { }

  onSubmit() {
    this.authService.login(this.usernameText, this.passwordText).subscribe(result => {
      console.log(result);
      if(result){
        this.router.navigate(['..'], { relativeTo: this.route });
      }
    })
  }

}
