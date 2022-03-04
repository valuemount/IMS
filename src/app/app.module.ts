import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule,} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DummyChatComponent } from './dummy/dummy-chat/dummy-chat.component';
import { DummyDashboardComponent } from './dummy/dummy-dashboard/dummy-dashboard.component';
import { DummyFormComponent } from './dummy/dummy-form/dummy-form.component';
import { DummyAuthenticationComponent } from './dummy/dummy-authentication/dummy-authentication.component';
import { SharedModule } from './modules/shared/shared.module';
import { AuthenticationModule } from './modules/authentication/authentication.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    DummyChatComponent,
    DummyDashboardComponent,
    DummyFormComponent,
    DummyAuthenticationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    AuthenticationModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
