import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreateInterviewService {

  constructor(private httpclient:HttpClient) { }

  getUrl(topic:any){
    var url = '';

    if(topic=='routing'){
      url = "https://6222413b666291106a21d80b.mockapi.io/qa-routing";
    }
    else{
      url = "https://6222413b666291106a21d80b.mockapi.io/qa-html";
    }

    return url;

  }

  createQuestion(question:any, topic:string):Observable<any>
  {
    return this.httpclient.post(this.getUrl(topic),question)
  }

  updateQuestion(id:any, question:any, topic:string):Observable<any>
  {
    return this.httpclient.put(this.getUrl(topic)+"/"+id,question);
  }


}
