import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InterviewRoutingModule } from './interview-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateinterviewComponent } from './components/createinterview/createinterview.component';
import { InterviewComponent } from './components/interview/interview.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    CreateinterviewComponent,
    InterviewComponent,
  ],
  imports: [
    CommonModule,
    InterviewRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule
  ],
  exports:
  [
    CreateinterviewComponent,
    SharedModule,
    InterviewComponent
  ],
  
})
export class InterviewModule { }
