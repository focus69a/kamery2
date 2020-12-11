import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }
  onClickRaporty(): void {
    this.czyWyswietlicRaporty = true;
  }

  onClickKonfiguracja(): void {
    this.czyWyswietlicKonfiguracja = true;
  }
  onClickHistoria(): void {
    this.czyWyswietlicHistoria = true;
   // this.czyWyswietlicKlawiszKonfiguracje = true;
  }

  onClickPreferencje(): void {
    this.czyWyswietlicPreferencje = true;
    //this.czyWyswietlicKlawiszKonfiguracje = false;
  }

  onClickLogowanie(): void {
    this.czyWyswietlicLogowanie = true;
  }


}
