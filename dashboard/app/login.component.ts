import { Component }          from '@angular/core';
import { Router }            from '@angular/router';
import { BearService } from './bear.service';
import { Bear }    from './bear';

@Component({
  // moduleId: module.id,
  selector: 'login',
  templateUrl: `app/login.component.html`,
  styleUrls: ['app/login.component.css']
})
export class LoginComponent {
  // title = 'Tour of Heroes';
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
