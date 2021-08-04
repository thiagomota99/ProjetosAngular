import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgifComponent } from './ngif/ngif.component';
import { NgswitchCaseComponent } from './ngswitch-case/ngswitch-case.component';
import { NgforComponent } from './ngfor/ngfor.component';
import { NgClassComponent } from './ng-class/ng-class.component';
import { NgStyleComponent } from './ng-style/ng-style.component';



@NgModule({
  declarations: [
    NgifComponent,
    NgswitchCaseComponent,
    NgforComponent,
    NgClassComponent,
    NgStyleComponent
  ],
  exports: [
    NgifComponent,
    NgswitchCaseComponent,
    NgforComponent,
    NgClassComponent,
    NgStyleComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class DiretivasModule { }
