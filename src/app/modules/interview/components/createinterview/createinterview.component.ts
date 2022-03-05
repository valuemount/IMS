import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CreateInterviewService } from 'src/app/services/interview/create-interview.service';

@Component({
  selector: 'app-createinterview',
  templateUrl: './createinterview.component.html',
  styleUrls: ['./createinterview.component.css']
})
export class CreateinterviewComponent implements OnInit {

  constructor(private createinterviewservice:CreateInterviewService) { }


  interviewForm:FormGroup=new FormGroup
  ({
    question:new FormControl(),
    answer:new FormControl()
  })

  postcreateint=""
  sub()
  {
   this.createinterviewservice.postcreateint(this.interviewForm.value).subscribe    
  (
    (value:any)=>   
    {   
     alert('success');
    },

    (error:any)=>
    {
      alert("error");
    }
  )
  }

  ngOnInit(): void {}



}
