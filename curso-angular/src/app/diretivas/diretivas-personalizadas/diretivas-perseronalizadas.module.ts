import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FundoAmareloDirective } from './fundo-amarelo.directive';
import { HighlightMouseDirective } from './highlight-mouse.directive';
import { HighlightDirective } from './highlight.directive';
import { NgElseDirective } from './ng-else.directive';

@NgModule({
    declarations: [
        FundoAmareloDirective,
        HighlightMouseDirective,
        HighlightDirective,
        NgElseDirective,
    ],
    imports: [ CommonModule ],
    exports: [    
        FundoAmareloDirective,
        HighlightMouseDirective,
        HighlightDirective,
        NgElseDirective
    ],
    providers: [],
})
export class DiretivasPersonalizadasModule {}