import { TokenService } from './../../services/token.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { LoggedUserService } from 'src/app/Services/logged-user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public loggedIn: boolean;

  constructor(private loggedin_user: LoggedUserService, 
    private router: Router,
    private token: TokenService
    ) { }

  ngOnInit() {
    this.loggedin_user.authStatus.subscribe(
      value => this.loggedIn = value
    );
  }

  // Function to listen to logout click event
  logout (event: MouseEvent) {
    event.preventDefault();
    this.loggedin_user.checkAuthStatus(false);
    // Removing a token from storage
    this.token.remove();
    this.router.navigateByUrl('/login');
  }

}
