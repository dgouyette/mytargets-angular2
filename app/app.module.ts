import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { TargetComponent }  from './app.component';
import {TableComponent} from "./table.component";
import {ScoreService} from "./service.component";


@NgModule({
  imports: [ BrowserModule ],
  declarations: [ TargetComponent, TableComponent],
  bootstrap: [ TargetComponent, TableComponent],
  providers: [ScoreService]

})
export class AppModule { }
