import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgifComponent } from './ngif/ngif.component';
import { NgswitchCaseComponent } from './ngswitch-case/ngswitch-case.component';
import { NgforComponent } from './ngfor/ngfor.component';
import { NgClassComponent } from './ng-class/ng-class.component';
import { NgStyleComponent } from './ng-style/ng-style.component';
import { OperadorElvisComponent } from './operador-elvis/operador-elvis.component';
import { NgContentComponent } from './ng-content/ng-content.component';
import { DiretivasPersonalizadasModule } from './diretivas-personalizadas/diretivas-perseronalizadas.module';



@NgModule({
  declarations: [
    NgifComponent,
    NgswitchCaseComponent,
    NgforComponent,
    NgClassComponent,
    NgStyleComponent,
    OperadorElvisComponent,
    NgContentComponent,

  ],
  exports: [
    NgifComponent,
    NgswitchCaseComponent,
    NgforComponent,
    NgClassComponent,
    NgStyleComponent,
    OperadorElvisComponent,
    NgContentComponent
  ],
  imports: [
    CommonModule,
    DiretivasPersonalizadasModule
  ]
})
export class DiretivasModule { }
