import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent implements OnInit {

  public cursos: string[] = ['Angular','Java','MySQL'];
  
  constructor() { }

  ngOnInit(): void {
  }

}
