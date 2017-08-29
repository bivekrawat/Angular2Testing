import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginModule } from '../login/login.module';
import { HomeComponent } from '../home/home.component';

import { routing } from './app.routing';
import { LoginComponent } from '../login/login.component';
import { LoginService } from '../login/login.service';
import { Http, HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
