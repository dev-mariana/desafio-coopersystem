import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HomeComponent } from './home/home.component';
import { FilterComponent } from './components/filter/filter.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    HomeComponent,
    FilterComponent,
  ],
  imports: [
    BrowserModule,
    MatAutocompleteModule,
     MatButtonModule,
     MatFormFieldModule,
     MatInputModule,
     FormsModule,
     ReactiveFormsModule,
     MatIconModule 
  ],
  exports: [
    HomeComponent,
    FilterComponent,
  ],
  providers: []
})
export class ViewsModule { }
