import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreateInterviewService {

  constructor(private httpclient:HttpClient) { }

  createQuestion(question:any):Observable<any>
  {
    return this.httpclient.post("https://6222413b666291106a21d80b.mockapi.io/qa-html",question)
  }

  updateQuestion(id:any, question:any):Observable<any>
  {
    return this.httpclient.put("https://6222413b666291106a21d80b.mockapi.io/qa-html/"+id,question);
  }


}
