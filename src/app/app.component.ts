import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kamery';
  log = [];

  eventH2A1ktoryEkran = ''; // to trzyma info ktory ekran wyswietlac

  constructor(){
    this.pobierzTimeStamp();
  }

pobierzTimeStamp(): void {
  this.log.push(new Date());
}

zmianaWyswietlaniaEkranu(event): void {
  this.eventH2A1ktoryEkran = event;
}
}
