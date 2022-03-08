import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Editor, toDoc, Toolbar } from 'ngx-editor';
import { CreateInterviewService } from 'src/app/services/interview/create-interview.service';

@Component({
  selector: 'app-createinterview',
  templateUrl: './createinterview.component.html',
  styleUrls: ['./createinterview.component.css']
})
export class CreateinterviewComponent implements OnChanges, OnInit {

  @Input() data: any = null;
  public isEdit: boolean = false;

  editor: Editor;
  html:string = '';

  toolbar: Toolbar = [
    ['bold', 'italic'],
    ['underline', 'strike'],
    ['code', 'blockquote'],
    ['ordered_list', 'bullet_list'],
    [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
    ['link', 'image'],
    // ['text_color', 'background_color'],
    // ['align_left', 'align_center', 'align_right', 'align_justify'],
  ];

  constructor(private createinterviewservice:CreateInterviewService) { 
    this.editor = new Editor();
  }

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
    if(!this.isEdit){
      this.createinterviewservice.createQuestion(this.interviewForm.value).subscribe(
        (value:any)=>{   
          alert('success');
        },
        (error:any)=>{
            alert("error");
        }
      )
    }
    else{
      console.log(this.interviewForm.value);
      let form = this.interviewForm.value;
      form.answer = toDoc(form.answer);
      console.log(form);
      this.createinterviewservice.updateQuestion(this.interviewForm.get('id')?.value, form).subscribe(
        (value:any)=>{
          alert("success");
        },
        (error:any)=>{
          alert("error");
          console.log("error is",error);

        }
      )
    }
  }

  // make sure to destory the editor
  ngOnDestroy(): void {
    this.editor.destroy();
  }

}
