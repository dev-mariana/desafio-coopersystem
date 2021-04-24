import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
  ],
  exports: [
      HeaderComponent
  ],
  providers: []
})
export class SharedModule { }
