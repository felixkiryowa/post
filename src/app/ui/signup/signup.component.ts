import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {


  public form = {
    name: null,
    email: null,
    password: null,
    password_confirmation: null
  };

  // An array to  hold all the errors
  private error = [];

  constructor(private auth_service: AuthService, private token: TokenService,
    private router: Router
    ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.auth_service.SignUp(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }

  handleResponse(data) {
    this.token.handle(data.access_token);
    this.router.navigateByUrl('/profile');
  }

  handleError(error) {
    this.error = error.error.errors;
  }



}
