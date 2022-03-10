import { Location } from '@angular/common';
import { Component,  OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InterviewService } from 'src/app/services/interview/interview ques/interview.service';

@Component({
  selector: 'app-interview',
  templateUrl: './interview.component.html',
  styleUrls: ['./interview.component.css']
})
export class InterviewComponent implements OnInit {

   iqs:any=[];
   isEdit:boolean = false;
   editQuestion = null;
   level: string = 'basic';

   topic:string = '';

  constructor(private interviewService:InterviewService, public location: Location, private activatedRoute:ActivatedRoute) 
  {

    this.activatedRoute.queryParams.subscribe(
      (params:any)=>{
        this.topic = params.topic;
        console.log(params)
      }
    )
    

    this.interviewService.getinterview(this.topic).subscribe(
      (value:any)=>{
                      this.iqs=value
                   },
      (error:any)=>{
                      alert("error");
                      console.log(error);
                  }             
    )

  }

  ngOnInit() {
    
  }

  edit(item:any){
    this.isEdit = true;
    this.editQuestion = item;
    document.getElementById('createQuestionButton')?.click();
  }

  modalClose(){
    if(this.isEdit){
      this.isEdit = false;
      this.editQuestion = null;

    }
  }

}
