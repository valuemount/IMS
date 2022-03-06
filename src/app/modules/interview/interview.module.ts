import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InterviewRoutingModule } from './interview-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateinterviewComponent } from './components/createinterview/createinterview.component';


@NgModule({
  declarations: [
    CreateinterviewComponent
  ],
  imports: [
    CommonModule,
    InterviewRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports:
  [
    CreateinterviewComponent,
  ]
})
export class InterviewModule { }
