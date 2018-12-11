import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { Observable, BehaviorSubject, Subject } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';

@Injectable()
export class AuthService {
    loggedInSubject: BehaviorSubject<String>;
    loggedIn: Observable<String>;


    constructor(
        private http: HttpClient
    ) {
        console.log('AuthService constructed');
        this.loggedInSubject = new BehaviorSubject<String>(this.getToken())
        this.loggedIn = this.loggedInSubject.asObservable();
    }

    public getToken(): string {
        return localStorage.getItem('token');
    }

    public login(username, password) {
        return this.http.post(`${environment.apiUrl}/api/user/login`, { username: username, password: password }, {responseType: 'text'}).pipe(
            tap(result => {
                if (result) {
                    localStorage.setItem('token', result);
                    this.loggedInSubject.next(result);
                }
            }),
        );
    }

    public register(username, password) {
        return this.http.post(`${environment.apiUrl}/api/user/register`, { username: username, password: password }, {responseType: 'text'}).pipe(
            tap(result => {
                if (result) {
                    localStorage.setItem('token', result);
                    this.loggedInSubject.next(result);
                }
            }),
        );
    }

    logout() {
        localStorage.removeItem('token');
        this.loggedInSubject.next(null);
    }

}