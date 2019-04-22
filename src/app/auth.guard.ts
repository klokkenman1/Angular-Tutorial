import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import {Router} from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(public auth: AuthService,
    private myRoute: Router) {console.log("AuthGuard")}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.log(this.auth.getToken());
      if(this.auth.getToken()){
        return true;
      }else{
        this.myRoute.navigate(["/login"]);
        return false;
      }
  }
  
}
