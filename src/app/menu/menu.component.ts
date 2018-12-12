import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  loggedIn: String;

  constructor(public authService: AuthService) {
    this.authService.loggedIn.subscribe(x => this.loggedIn = x);
  }

  ngOnInit() {
  }

}
