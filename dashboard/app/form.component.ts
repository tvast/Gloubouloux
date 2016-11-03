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

  bear = new Bear();
  submitted = false;

  constructor(
    private router: Router,
    private bearService: BearService) {
  }
  onSubmit() { this.submitted = true; }

  ngOnInit(): void {
  }

 saveBear() {
   this.bearService.addBear(this.bear).subscribe(
     this.router.navigate(['home']),
    //  error => {
    //    this.errorMessage = this._errorMappingService.getMessage(<any>error);
    //  }
   );
 }


}
