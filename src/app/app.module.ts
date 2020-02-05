import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FoolFormComponent } from './tools/fool-form/fool-form.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { ToolService } from './shared/tool.service';

@NgModule({
  declarations: [
    AppComponent,
    FoolFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ToolService],
  bootstrap: [AppComponent]
})
export class AppModule { }
