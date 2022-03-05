import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroupshareRoutingModule } from './groupshare-routing.module';
import { GroupshareComponent } from './groupshare/groupshare.component';


@NgModule({
  declarations: [
    GroupshareComponent
  ],
  imports: [
    CommonModule,
    GroupshareRoutingModule
  ]
  
})
export class GroupshareModule { }
