import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../user.service';

@Injectable({
  providedIn: 'root'
})
export class IsConnectedGuard {
  constructor(private router: Router, private userService: UserService){}



  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
      // return this.userService.login();
      console.log('NOUS NAVIGUONS BIEN');
      if (this.userService.getRole()=='USER' || this.userService.getRole()== 'ADMIN')
      {return true}
      else return this.userService.login();this.router.navigate([''])
  }
}
