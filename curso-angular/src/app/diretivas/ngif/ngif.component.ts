import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngif',
  templateUrl: './ngif.component.html',
  styleUrls: ['./ngif.component.css']
})
export class NgifComponent implements OnInit {
  
  public isConstruirComponente = true;
  constructor() { }

  ngOnInit(): void {
  }

  public buildOrDestroy(): void {
    this.isConstruirComponente = !this.isConstruirComponente;
  }

}
