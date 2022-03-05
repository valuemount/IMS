import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DummyDashboardComponent } from './dummy/dummy-dashboard/dummy-dashboard.component';
import { DummyChatComponent } from './dummy/dummy-chat/dummy-chat.component';
import { DummyFormComponent } from './dummy/dummy-form/dummy-form.component';
import { DummyAuthenticationComponent } from './dummy/dummy-authentication/dummy-authentication.component';
import { VerticalStepperComponent } from './modules/shared/components/vertical-stepper/vertical-stepper.component';

const routes: Routes = [

  

  // Dummy paths
  {path:'dummy-chat', component: DummyChatComponent },
  {path:'dummy-dashboard', component: DummyDashboardComponent },
  {path:'dummy-form', component: DummyFormComponent },
  {path:'dummy-auth', component: DummyAuthenticationComponent },
  {
    path: 'groupshare',
    loadChildren: () => import('./modules/groupshare/groupshare.module').then(m => m.GroupshareModule)
  },
  {path:'dummy-stepper', component: VerticalStepperComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
