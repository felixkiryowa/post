import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  private iss = {
    login : 'http://127.0.0.1:8000/api/auth/login',
    signup: 'http://127.0.0.1:8000/api/auth/signup'
  };
  handle(token) {
     this.set(token);
     console.log(this.isValid());
  }

  set(token) {
    localStorage.setItem('token', token);
  }

  get() {
    return localStorage.getItem('token');
  }

  remove() {
    localStorage.removeItem('token');
  }

  isValid() {
    const token = this.get();
    if (token) {
        const payload = this.payload(token);
        if (payload) {
          return Object.values(this.iss).indexOf(payload.iss) > -1 ? true : false;
        }
    }
    return false;
  }
  payload(token) {
    // Splitting a token to pick out the payload
    const payload = token.split('.')[1];
    return this.decode(payload);
  }

  decode(payload) {
    // Decoding a token to base 64
    return JSON.parse(atob(payload));

  }

  loggedIn() {
    return this.isValid();
  }
}
