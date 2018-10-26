import { AuthService } from './../../../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { SnotifyService } from 'ng-snotify';

@Component({
  selector: 'app-response-reset',
  templateUrl: './response-reset.component.html',
  styleUrls: ['./response-reset.component.css']
})
export class ResponseResetComponent implements OnInit {

  public error = [];
  public form = {
    email: null,
    password: null,
    password_confirmation: null,
    resetToken: null
  };
  constructor(
    private route: ActivatedRoute,
    private auth_service: AuthService,
    private router: Router,
    private Notify: SnotifyService
  ) {
    route.queryParams.subscribe(params => {
      this.form.resetToken = params['token'];
    });
   }

   onSubmit() {
    this.auth_service.changePassword(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
   }


   handleResponse(data) {
     const _router = this.router;
      this.Notify.confirm('Done !! , Now Login With New Password', {
        timeout: 5000,
        showProgressBar: true,
        closeOnClick: false,
        pauseOnHover: true,
        buttons: [
          {
            text: 'Okay',
            action: (toast) => {
             _router.navigateByUrl('/login'),
             this.Notify.remove(toast.id);
            }
          },
        ]
      });
   }

   handleError(error) {
    this.error = error.error.errors;
   }

  ngOnInit() {
  }

}
