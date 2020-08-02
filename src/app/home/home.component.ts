import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // @Input() myName: string;
  // @Output() valueFromChild = new EventEmitter();

  // childValue: string = "I am value from Child Ramprakash";

  todayDate = new Date();
  exponentNumber = 10;

  constructor() { }

  ngOnInit() {
  }

  // sendData(){
  //   this.valueFromChild.emit(this.childValue);
  // }

}
