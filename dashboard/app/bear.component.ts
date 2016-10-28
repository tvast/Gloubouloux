import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Bear }        from './bear';
import { BearService } from './bear.service';

@Component({
  // moduleId: module.id,
  selector: 'my-dashboard',
  templateUrl: 'app/bear.component.html',
  // styleUrls: [ 'dashboard.component.css' ]
})
export class BearComponent implements OnInit {
  bears: Bear[] = [];

  constructor(
    private router: Router,
    private bearService: BearService) {
  }

  ngOnInit(): void {
    this.bearService.getBears().subscribe(bears => this.bears = bears);
    this.loadBears();
  }

  loadBears() {

    this.bearService.getBears().subscribe(
      bears => {
        console.log(bears)

      }
      // ,error => {
      //   this.errorMessage = this._errorMappingService.getMessage(<any>error);
      // }
    );
  }

  gotoDetail(bear: Bear): void {
    let link = ['/detail', bear.id];
    this.router.navigate(link);
  }
}
