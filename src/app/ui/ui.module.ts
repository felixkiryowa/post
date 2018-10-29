import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostViewComponent } from './post-view/post-view.component';
import { PostFormComponent } from './post-form/post-form.component';
import { HttpClientModule } from '@angular/common/http';
import { SuiModule } from 'ng2-semantic-ui'; 
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { RequestResetComponent } from './password/request-reset/request-reset.component';
import { ResponseResetComponent } from './password/response-reset/response-reset.component';

import { AuthService } from '../services/auth.service';
import { TokenService } from '../services/token.service';
import { LoggedUserService } from '../Services/logged-user.service';
import { AfterLoginService } from '../services/after-login.service';
import { BeforeLoginService } from '../services/before-login.service';
import { CustomerService } from '../services/customer.service';
import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';
import { MessageService } from '../services/message.service';
import { CustomerComponent } from '../customer/customer.component';
import { CustomerDetailsComponent } from '../customer-details/customer-details.component';
import { AddCustomerComponent } from '../add-customer/add-customer.component';
const appRoutes: Routes = [
  {
    path: 'posts',
    component: PostListComponent,
    canActivate: [AfterLoginService]
   },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [BeforeLoginService]

},
  {
    path: 'signup',
    component: SignupComponent,
    canActivate: [BeforeLoginService] },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AfterLoginService]

  },
  {
    path: 'request-password-reset',
    component: RequestResetComponent,
    canActivate: [BeforeLoginService]
  },
  {
    path: 'response-password-reset',
    component: ResponseResetComponent,
    canActivate: [BeforeLoginService]
  },
  {
    path: 'post/create',
    component: PostFormComponent,
    canActivate: [AfterLoginService]
  },
  {
    path: 'post/:id',
    component: PostViewComponent,
    canActivate: [AfterLoginService]
   },
  {
    path: 'post/edit/:id',
    component: PostFormComponent,
    canActivate: [AfterLoginService]
  },
  {
    path: 'customers',
    component: CustomerComponent
  },
  {
    path: 'customer/add',
    component: AddCustomerComponent
  },
  {
    path: 'customers/:id',
    component: CustomerDetailsComponent
  },
  {
    path: '',
     redirectTo: '/customers',
      pathMatch: 'full'
   },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule,
    SnotifyModule,
    SuiModule
  ],
  providers: [
    AuthService,
    TokenService,
    LoggedUserService,
    AfterLoginService,
    BeforeLoginService,
    { provide: 'SnotifyToastConfig', useValue: ToastDefaults},
    SnotifyService,
    MessageService,
    CustomerService
  ],
  declarations: [LayoutComponent, HeaderComponent, FooterComponent, PostListComponent,
     PostViewComponent, PostFormComponent, LoginComponent, SignupComponent, ProfileComponent,
      RequestResetComponent, ResponseResetComponent, CustomerComponent, CustomerDetailsComponent, AddCustomerComponent],
  exports: [LayoutComponent]
})
export class UiModule { }
