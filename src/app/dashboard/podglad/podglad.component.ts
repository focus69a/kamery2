import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';   // to potrzebne zeby zaciagac dane z innego komponentu
import { Output, EventEmitter } from '@angular/core';   // to potrzebne zeby wyslac potwierdzenie do dashboardu

@Component({
  selector: 'app-podglad',
  templateUrl: './podglad.component.html',
  styleUrls: ['./podglad.component.css']
})
export class PodgladComponent implements OnInit {

  @Input()
  eventD2P1linkDoZdjecia: string;  // zaciagamy link do zdjecia z dashboardu a on z tabeli

  @Output()
  eventP2D1potwierdzenieDiagnozy: EventEmitter<string> = new EventEmitter<string>();
  // to co bedziemy wysylac do dashboardu Potwierdzam / Zaprzeczam

  constructor() { }

  ngOnInit(): void {
  }

  ochroniarzPotwierdzil() {
    this.eventP2D1potwierdzenieDiagnozy.emit("Potwierdzam");

  }

  ochroniarzZaprzeczyl(){
    this.eventP2D1potwierdzenieDiagnozy.emit("Zaprzeczam");

  }

}
