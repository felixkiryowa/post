import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { TokenService } from '../../services/token.service';
import { Router } from '@angular/router';
import { LoggedUserService } from '../../Services/logged-user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public form = {
    email: null,
    password: null
  };
   public error = null;

  constructor(
    private auth_service: AuthService, private token: TokenService,
    private router: Router,
    private loggedin_user: LoggedUserService
    ) { }

  ngOnInit() {
  }


  onSubmit() {
    this.auth_service.login(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }


  handleResponse(data) {
    this.token.handle(data.access_token);
    this.loggedin_user.checkAuthStatus(true);
    this.router.navigateByUrl('/profile');
  }
  handleError(error) {
    this.error = error.error.error;
  }



}
