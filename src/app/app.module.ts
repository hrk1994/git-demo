import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GitComponent } from './git/git.component';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    GitComponent
  ],
  imports: [
    BrowserModule,FormsModule,RouterModule,RouterLink
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
