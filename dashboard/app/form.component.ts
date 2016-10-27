import { Component } from '@angular/core';
import { Bear }    from './bear';
import { BearService } from './bear.service';
import { Router }            from '@angular/router';
@Component({
  // moduleId: module.id,
  selector: 'bear-form',
  templateUrl: 'app/form.component.html'
})
export class FormComponent {
  bears: Bear[] = [];
  active = true;
  powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];
  model = new Bear(
    // 18, 'Dr IQ', this.powers[0], 'Chuck Overstreet'
  );
  submitted = false;
  constructor(
    private router: Router,
    private bearService: BearService) {
  }
  onSubmit() { this.submitted = true; }
  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

  ngOnInit(): void {
    this.bearService.getBears2().subscribe(bears => this.bears = bears);
    // this.loadBears();
  }

  newHero() {
   this.model = new Bear();
   this.active = false;
   setTimeout(() => this.active = true, 0);
 }

  // loadBears() {
  //
  //   this.bearService.getBears2().subscribe(
  //     bears => {
  //       console.log(bears)
  //
  //     }
  //     // ,error => {
  //     //   this.errorMessage = this._errorMappingService.getMessage(<any>error);
  //     // }
  //   );
  // }


}
