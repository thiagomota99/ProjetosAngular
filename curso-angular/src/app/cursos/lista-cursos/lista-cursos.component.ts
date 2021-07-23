/*
  Componentes possuem imports como qualquer outra classe em ECMASCRIPT.
  Para que o Angular possa identificar onde estão os arquivos utilizados
  na classe.
*/
import { Component, OnInit } from '@angular/core';
import { CursosService } from '../cursos.service';

/*
  O decorator @Componente possui algumas propriedades.
  Dentre elas as mais importantes são:
    - selector: Tem como objetivo definir a tag do componente. 
                Para caso for usado em outro componente da aplicação
                O mesmo será referenciado pela sua tag <app-lista-cursos></app-lista-cursos>
    
    - templateUrl: Tem como objetivo referenciar o arquivo de template do componente. Onde ficará a parte
                   estrutural(html) do componente.
    
    - styleUrls: Tem como objetivo referenciar o arquivo de estilo do componente. Onde ficará a parte de CSS
                 do componente.
*/
@Component({
  selector: 'app-lista-cursos',
  templateUrl: './lista-cursos.component.html',
  styleUrls: ['./lista-cursos.component.css']
})

export class ListaCursosComponent implements OnInit { //Todo componente deve implementar a interface OnInit (explicarei sua necessidade posteriormente)

  public cursos: string[];  
  // Injetando o serviço CursosService no componente. Desta forma não precisamos instanciar a classe CursosService manualmente, o angular
  //ira fazer isso automaticamente.
  constructor(private readonly cursosService: CursosService) { } 

  //Todo componente deve possuir o método ngOnInit (explicarei sua necessidade posteriormente)
  ngOnInit(): void {
    this.cursos = this.cursosService.getCursos();
  }

}
