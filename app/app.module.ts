import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { TargetComponent }  from './app.component';
import {TableComponent, ScoreService} from "./table.component";


@NgModule({
  imports: [ BrowserModule ],
  declarations: [ TargetComponent, TableComponent],
  bootstrap: [ TargetComponent, TableComponent]
})
export class AppModule { }
