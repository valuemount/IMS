import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-vertical-stepper',
  templateUrl: './vertical-stepper.component.html',
  styleUrls: ['./vertical-stepper.component.css']
})
export class VerticalStepperComponent implements OnInit {

  @Input() data: any = [
    {id:'1', question:'what', answer:'answer is'},
    {id:'2', question:'what', answer:'answer is'},
    {id:'3', question:'what', answer:'answer is'},
    {id:'4', question:'what', answer:'answer is'}
  ]

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  ngOnInit() {
    
  }

}
