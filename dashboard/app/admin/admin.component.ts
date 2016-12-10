import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { MasonryModule } from 'angular2-masonry';

import { Bear }        from './../bear';
import { BearService } from './../bear.service';

import {Injectable, EventEmitter} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Location }               from '@angular/common';

@Component({
  selector: 'Admin component',
  templateUrl: 'app/admin/admin.component.html',
  styleUrls: [ 'app/css/admin.component.css' ]
})
export class AdminComponent implements OnInit {
  bears: Bear[] = [];
  $ : any;
  totalWolf : number;
  averageWolf : any = []; 

  private sub:any;
  private bear: Bear;
  private router: Router;

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
    this.bearService.getAllBears().subscribe(
      bears => {
        this.bears = bears;
        this.totalWolf = this.bears.length;
      })    
  }


  destroy (bear:Bear) {
    this.sub = this.route.params.subscribe(params => {
      let id = params['bear._id'];
       // Retrieve Pet with Id route param
       this.bearService.deleteBear(id).subscribe(bear => this.bear = bear);
     });
    }
  }