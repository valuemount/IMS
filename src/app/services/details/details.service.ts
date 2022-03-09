import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  constructor(private httpclient:HttpClient) { }
  postdetails(details:string):Observable<any>
  {
    return this.httpclient.post("/assets/data/details.json",details)
  }
}
