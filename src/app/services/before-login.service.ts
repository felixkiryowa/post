import { TokenService } from './token.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BeforeLoginService implements CanActivate {

  constructor(private token: TokenService, private router: Router) { }
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> | boolean {
      // handle any redirects if a user isn't authenticate
      return !this.token.loggedIn();
  }
}
