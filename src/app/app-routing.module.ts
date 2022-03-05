import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DummyDashboardComponent } from './dummy/dummy-dashboard/dummy-dashboard.component';
import { DummyChatComponent } from './dummy/dummy-chat/dummy-chat.component';
import { DummyFormComponent } from './dummy/dummy-form/dummy-form.component';
import { DummyAuthenticationComponent } from './dummy/dummy-authentication/dummy-authentication.component';
<<<<<<< HEAD
import { LoginComponent } from './modules/authentication/login/login.component';
=======
import { VerticalStepperComponent } from './modules/shared/components/vertical-stepper/vertical-stepper.component';
>>>>>>> 035b8e9f574da6ecd465b2707b4da828bcb0def0

const routes: Routes = [

  {path:'login',component:LoginComponent},

  

  // Dummy paths
  {path:'dummy-chat', component: DummyChatComponent },
  {path:'dummy-dashboard', component: DummyDashboardComponent },
  {path:'dummy-form', component: DummyFormComponent },
  {path:'dummy-auth', component: DummyAuthenticationComponent },
  {path:'dummy-stepper', component: VerticalStepperComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
