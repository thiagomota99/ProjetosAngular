import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngswitch',
  templateUrl: './ngswitch-case.component.html',
  styleUrls: ['./ngswitch-case.component.css']
})
export class NgswitchCaseComponent implements OnInit {

  public aba: string = 'Home';
  
  constructor() { }

  ngOnInit(): void {
  }

}
