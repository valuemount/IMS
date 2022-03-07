import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InterviewComponent } from './components/interview/interview.component';
import { InterviewsDashboardComponent } from './components/interviews-dashboard/interviews-dashboard.component';

const routes: Routes = [
  {path:'interview',component:InterviewComponent},
  {path:'', redirectTo:'interview', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InterviewRoutingModule { }
