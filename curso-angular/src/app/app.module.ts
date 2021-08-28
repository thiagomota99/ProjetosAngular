import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CursosModule } from './cursos/cursos.module';
import { DataBindingModule } from './data-binding/data-binding.module';
import { DiretivasModule } from './diretivas/diretivas.module';
import { InputAndOutputPropertiesModule } from './input-and-output-properties/input-and-output-properties.module';
import { PipesModule } from './pipes/pipes.module';
import { ServicosModule } from './servicos/servicos.module';
import { LogService } from './shared/log.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CursosModule,
    DataBindingModule,
    InputAndOutputPropertiesModule,
    DiretivasModule,
    ServicosModule,
    PipesModule,
  ],
  providers: [
    LogService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
