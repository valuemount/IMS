import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GroupshareService {

  constructor(private httpclient:HttpClient) { }
  getposts():Observable<any>
  {
    return this.httpclient.get("https://6222413b666291106a21d80b.mockapi.io/posts");
  }

  postmessage(message:any):Observable<any>
  {
    return this.httpclient.post("https://6222413b666291106a21d80b.mockapi.io/posts",message);
  }
}
