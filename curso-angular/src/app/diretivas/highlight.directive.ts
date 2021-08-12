import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[Highlight]'
})
export class HighlightDirective {

  @Input() highColorText: string = 'red';
  @Input() defaultColorText: string = 'black'
  @Input() highLightColor: string = 'black';
  @Input() defaultColor: string = 'silver';

  private _backgroundColor: string;
  @HostBinding('style.backgroundColor') get backgroundColor() {
    return this._backgroundColor;
  }

  private _color: string;
  @HostBinding('style.color') get color() {
    return this._color;
  }

  constructor() { }

  ngOnInit(): void {
    this._color = this.defaultColorText;
    this._backgroundColor = this.defaultColor;
  }

  @HostListener('mouseenter') onMouseEnter(): void {
    this._backgroundColor = this.highLightColor;
    this._color = this.highColorText;
  }

  @HostListener('mouseleave') onMouseLeave(): void {
    this._backgroundColor = this.defaultColor;
    this._color = this.defaultColorText;
  }
}
