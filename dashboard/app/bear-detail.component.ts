import { Component, OnInit }      from '@angular/core';
import {Injectable, EventEmitter} from '@angular/core';
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

  bears: Bear[] = [];

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

  ngOnInit(): void {
    // this.bearService.getAllBears()
  }

  loadBear(ID: string) {
    let _emitters: { [ID: string]: EventEmitter<any> } = {};
    // let ID: string = '123gaga';

    this.bearService.getBears().subscribe(bears => this.bears = bears);
    if (! _emitters[ID])
    _emitters[ID] = new EventEmitter();
    return _emitters[ID];
  }


  goBack(): void {
    this.location.back();
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license*/
