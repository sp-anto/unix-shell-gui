import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {CommandService} from './service/command.service';
import {CommandDocumentationService} from './service/command-documentation.service';
import { CommandDetailComponent } from './command-detail/command-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    CommandDetailComponent,
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
