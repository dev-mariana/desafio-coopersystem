import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HeaderComponent } from './components/header/header.component';
import { MatMenuModule } from '@angular/material/menu';
import { MaterialModule } from '../material-module';

@NgModule({
  declarations: [
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    MatMenuModule
  ],
  exports: [
      HeaderComponent
  ],
  providers: []
})
export class SharedModule { }
