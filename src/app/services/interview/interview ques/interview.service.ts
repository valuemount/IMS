import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { toHTML } from 'ngx-editor';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterviewService {

  constructor(private httpClient:HttpClient) { }

  getinterview(topic:any):Observable<any>
  {
    var url = '';

    if(topic=='routing'){
      url = "https://6222413b666291106a21d80b.mockapi.io/qa-routing";
    }
    else{
      url = "https://6222413b666291106a21d80b.mockapi.io/qa-html";
    }


    return this.httpClient.get(url).pipe(
      map((value:any)=>{
       
        value.forEach((question:any)=>{
          // console.log(question.answer);
          question.answer = toHTML(question.answer);
          // console.log(question.answer);
        })

        return value;

      })
    )

  }
}
