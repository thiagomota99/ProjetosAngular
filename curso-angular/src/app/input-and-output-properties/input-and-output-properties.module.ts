import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputPropertyComponent } from './input-property/input-property.component';
import { OutputPropertyComponent } from './output-property/output-property.component';
import { ViewchildComponent } from './viewchild/viewchild.component';



@NgModule({
  declarations: [
    InputPropertyComponent,
    OutputPropertyComponent,
    ViewchildComponent
  ],
  exports: [
    InputPropertyComponent,
    OutputPropertyComponent,
    ViewchildComponent
  ],
  imports: [
    CommonModule
  ]
})
export class InputAndOutputPropertiesModule { }
