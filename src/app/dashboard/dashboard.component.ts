import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';   // to potrzebne zeby zaciagac dane z innego komponentu
import { EventEmitter } from '@angular/core';   // to potrzebne zeby ten parent mogl dostac dane z innego komponentu

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  // eventD2P1linkDoZdjecia: string = "../../../assets/k5.jpg";
  eventD2P1linkDoZdjecia = '';

  // @Input() eventT2D1: {linkDoZdjecia: string };  //zaciagamy dane z innego komponentu

  eventPotwierdzony = '';
  czyWyswietlicTabele = true;
  czyWyswietlicPodlad = true;
  constructor() { }

  ngOnInit(): void {
  }

  zmianaStatusuEventu(event): void {
    if (event === 'Potwierdzam') {
      this.eventPotwierdzony = 'Tak';
    }
    else {
      this.eventPotwierdzony = 'Nie';
    }

  }

  przeslanieLinkuDoPodgladu(event): void {
    this.eventD2P1linkDoZdjecia = event;
  }
}
