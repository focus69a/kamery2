import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';   // to potrzebne zeby zaciagac dane z innego komponentu

@Component({
  selector: 'app-podglad',
  templateUrl: './podglad.component.html',
  styleUrls: ['./podglad.component.css']
})
export class PodgladComponent implements OnInit {
  @Input() zdarzenieZtabeli: {kamera: string, rodzajZdarzenia: string , czasOd: string, linkDoZdjecia: string };  //zaciagamy dane z innego komponentu

  constructor() { }

  ngOnInit(): void {
  }

}
