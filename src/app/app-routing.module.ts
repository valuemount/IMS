import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DummyDashboardComponent } from './dummy/dummy-dashboard/dummy-dashboard.component';
import { DummyChatComponent } from './dummy/dummy-chat/dummy-chat.component';
import { DummyFormComponent } from './dummy/dummy-form/dummy-form.component';
import { DummyAuthenticationComponent } from './dummy/dummy-authentication/dummy-authentication.component';
import { RegistrationComponent } from './modules/authentication/registration/registration.component';
import { CreateinterviewComponent } from './modules/interview/components/createinterview/createinterview.component';
import { LoginComponent } from './modules/authentication/login/login.component';
import { VerticalStepperComponent } from './modules/shared/components/vertical-stepper/vertical-stepper.component';
import { InterviewComponent } from './modules/interview/components/interview/interview.component';
import { DashboardComponent } from './modules/dashboard/components/dashboard/dashboard.component';
import { InterviewsDashboardComponent } from './modules/interview/components/interviews-dashboard/interviews-dashboard.component';

const routes: Routes = [

  {path:'dashboard', component: DashboardComponent, children:[
    {path:'interview-dashboard', component:InterviewsDashboardComponent },
    {path:'explore', component:InterviewComponent},
    {path:'', redirectTo:'interview-dashboard', pathMatch:'full'}
  ]},
  {path:'interview',component:InterviewComponent},
  {path:'login',component:LoginComponent},

  // Dummy paths
  {path:'dummy-chat', component: DummyChatComponent },
  {path:'dummy-dashboard', component: DummyDashboardComponent },
  {path:'dummy-form', component: DummyFormComponent },
  {path:'dummy-auth', component: DummyAuthenticationComponent },
  {path:'registration',component:RegistrationComponent},
  {path:'createinterview',component:CreateinterviewComponent},
  {path:'dummy-stepper', component: VerticalStepperComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
