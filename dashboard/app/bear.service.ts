import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

// import { Hero } from './hero';
// import { HEROES } from './mock-heroes';
import 'rxjs/add/operator/toPromise';
import { Bear} from './bear';

@Injectable()
export class BearService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private bearUrl = 'http://localhost:8080/api/bears';  // URL to web api

  constructor(private http: Http) { }

  getBears(): Promise<Bear[]> {
    return this.http.get(this.bearUrl)
               .toPromise()
               .then(response => response.json().data as Bear[])
               .catch(this.handleError);
  }

  getBear(id: number): Promise<Bear> {
    return this.getBears()
               .then(bears => bears.find(bear => bear.id === id));
  }

  delete(id: number): Promise<void> {
    const url = `${this.bearUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  create(name: string): Promise<Bear> {
    return this.http
      .post(this.bearUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
  }

  update(bear: Bear): Promise<Bear> {
    const url = `${this.bearUrl}/${bear.id}`;
    return this.http
      .put(url, JSON.stringify(bear), {headers: this.headers})
      .toPromise()
      .then(() => bear)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
