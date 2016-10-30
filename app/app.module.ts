import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { TargetComponent }  from './app.component';
import {Slice}  from './app.component';


@NgModule({
  imports: [ BrowserModule ],
  declarations: [ TargetComponent, Slice ],
  bootstrap: [ TargetComponent, Slice ]
})
export class AppModule { }
