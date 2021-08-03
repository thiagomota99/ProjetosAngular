import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.css']
})
export class NgClassComponent implements OnInit {

  public preencherLua: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  public onClick(): void {
    this.preencherLua = !this.preencherLua;
  }

}
