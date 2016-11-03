import { Injectable } from '@angular/core';
import {  URLSearchParams , Headers, Http , RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import { Bear} from './bear';

@Injectable()
export class BearService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private bearUrl = 'http://localhost:8081/api/bears';  // URL to web api

  constructor(
    private http: Http
    // private jsonp: Jsonp
  ) { }
  // constructor(private jsonp: Jsonp) { }

  getBears() {
    // return Observable<Check[]>
    return this.http.get(this.bearUrl)
    .map(response => <Bear[]> response.json())
    // .catch(this.handleError)
    ;
  }

  addBear(bear: Bear) {
    let body = JSON.stringify(bear);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.bearUrl, body, options)
    .map(response => <String> response.text())
    // .catch(this.handleError)
    ;
  }

  getBear(id: number) {
    // return Observable<Check>
    return this.http.get(this.bearUrl + "/bear/" + id)
    .map(response => <String> response.json())
    // .catch(this.handleError)
    ;
  }
// 
//   findBears(bear : string) {
//   // End point for list of pets:
//   // http://api.petfinder.com/pet.find?key=[API_KEY]&animal=[ANIMAL]&format=json&location=texas
//   const endPoint = 'pet.find'
//   // URLSearchParams makes it easier to set query parameters and construct URL
//   // rather than manually concatinatng
//   let params = new URLSearchParams();
//   params.set('key', '555f8155d42d5c9be4705beaf4cce089');
//   params.set('location', 'texas');
//   params.set('animal', bear);
//   params.set('format', 'json');
//   params.set('callback', 'JSONP_CALLBACK');
//   // Return response
//  return this.jsonp
//             .get(this.bearUrl + endPoint, { search: params })
//             .map(response => <Bear[]> response.json());
// }
//
//   findBearById(id: string){
//    // End point for list of pets:
//    // http://api.petfinder.com/pet.find?key=[API_KEY]&animal=[ANIMAL]&format=json&location=texas
//    const endPoint = 'bear.get'
//    // URLSearchParams makes it easier to set query parameters and construct URL
//    // rather than manually concatinatng
//    let params = new URLSearchParams();
//   //  params.set('key', '555f8155d42d5c9be4705beaf4cce089');
//    params.set('id', id);
//    params.set('format', 'json');
//    params.set('callback', 'JSONP_CALLBACK');
//    console.log(id);
//    // Return response
//   return this.jsonp
//              .get(this.bearUrl + endPoint, { search: params })
//              .map(response => {
//
//                console.log(response.json().petfinder.pet);
//                return  response.json().petfinder.pet
//              });
//  }

}
