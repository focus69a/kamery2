import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kamery';
  log=[];

  @Input() eventH2A1ktoryEkran : string;

  constructor(){
    this.pobierzTimeStamp();
  }

pobierzTimeStamp() {
  this.log.push(new Date());
}
}
