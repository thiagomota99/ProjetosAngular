import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgifComponent } from './ngif/ngif.component';
import { NgswitchCaseComponent } from './ngswitch-case/ngswitch-case.component';
import { NgforComponent } from './ngfor/ngfor.component';
import { NgClassComponent } from './ng-class/ng-class.component';
import { NgStyleComponent } from './ng-style/ng-style.component';
import { OperadorElvisComponent } from './operador-elvis/operador-elvis.component';
import { NgContentComponent } from './ng-content/ng-content.component';
import { FundoAmareloDirective } from './fundo-amarelo.directive';
import { HighlightMouseDirective } from './highlight-mouse.directive';
import { HighlightDirective } from './highlight.directive';



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
    HighlightDirective
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
