import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';

import { ResumeService } from "./services/resume.service";

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [
    ResumeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
