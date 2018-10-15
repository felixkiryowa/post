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

const appRoutes: Routes = [
  { path: 'posts', component: PostListComponent },
  { path: 'login', component: LoginComponent },
  { path: 'post/create', component: PostFormComponent },
  { path: 'post/:id', component: PostViewComponent },
  { path: 'post/edit/:id', component: PostFormComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule,
    SuiModule
  ],
  declarations: [LayoutComponent, HeaderComponent, FooterComponent, PostListComponent,
     PostViewComponent, PostFormComponent, LoginComponent, SignupComponent, ProfileComponent, RequestResetComponent, ResponseResetComponent],
  exports: [LayoutComponent]
})
export class UiModule { }
