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
    else if(topic =='Forms'){
      url = "https://622f67863ff58f023c1fa464.mockapi.io/qa-forms";
    }
    else{
      url = "https://6222413b666291106a21d80b.mockapi.io/qa-html";
    }


    return this.httpClient.get(url).pipe(
      map((value:any)=>{
       
        value.forEach((question:any)=>{
          console.log(question.answer);
          if(question?.answer && question.answer != '<p></p>'){
            
            question.answer = toHTML(question.answer);
            console.log(question.answer)
          }
          // console.log(question.answer);
        })

        return value;

      },
      )
    )

  }
}
