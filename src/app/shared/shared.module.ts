import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  exports: [
      HeaderComponent
  ],
  providers: []
})
export class SharedModule { }
