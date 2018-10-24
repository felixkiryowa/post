import { TokenService } from './../services/token.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoggedUserService {

  constructor(private token: TokenService) { }

  public loggedIn = new BehaviorSubject < boolean >(this.token.loggedIn());
// This makes sure that if the login status of a user changes the authStatus changes as well
  authStatus = this.loggedIn.asObservable();

  // Function to check auth status
  checkAuthStatus( value: boolean ) {
    this.loggedIn.next(value);
  }
}
