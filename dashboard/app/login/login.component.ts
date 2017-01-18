// login.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from './../user.service';
import { Bear }        from './../bear';
import { BearService } from './../bear.service';

@Component({
  selector: 'login',
  templateUrl: `app/login/login.component.html`,
})
export class LoginComponent {
  constructor(
    private userService: UserService, 
    private router: Router,
    private bearService: BearService
    ) {}
  bears: Bear[] = [];
  email: string;
  private bear: Bear;
  islog : any = []

/*  onSubmit(email, password) {
    this.userService.login(email, password).subscribe((result) => {
      if (result) {
        this.router.navigate(['']);
        console.log("salut")
      }
    });
  }*/
 

  onSubmit3(email : string) {
  /*  this.bearService.getAllBears().subscribe(
      bears => this.bears = bears );*/

        for (let bear of this.bears) {

            if (bear.description == this.email) {
              this.router.navigate(['wolf']);
              console.log("salut")  ;
            } else {
              console.log("salut");
            }
          }
  }
}
