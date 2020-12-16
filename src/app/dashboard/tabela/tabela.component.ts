import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent implements OnInit {

  znacznikWyswietlania: number[] = [0,1,   0,0,   0,0,   0, 0,  0,0];
  znacznik: string = "===>>";

  alertTyp: string[] = ["Brak osłony twarzy", "Podwyższona temperatura"];
  tabela10Komunikatow: number[] = [0,0, 1,1, 0,0, 1,1, 0,0];

  czasJakiUplynal: number[] = [1, 10, 12, 16, 90, 360, 420, 520, 800, 950];
  numerKamery: number[] = [1, 5, 3, 3, 5, 1, 2, 2, 10, 5];

  constructor() {
  }

  ngOnInit(): void {
}

}
