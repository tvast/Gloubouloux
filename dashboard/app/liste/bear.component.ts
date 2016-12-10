import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { MasonryModule } from 'angular2-masonry';

import { Bear }        from './../bear';
import { BearService } from './../bear.service';

@Component({
  // moduleId: module.id,
  selector: 'my-dashboard',
  templateUrl: 'app/liste/bear.component.html',
  styleUrls: [ 'app/css/bear.component.css' ]
})
export class BearComponent implements OnInit {
  bears: Bear[] = [];
  $ : any;

  constructor(
    private router: Router,
    private bearService: BearService) {
    }

    ngOnInit(): void {
      this.bearService.getAllBears().subscribe(bears => this.bears = bears);
    }

    gotoDetail(bear: Bear): void {
      let link = ['/beardetail', bear.id];
      this.router.navigate(link);
    }
  }
