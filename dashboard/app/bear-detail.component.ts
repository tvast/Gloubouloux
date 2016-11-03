import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';

import { Bear }        from './bear';
import { BearService } from './bear.service';

@Component({
  // moduleId: module.id,
  selector: 'bear-detail',
  templateUrl: 'app/bear-detail.component.html',
  styleUrls: [ 'style.css' ]
})
export class BearDetailComponent implements OnInit {

  bear: Bear

  constructor(
    private bearService: BearService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    // this.route.params.forEach((params: Params) => {
    //   let id = +params['id'];
    //   this.bearService.getBear(id)
    //     .then(bear : => this.bear = bear);
    // });
  }

  // save(): void {
  //   this.bearService.update(this.hero)
  //     .then(() => this.goBack());
  // }

  goBack(): void {
    this.location.back();
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license*/
