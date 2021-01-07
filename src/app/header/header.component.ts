import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core'; // to dodalem w czwartek zeby wyslac info o wybranym ekranie

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  czyWyswietlicKlawiszRaporty = true;
  czyWyswietlicKlawiszKonfiguracje = true;

  czyWyswietlicHistoria = false;
  czyWyswietlicDashboard = true;
  czyWyswietlicRaporty = false;
  czyWyswietlicPreferencje = false;
  czyWyswietlicKonfiguracja = false;
  czyWyswietlicLogowanie = false;
  czyWyswietlicPomoc = false;

  @Output()
  eventH2A1ktoryEkran: EventEmitter<string> = new EventEmitter<string>(); // to co bedziemy wyswietlac - nazwa kompomentu


  constructor() { }

  ngOnInit(): void {
  }

  onClickDashboard(): void {
    this.czyWyswietlicHistoria = false;
    this.czyWyswietlicDashboard = true;
    this.czyWyswietlicRaporty = false;
    this.czyWyswietlicPreferencje = false;
    this.czyWyswietlicKonfiguracja = false;
    this.czyWyswietlicLogowanie = false;
    this.czyWyswietlicPomoc = false;
    this.eventH2A1ktoryEkran.emit('Dashboard');
  }

  onClickRaporty(): void {
    this.czyWyswietlicRaporty = true;
    this.eventH2A1ktoryEkran.emit('Raporty');
  }

  onClickKonfiguracja(): void {
    this.czyWyswietlicKonfiguracja = true;
    this.eventH2A1ktoryEkran.emit('Konfiguracja');
  }
  onClickHistoria(): void {
    this.czyWyswietlicHistoria = true;
   // this.czyWyswietlicKlawiszKonfiguracje = true;
    this.eventH2A1ktoryEkran.emit('Historia');
  }

  onClickPreferencje(): void {
    this.czyWyswietlicPreferencje = true;
    // this.czyWyswietlicKlawiszKonfiguracje = false;
    this.eventH2A1ktoryEkran.emit('Preferencje');
  }

  onClickLogowanie(): void {
    this.czyWyswietlicLogowanie = true;
    this.eventH2A1ktoryEkran.emit('Logowanie');
  }

  onClickPomoc(): void {                       // testowe do usuniecia pozniej
    this.czyWyswietlicHistoria = false;
    this.czyWyswietlicDashboard = false;
    this.czyWyswietlicRaporty = false;
    this.czyWyswietlicPreferencje = false;
    this.czyWyswietlicKonfiguracja = false;
    this.czyWyswietlicLogowanie = false;
    this.czyWyswietlicPomoc = true;
    this.eventH2A1ktoryEkran.emit('Pomoc');
  }

  onClickTest(): void {                       // testowe do usuniecia pozniej
    this.czyWyswietlicLogowanie = true;
  }
}
