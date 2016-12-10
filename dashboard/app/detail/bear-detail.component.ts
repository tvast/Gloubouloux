import { Component, OnInit }      from '@angular/core';
import {Injectable, EventEmitter} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';

import { Observable } from 'rxjs/Observable';

import { Bear }        from './../bear';
import { BearService } from './../bear.service';

import { Router }            from '@angular/router';

@Component({
  // moduleId: module.id,
  selector: 'bear-detail',
  templateUrl: 'app/detail/bear-detail.component.html',
  styleUrls: [ 'app/css/styledetail.component.css' ],
})
export class BearDetailComponent implements OnInit {
  
  private sub:any;
  private bear: Bear;
  private router: Router;
  $:any;

  

  constructor(
    private bearService: BearService,
    private route: ActivatedRoute,
    private location: Location
    ) {}

  private static _emitters: { [ID: string]: EventEmitter<any> } = {};
  // Set a new event in the store with a given ID
  // as key
  static get(ID: string): EventEmitter<any> {
    if (!this._emitters[ID])
      this._emitters[ID] = new EventEmitter();
    return this._emitters[ID];
  }

  // Load data ones componet is ready
  ngOnInit() {
      // Subscribe to route params
      this.sub = this.route.params.subscribe(params => {
        let id = params['id'];
       // Retrieve Pet with Id route param
       this.bearService.findBearById(id).subscribe(bear => this.bear = bear);
       console.log(id)
       console.log(this.bear)
     });
    }  

    destroy (bear:Bear) {
      this.sub = this.route.params.subscribe(params => {
        let id = params['id'];
       // Retrieve Pet with Id route param
       this.bearService.deleteBear(id).subscribe(bear => this.bear = bear);
     });
      // this.location.back();

    }

    gotoDetail(bear: Bear): void {
      let link = ['/form'];
      this.router.navigate(link);
    }


    goBack(): void {
      this.location.back();
    }


  }


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license*/
