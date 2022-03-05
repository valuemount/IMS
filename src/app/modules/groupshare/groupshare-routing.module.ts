import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroupshareComponent } from './groupshare/groupshare.component';

const routes: Routes = [{path:'',component:GroupshareComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GroupshareRoutingModule { }
