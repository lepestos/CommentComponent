import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CommentTree } from './comments/comment-tree.component'
@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, CommentTree ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
