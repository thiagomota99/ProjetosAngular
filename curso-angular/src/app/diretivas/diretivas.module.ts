import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgifComponent } from './ngif/ngif.component';
import { NgswitchCaseComponent } from './ngswitch-case/ngswitch-case.component';



@NgModule({
  declarations: [
    NgifComponent,
    NgswitchCaseComponent
  ],
  exports: [
    NgifComponent,
    NgswitchCaseComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DiretivasModule { }
