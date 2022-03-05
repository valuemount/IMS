import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterviewService {

  constructor(private httpClient:HttpClient) { }

  getinterview():Observable<any>
  {
    return this.httpClient.get("https://6222413b666291106a21d80b.mockapi.io/qa-html")
  }

}
