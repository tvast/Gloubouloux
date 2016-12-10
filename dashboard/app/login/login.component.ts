import { Component }          from '@angular/core';
import { Router }            from '@angular/router';
import { BearService } from './../bear.service';
import { Bear }    from './../bear';

@Component({
  selector: 'login',
  templateUrl: `app/login/login.component.html`,
  styleUrls: ['app/css/login.component.css']
})
export class LoginComponent {
  submitted = false;
  id : string;
  password : string;
  isLoged : boolean;
  multiPasse : string;

    constructor(
    private router: Router,
    private bearService: BearService) {
  }

  Login () {
  	let token = this.id + this.password
  	console.log(token);
  	this.multiPasse = token;
  }

  onSubmit() { 
  	this.Login ();
  	
  	let link = ['/landingpage'];
    return this.router.navigate(link);
  		
  	
  }
}
