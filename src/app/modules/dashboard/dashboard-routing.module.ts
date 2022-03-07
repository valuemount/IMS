import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InterviewsDashboardComponent } from '../interview/components/interviews-dashboard/interviews-dashboard.component';

const routes: Routes = [
  // {path:'',component:InterviewsDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
