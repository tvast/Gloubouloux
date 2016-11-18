import { Component } from '@angular/core';
import { Bear }    from './bear';
import { BearService } from './bear.service';
import { Router }            from '@angular/router';
import {Observable} from 'rxjs/Rx';

@Component({
  // moduleId: module.id,
  selector: 'bear-form',
  templateUrl: 'app/form.component.html'
})
export class FormComponent {
  bears: Bear[] = [];
  active = true;

  bear = new Bear();
  submitted = false;

  constructor(
    private router: Router,
    private bearService: BearService) {
    }
    onSubmit() { this.submitted = true; }

    ngOnInit(): void {
    }

    saveBear(bear: Bear) : void {
      let commentOperation:Observable<Bear[]>;
      this.bearService.addBear(this.bear).subscribe(
      );
      let link = ['/bear'];
      this.router.navigate(link);
    }
  }
