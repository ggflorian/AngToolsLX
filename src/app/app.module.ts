import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'

import { ToolService } from './shared/tool.service';

import { ToolComponent } from './tool/tool.component';
import { ToolFormComponent } from './tool/tool-form/tool-form.component';
import { ToolListComponent } from './tool/tool-list/tool-list.component';
import { ToolList2Component } from './tool/tool-list2/tool-list2.component';

import { DataTableModule } from 'angular5-data-table';
import { ToolList3Component } from './tool/tool-list3/tool-list3.component'

@NgModule({
  declarations: [
    AppComponent,
    ToolFormComponent,
    ToolListComponent,
    ToolComponent,
    ToolList2Component,
    ToolList3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,

    DataTableModule
  ],
  providers: [ToolService],
  bootstrap: [AppComponent]
})
export class AppModule { }
