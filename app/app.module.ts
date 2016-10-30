import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { TargetComponent }  from './app.component';


@NgModule({
  imports: [ BrowserModule ],
  declarations: [ TargetComponent ],
  bootstrap: [ TargetComponent]
})
export class AppModule { }
