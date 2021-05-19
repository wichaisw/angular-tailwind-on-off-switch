import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OnOffSwitchComponent } from './on-off-switch/on-off-switch.component';

@NgModule({
  declarations: [
    AppComponent,
    OnOffSwitchComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
