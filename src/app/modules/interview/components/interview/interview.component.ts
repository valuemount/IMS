import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InterviewService } from 'src/app/services/interview/interview ques/interview.service';

@Component({
  selector: 'app-interview',
  templateUrl: './interview.component.html',
  styleUrls: ['./interview.component.css']
})
export class InterviewComponent implements OnInit {
   iqs:any=[]

  constructor(private interviewService:InterviewService) 
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

}
