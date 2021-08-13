import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgifComponent } from './ngif/ngif.component';
import { NgswitchCaseComponent } from './ngswitch-case/ngswitch-case.component';
import { NgforComponent } from './ngfor/ngfor.component';
import { NgClassComponent } from './ng-class/ng-class.component';
import { NgStyleComponent } from './ng-style/ng-style.component';
import { OperadorElvisComponent } from './operador-elvis/operador-elvis.component';
import { NgContentComponent } from './ng-content/ng-content.component';
import { FundoAmareloDirective } from './diretivas-personalizadas/fundo-amarelo.directive';
import { HighlightMouseDirective } from './diretivas-personalizadas/highlight-mouse.directive';
import { HighlightDirective } from './diretivas-personalizadas/highlight.directive';
import { NgElseDirective } from './diretivas-personalizadas/ng-else.directive';



@NgModule({
  declarations: [
    NgifComponent,
    NgswitchCaseComponent,
    NgforComponent,
    NgClassComponent,
    NgStyleComponent,
    OperadorElvisComponent,
    NgContentComponent,
    FundoAmareloDirective,
    HighlightMouseDirective,
    HighlightDirective,
    NgElseDirective
  ],
  exports: [
    NgifComponent,
    NgswitchCaseComponent,
    NgforComponent,
    NgClassComponent,
    NgStyleComponent,
    OperadorElvisComponent,
    NgContentComponent,
    FundoAmareloDirective,
    HighlightMouseDirective,
    HighlightDirective,
  ],
  imports: [
    CommonModule
  ]
})
export class DiretivasModule { }
