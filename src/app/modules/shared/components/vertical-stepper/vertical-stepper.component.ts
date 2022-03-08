import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { toDoc, toHTML } from 'ngx-editor';

@Component({
  selector: 'app-vertical-stepper',
  templateUrl: './vertical-stepper.component.html',
  styleUrls: ['./vertical-stepper.component.css']
})
export class VerticalStepperComponent implements OnInit {

  @Input() data: any = [];
  @Output() edit: EventEmitter<any> = new EventEmitter<any>();

  isLinear = false;
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;

  constructor(private _formBuilder: FormBuilder, private domSanitizer: DomSanitizer) {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
    });
  }

  ngOnInit() {
    
  }

  editQuestion(item:any){
    // item = toDoc(item);
    this.edit.emit(item);
  }

  transform(html:any) {

    return this.domSanitizer.bypassSecurityTrustHtml(html);
    
    // let tranformedHtml = this.domSanitizer.bypassSecurityTrustHtml(html);
    // console.log(tranformedHtml);
    // return tranformedHtml;

    // tranformedHtml = tranformedHtml.slice(38);
    // return this.domSanitizer.bypassSecurityTrustStyle(html);
    // return this.sanitizer.bypassSecurityTrustXxx(style); - see docs
  }

}