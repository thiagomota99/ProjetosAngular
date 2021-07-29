import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgifComponent } from './ngif/ngif.component';



@NgModule({
  declarations: [
    NgifComponent
  ],
  exports: [
    NgifComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DiretivasModule { }
