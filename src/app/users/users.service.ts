import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, Subject } from 'rxjs';
import { map, tap, take } from 'rxjs/operators';
import { User } from './user.model';
import { Http } from '@angular/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[]

  // Step 01: Explain why we use a behavior subject
  usersAvailable = new BehaviorSubject<boolean>(false);

  constructor(
    private http: Http
  ) { console.log('UserService constructed');  }

  public getUsers(): Observable<User[]> {
    console.log('getUsers');
    return this.http.get(`${environment.apiUrl}/api/user`).pipe(
      map(response => response.json().map(data => new User(data))),
      tap(users => {
        this.users = users;
        this.usersAvailable.next(true);
      })
    );
  }

  getUser(id: number): User {
    console.log(`getUser(${id})`);

    if(this.users && id >= 0 && id < this.users.length){
      // id is valid and users are available

      // return a deep copy
      return JSON.parse(JSON.stringify(this.users[id]))
      // return this.users[id];
    } else {
      return undefined;
    }
  }

  saveUser(id: number, user: User) {
    console.log(`saveUser(${id})`);

    // could also save in the database from here

    if(this.users && id >= 0 && id < this.users.length){
      this.users[id] = user;
    }
  }

  saveNewUser(user: User) {
    console.log(`saveNewUser()`);

    // could also save in the database from here

    if(this.users) {
      this.users.push(user);
    }
  }
}
