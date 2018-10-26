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
    private Notify: SnotifyService
    ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.Notify.info('Wait.....', {
      timeout: 5000,
      showProgressBar: true,
      closeOnClick: false,
      pauseOnHover: true,
    });
    this.auth_service.sendPasswordResetLink(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.Notify.error(error.error.error)
    );
  }

  // Define a method to handle users response
  handleResponse(res) {
    this.Notify.success(res.success, {
      timeout: 0,
      showProgressBar: true,
      closeOnClick: false,
      pauseOnHover: true,
    });
    this.form.email = null;
  }

}
