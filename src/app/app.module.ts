/*
 *This file is licensed under the terms of the Apache License 2.0
 */

import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {CommandService} from './service/command.service';
import {CommandDocumentationService} from './service/command-documentation.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CommandService, CommandDocumentationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
