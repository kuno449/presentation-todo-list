import { BrowserModule } from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import {NgbDatepickerModule} from '@ng-bootstrap/ng-bootstrap';

import de from '@angular/common/locales/de';
import { registerLocaleData } from '@angular/common';
registerLocaleData(de, 'de');

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgbDatepickerModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'de'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
