import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// WICHTIG: FormsModule manuell importieren. Sonst klappt 2-way-data-binding in input-Feld nicht
import {FormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LogFormComponent } from './components/log-form/log-form.component';
import { LogsComponent } from './components/logs/logs.component';
import { LogService } from './services/log.service';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LogFormComponent,
    LogsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [LogService], /*ng g s services/log --module=app.module*/
  bootstrap: [AppComponent]
})
export class AppModule { }
