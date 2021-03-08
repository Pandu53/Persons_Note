import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { StickyNoteComponent } from './sticky-note/sticky-note.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    StickyNoteComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
