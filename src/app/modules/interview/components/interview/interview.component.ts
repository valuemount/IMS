import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  constructor(private interviewService:InterviewService, public location: Location) 
  {
    this.interviewService.getinterview().subscribe(
      (value:any)=>{
                      this.iqs=value
                   },
      (error:any)=>{
                      alert("error")
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
