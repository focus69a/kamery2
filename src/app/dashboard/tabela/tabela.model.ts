export class Tabela {
  public kameraID: string;
  public znacznikCzasu: string;
  public zdarzenieID: string;
  public ocena: string;

  constructor(kamera: string, czas: string, event: string, potwierdzenie: string){

    this.kameraID=kamera;
    this.znacznikCzasu=czas;
    this.zdarzenieID=event;
    this.ocena=potwierdzenie;
  }
}
