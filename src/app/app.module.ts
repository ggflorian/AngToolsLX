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

import { ToolListDtComponent } from './tool/tool-list-dt/tool-list-dt.component';
import { ToolListNineComponent } from './tool/tool-list-nine/tool-list-nine.component';

import { NgxDataTableModule } from "angular-9-datatable";

@NgModule({
  declarations: [
    AppComponent,
    ToolFormComponent,
    ToolListComponent,
    ToolComponent,
    ToolListDtComponent,
    ToolListNineComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule, 

    NgxDataTableModule
  ],
  providers: [ToolService],
  bootstrap: [AppComponent]
})
export class AppModule { }
