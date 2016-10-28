import { Injectable } from '@angular/core';
import { Headers, Http , RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import { Bear} from './bear';

@Injectable()
export class BearService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private bearUrl = 'http://localhost:8081/api/bears';  // URL to web api

  constructor(private http: Http) { }

  getBears() {
      // return Observable<Check[]>
      return this.http.get(this.bearUrl)
          .map(response => <Bear[]> response.json())
          .catch(this.handleError)
          ;
  }

  addBear(bear: Bear) {
      let body = JSON.stringify(bear);
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });

      return this.http.post(this.bearUrl, body, options)
          .map(response => <String> response.text())
          .catch(this.handleError)
          ;
  }
 //  create(name: string): Promise<Bear> {
 //   return this.http
 //     .post(this.bearUrl, JSON.stringify({name: name}), {headers: this.headers})
 //     .toPromise()
 //     .then(res => res.json().data)
 //     .catch(this.handleError);
 // }
  //
  // getBear(id: number): Promise<Bear> {
  //   return this.getBears()
  //              .then(bears => bears.find(bear => bear.id === id));
  // }
  //
  // delete(id: number): Promise<void> {
  //   const url = `${this.bearUrl}/${id}`;
  //   return this.http.delete(url, {headers: this.headers})
  //     .toPromise()
  //     .then(() => null)
  //     .catch(this.handleError);
  // }
  //
  // create(name: string): Promise<Bear> {
  //   return this.http
  //     .post(this.bearUrl, JSON.stringify({name: name}), {headers: this.headers})
  //     .toPromise()
  //     .then(res => res.json().data)
  //     .catch(this.handleError);
  // }
  //
  // update(bear: Bear): Promise<Bear> {
  //   const url = `${this.bearUrl}/${bear.id}`;
  //   return this.http
  //     .put(url, JSON.stringify(bear), {headers: this.headers})
  //     .toPromise()
  //     .then(() => bear)
  //     .catch(this.handleError);
  // }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
