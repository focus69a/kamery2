import { Component, OnInit } from '@angular/core';
import {Tabela} from './tabela.model';    //dodalem model danych z klasy Tabela.model

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent implements OnInit {

  numerKamery: number[] = [1, 5, 3, 3, 5, 1, 2, 2, 10, 5];
  czasJakiUplynal: number[] = [1, 10, 12, 16, 90, 360, 420, 520, 800, 950];

  alertTyp: string[] = ["Brak osłony twarzy", "Podwyższona temperatura"];
  tabela10Komunikatow: number[] = [0,0, 1,1, 0,0, 1,1, 0,0];

  znacznikStyluKlawisza: number[] = [0,0,   1,1,   1,1,   1, 1,  0,1];  //0 - wyswietl  1 - juz ocenione

  znacznikWyswietlania: number[] = [0,1,   0,0,   0,0,   0, 0,  0,0];
  znacznik: string = "===>>";



  TabelaZdarzen: Tabela[] = [                  // a tutaj go uzylem, powstal nowy obiekt Tabela zapisany w tabeli zdarzen
    new Tabela('1', '10', this.alertTyp[0], '?')
  ];

  constructor() {
  }

  ngOnInit(): void {
}

}
