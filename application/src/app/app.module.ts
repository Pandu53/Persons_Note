import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { StickyNoteComponent } from './sticky-note/sticky-note.component';
import { CardComponent } from './card/card.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { TimelineComponent } from './timeline/timeline.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    StickyNoteComponent,
    CardComponent,
    TopBarComponent,
    TimelineComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
