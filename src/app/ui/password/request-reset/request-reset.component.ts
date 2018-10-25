import { AuthService } from './../../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { SnotifyService } from 'ng-snotify';

@Component({
  selector: 'app-request-reset',
  templateUrl: './request-reset.component.html',
  styleUrls: ['./request-reset.component.css']
})
export class RequestResetComponent implements OnInit {

  public form = {
    email: null
  };
  constructor(
    private auth_service: AuthService,
    private notify: SnotifyService
    ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.auth_service.sendPasswordResetLink(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.notify.error(error.error.error)
    );
  }

  // Define a method to handle users response
  handleResponse(res) {
    console.log(res);
    this.form.email = null;
  }

}
