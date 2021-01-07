import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';

import { AppComponent } from './app.component';
import { KonfiguracjaComponent } from './konfiguracja/konfiguracja.component';
import { RaportyComponent } from './raporty/raporty.component';
import { LogowanieComponent } from './logowanie/logowanie.component';
import { TabelaComponent } from './dashboard/tabela/tabela.component';
import { PodgladComponent } from './dashboard/podglad/podglad.component';
import { PreferencjeComponent } from './dashboard/preferencje/preferencje.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { OpisComponent } from './opis/opis.component';

@NgModule({
  declarations: [
    AppComponent,
    KonfiguracjaComponent,
    RaportyComponent,
    LogowanieComponent,
    TabelaComponent,
    PodgladComponent,
    PreferencjeComponent,
    DashboardComponent,
    HeaderComponent,
    OpisComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
