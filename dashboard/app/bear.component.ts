import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { MasonryModule } from 'angular2-masonry';

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
      this.bearService.getAllBears().subscribe(bears => this.bears = bears);
      // console.log(bears)
      // this.loadBears();
    }

    gotoDetail(bear: Bear): void {
      let link = ['/beardetail', bear.id];
      this.router.navigate(link);
    }
  }
