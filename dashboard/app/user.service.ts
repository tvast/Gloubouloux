// user.service.ts
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import {  Jsonp , URLSearchParams ,  Response , RequestOptions } from '@angular/http';

@Injectable()
export class UserService {
  private loggedIn = false;
  private userAuth: string = "http://localhost:8080/api/authenticate"
  email :string
  password :string

  constructor(private http: Http) {
    this.loggedIn = !!localStorage.getItem('auth_token');
  }

  login(email :string, password:string) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');)

    return this.http
      .post(
        this.userAuth 
        JSON.stringify({ email, password }), 
        { headers }
      )
      .map(res => res.json())
      .map((res) => {
        if (res.success) {
          localStorage.setItem('auth_token', res.auth_token);
          this.loggedIn = true;
        }

        return res.success;
      });
  }
  
  logout() {
    localStorage.removeItem('auth_token');
    this.loggedIn = false;
  }

  isLoggedIn() {
    return this.loggedIn;
  }
}
//https://medium.com/@blacksonic86/authentication-in-angular-2-958052c64492#.io8d6aa8c