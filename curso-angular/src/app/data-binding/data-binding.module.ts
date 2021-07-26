import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';



@NgModule({
  declarations: [
    PropertyBindingComponent,
    EventBindingComponent
  ],
  exports: [
    PropertyBindingComponent,
    EventBindingComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DataBindingModule { }
