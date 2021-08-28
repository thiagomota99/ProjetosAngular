import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExemplosPipesComponent } from './exemplos-pipes/exemplos-pipes.component';
import { CamelCasePipe } from './camel-case.pipe';
import { FiltroArrayPipe } from './filtro-array.pipe';
import { FormsModule } from '@angular/forms';
import { FiltroArrayImpuroPipe } from './filtro-array-impuro.pipe';



@NgModule({
  declarations: [
    ExemplosPipesComponent,
    CamelCasePipe,
    FiltroArrayPipe,
    FiltroArrayImpuroPipe
  ],
  exports: [
    ExemplosPipesComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class PipesModule { }
