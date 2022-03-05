import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InterviewRoutingModule } from './interview-routing.module';
import { InterviewComponent } from './components/interview/interview.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    InterviewComponent
  ],
  imports: [
    CommonModule,
    InterviewRoutingModule,
    SharedModule
  ],
  exports:[
    InterviewComponent
  ]
})
export class InterviewModule { }
