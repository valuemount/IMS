import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CreateInterviewService } from 'src/app/services/interview/create-interview.service';

@Component({
  selector: 'app-createinterview',
  templateUrl: './createinterview.component.html',
  styleUrls: ['./createinterview.component.css']
})
export class CreateinterviewComponent implements OnChanges, OnInit {

  @Input() data: any = null;

  public isEdit: boolean = false;

  constructor(private createinterviewservice:CreateInterviewService) { }

  ngOnChanges(changes: SimpleChanges): void {

    if(this.data){
      this.isEdit = true;
      this.interviewForm.addControl('id', new FormControl());
      this.interviewForm.patchValue(this.data);
    }
    else{
      this.isEdit = false;
      this.interviewForm.removeControl('id');
      this.interviewForm.reset();
    }
    debugger;

  }

  ngOnInit(): void {

  }

  interviewForm:FormGroup=new FormGroup(
    {
      section: new FormControl(),
      subSection: new FormControl(),
      level: new FormControl(),
      question:new FormControl(),
      answer:new FormControl()
    }
  )

  sub()
  {
   this.createinterviewservice.postcreateint(this.interviewForm.value).subscribe(
      (value:any)=>{   
        alert('success');
      },
      (error:any)=>{
          alert("error");
      }
    )
  }

}
