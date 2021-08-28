import { Pipe, PipeTransform } from '@angular/core';
import { FiltroArrayPipe } from './filtro-array.pipe';


/* 
  Única coisa que muda para o pipe impuro em questão de implementação é o valor da propriedade "pure" do decorator @Pipe.
  a mesma vai receber o valor false. Por padrão seu valor é true.
*/
@Pipe({
  name: 'filtroArrayImpuro',
  pure: false,
})
export class FiltroArrayImpuroPipe extends FiltroArrayPipe {

}
