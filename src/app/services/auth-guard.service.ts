import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot,Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGaurdGuard implements CanActivate {
  path: ActivatedRouteSnapshot[];
  route: ActivatedRouteSnapshot;
  constructor(private auth: AuthService,private myRoute: Router){
  }
  
  canActivate(
  next: ActivatedRouteSnapshot,
  state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
  if(this.auth.isAuth){
    return true;
  }else{
    this.myRoute.navigate(["auth"]);
    return false;
  }
    }
  }
