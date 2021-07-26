import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputPropertyComponent } from './input-property/input-property.component';
import { OutputPropertyComponent } from './output-property/output-property.component';



@NgModule({
  declarations: [
    InputPropertyComponent,
    OutputPropertyComponent
  ],
  exports: [
    InputPropertyComponent,
    OutputPropertyComponent
  ],
  imports: [
    CommonModule
  ]
})
export class InputAndOutputPropertiesModule { }
