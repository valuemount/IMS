import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InterviewRoutingModule } from './interview-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateinterviewComponent } from './components/createinterview/createinterview.component';
import { InterviewComponent } from './components/interview/interview.component';
import { SharedModule } from '../shared/shared.module';
import { InterviewsDashboardComponent } from './components/interviews-dashboard/interviews-dashboard.component';
import { NgxEditorModule } from 'ngx-editor';


@NgModule({
  declarations: [
    CreateinterviewComponent,
    InterviewComponent,
    InterviewsDashboardComponent,
  ],
  imports: [
    CommonModule,
    InterviewRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    NgxEditorModule
  ],
  exports:
  [
    CreateinterviewComponent,
    SharedModule,
    InterviewComponent,
    InterviewsDashboardComponent
  ],
  
})
export class InterviewModule { }
