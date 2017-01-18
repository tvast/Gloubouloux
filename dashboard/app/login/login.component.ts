// login.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from './../user.service';
import { Token } from './../token';
import { User } from './../user';

@Component({
  selector: 'login',
  templateUrl: `app/login/login.component.html`,
})
export class LoginComponent {
  constructor(private userService: UserService, private router: Router) {}
  name : string;
  password : string ;
  users: User[] = [];
  tokens: Token[] = [];

  onSubmit(this.email, this.password) {
    console.log("hello")
    this.userService.login(this.email, this.password).subscribe((result) => {
      console.log(token)
      if (result) {
        this.router.navigate(['/landingpage']);
        console.log("salut")
      }
    });
  }
}  
