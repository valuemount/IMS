import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroupshareRoutingModule } from './groupshare-routing.module';
import { GroupshareComponent } from './groupshare/groupshare.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    GroupshareComponent
  ],
  imports: [
    CommonModule,
    GroupshareRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
  
})
export class GroupshareModule { }
