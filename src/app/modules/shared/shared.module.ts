import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MadeByComponent } from './components/made-by/made-by.component';

@NgModule({
  declarations: [
    MadeByComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    MadeByComponent
  ]
})
export class SharedModule { }
