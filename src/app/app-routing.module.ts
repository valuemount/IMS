import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DummyDashboardComponent } from './dummy/dummy-dashboard/dummy-dashboard.component';
import { DummyChatComponent } from './dummy/dummy-chat/dummy-chat.component';
import { DummyFormComponent } from './dummy/dummy-form/dummy-form.component';
import { DummyAuthenticationComponent } from './dummy/dummy-authentication/dummy-authentication.component';
import { RegistrationComponent } from './modules/authentication/registration/registration.component';
import { CreateinterviewComponent } from './modules/interview/components/createinterview/createinterview.component';

const routes: Routes = [

  

  // Dummy paths
  {path:'dummy-chat', component: DummyChatComponent },
  {path:'dummy-dashboard', component: DummyDashboardComponent },
  {path:'dummy-form', component: DummyFormComponent },
  {path:'dummy-auth', component: DummyAuthenticationComponent },
  {path:'registration',component:RegistrationComponent},
  {path:'createinterview',component:CreateinterviewComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
