import { Component, OnInit } from '@angular/core';
import {Tabela} from './tabela.model';    //dodalem model danych z klasy Tabela.model

import { Input, Output, EventEmitter } from '@angular/core';


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

  znacznikWyswietlania: number[] = [1,0,   0,0,   0,0,   0, 0,  0,0];
  znacznik: string = "===>>";

  //to bedziemy wyswietlac w podgladzie
  zdarzenieZtabeli: Tabela[] = [                  // a tutaj go uzylem, powstal nowy obiekt Tabela zapisany w tabeli zdarzen
    new Tabela('1', '10', this.alertTyp[0], 'link_do_zdjecia')
  ];


  @Output()
  eventT2D1linkDoZdjecia: EventEmitter<string> = new EventEmitter<string>(); //to co bedziemy wysylac do dashboardu link do zdjecia


  @Input()
  eventD2T1PotwierdzenieDiagnozy: string;  //zaciagamy link do zdjecia z dashboardu a on z tabeli

  constructor() {
  }

  ngOnInit(): void {
}



onClickTest0(): void {                       //testowe do usuniecia pozniej
  this.znacznikWyswietlania = [1,0,   0,0,   0,0,   0, 0,  0,0];
  this.znacznikStyluKlawisza[0]=1;
  this.eventT2D1linkDoZdjecia.emit("../../../assets/k5.jpg");
 // this.zdarzenieZtabeli = {this.numerKamery[0], this.
}


onClickTest1(): void {                       //testowe do usuniecia pozniej
  this.znacznikWyswietlania = [0,1,   0,0,   0,0,   0, 0,  0,0];
  this.eventT2D1linkDoZdjecia.emit("../../../assets/k2.jpg");
  this.znacznikStyluKlawisza[1]=1;
  // this.zdarzenieZtabeli = {this.numerKamery[0], this.
}

onClickTest2(): void {                       //testowe do usuniecia pozniej
  this.znacznikWyswietlania = [0,0,   1,0,   0,0,   0, 0,  0,0];
  this.eventT2D1linkDoZdjecia.emit("../../../assets/k6.jpg");
  this.znacznikStyluKlawisza[2]=1;
 // this.zdarzenieZtabeli = {this.numerKamery[0], this.
}

onClickTest3(): void {                       //testowe do usuniecia pozniej
  this.znacznikWyswietlania = [0,0,   0,1,   0,0,   0, 0,  0,0];
  this.eventT2D1linkDoZdjecia.emit("../../../assets/k7.jpg");
  this.znacznikStyluKlawisza[3]=1;
 // this.zdarzenieZtabeli = {this.numerKamery[0], this.
}

onClickTest4(): void {                       //testowe do usuniecia pozniej
  this.znacznikWyswietlania = [0,0,   0,0,  1,0,   0, 0,  0,0];
  this.eventT2D1linkDoZdjecia.emit("../../../assets/k2.jpg");
  this.znacznikStyluKlawisza[4]=1;
 // this.zdarzenieZtabeli = {this.numerKamery[0], this.
}

onClickTest5(): void {                       //testowe do usuniecia pozniej
  this.znacznikWyswietlania = [0,0,   0,0,   0,1,   0, 0,  0,0];
  this.eventT2D1linkDoZdjecia.emit("../../../assets/k5.jpg");
  this.znacznikStyluKlawisza[5]=1;
 // this.zdarzenieZtabeli = {this.numerKamery[0], this.
}

onClickTest6(): void {                       //testowe do usuniecia pozniej
  this.znacznikWyswietlania = [0,0,   0,0,   0,0,   1, 0,  0,0];
  this.eventT2D1linkDoZdjecia.emit("../../../assets/kam1.jpg");
  this.znacznikStyluKlawisza[6]=1;
 // this.zdarzenieZtabeli = {this.numerKamery[0], this.
}

onClickTest7(): void {                       //testowe do usuniecia pozniej
  this.znacznikWyswietlania = [0,0,   0,0,   0,0,   0, 1,  0,0];
  this.eventT2D1linkDoZdjecia.emit("../../../assets/kam2.jpg");
  this.znacznikStyluKlawisza[7]=1;
 // this.zdarzenieZtabeli = {this.numerKamery[0], this.
}

onClickTest8(): void {                       //testowe do usuniecia pozniej
  this.znacznikWyswietlania = [0,0,   0,0,   0,0,   0, 0,  1,0];
  this.eventT2D1linkDoZdjecia.emit("../../../assets/kam3.jpg");
  this.znacznikStyluKlawisza[8]=1;
 // this.zdarzenieZtabeli = {this.numerKamery[0], this.
}

onClickTest9(): void {                       //testowe do usuniecia pozniej
  this.znacznikWyswietlania = [0,0,   0,0,   0,0,   0, 0,  0,1];
  this.eventT2D1linkDoZdjecia.emit("../../../assets/kam4.jpg");
  this.znacznikStyluKlawisza[9]=1;
 // this.zdarzenieZtabeli = {this.numerKamery[0], this.
}

}
