import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CursosModule } from './cursos/cursos.module';
import { DataBindingModule } from './data-binding/data-binding.module';
import { InputAndOutputPropertiesModule } from './input-and-output-properties/input-and-output-properties.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CursosModule,
    DataBindingModule,
    InputAndOutputPropertiesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
