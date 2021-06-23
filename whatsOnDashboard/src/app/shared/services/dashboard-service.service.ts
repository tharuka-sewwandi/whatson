import { Injectable } from '@angular/core';
import { map } from "rxjs/operators";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DashboardServiceService {

  constructor(private readonly http: HttpClient) { }

  // searchService(newEntry: any): Observable<any> {
  //   let url = '';
  //   console.log(newEntry);
  //   return this.http.post(url, newEntry);
  // }

  // registerCar(newCar:any):Observable<any>{
  //   //api post request to register car
  //   newCar.carOwnerId = localStorage.getItem("carOwnerId")
  //   console.log("This is the new car:",newCar)

  //   let url = apiURL + '/cars'

  //   // Set headers
  //   let headers = new HttpHeaders()
  //   headers = headers.set("Authorization", "bearer " + localStorage.getItem("token"))

  //   return this.http.post(url, newCar, {headers:headers})
  // }
}
