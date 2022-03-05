import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MadeByComponent } from './components/made-by/made-by.component';
import { VerticalStepperComponent } from './components/vertical-stepper/vertical-stepper.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatStepperModule} from '@angular/material/stepper';
import { MatButtonModule} from '@angular/material/button';
@NgModule({
  declarations: [
    MadeByComponent,
    VerticalStepperComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatButtonModule
  ],
  exports:[
    MadeByComponent
  ]
})
export class SharedModule { }
