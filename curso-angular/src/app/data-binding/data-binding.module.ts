import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertyBindingComponent } from './property-binding/property-binding.component';



@NgModule({
  declarations: [
    PropertyBindingComponent
  ],
  exports: [
    PropertyBindingComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DataBindingModule { }
