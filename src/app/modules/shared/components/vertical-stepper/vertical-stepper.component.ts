import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EventManager } from '@angular/platform-browser';

@Component({
  selector: 'app-vertical-stepper',
  templateUrl: './vertical-stepper.component.html',
  styleUrls: ['./vertical-stepper.component.css']
})
export class VerticalStepperComponent implements OnInit {

  @Input() data: any = [];
  @Output() edit: EventEmitter<any> = new EventEmitter<any>();

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

  editQuestion(item:any){
    this.edit.emit(item);
  }

}
