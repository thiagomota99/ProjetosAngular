import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgifComponent } from './ngif/ngif.component';
import { NgswitchCaseComponent } from './ngswitch-case/ngswitch-case.component';
import { NgforComponent } from './ngfor/ngfor.component';



@NgModule({
  declarations: [
    NgifComponent,
    NgswitchCaseComponent,
    NgforComponent
  ],
  exports: [
    NgifComponent,
    NgswitchCaseComponent,
    NgforComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class DiretivasModule { }
