import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DummyChatComponent } from './dummy/dummy-chat/dummy-chat.component';
import { DummyDashboardComponent } from './dummy/dummy-dashboard/dummy-dashboard.component';
import { DummyFormComponent } from './dummy/dummy-form/dummy-form.component';
import { DummyAuthenticationComponent } from './dummy/dummy-authentication/dummy-authentication.component';
import { SharedModule } from './modules/shared/shared.module';
import { InterviewModule } from './modules/interview/interview.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    DummyChatComponent,
    DummyDashboardComponent,
    DummyFormComponent,
    DummyAuthenticationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    InterviewModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
