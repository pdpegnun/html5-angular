import { Injectable } from '@angular/core';
import { Http } from '@angular/http'

@Injectable()
export class InformacionService {
  
  info:any = {};
  infoCargada:boolean = false;
  sobrenosotros:boolean = false;
  equipo:any[] = [];

  constructor( public http:Http ) { 
    this.carga_info();
    this.carga_equipo_firebase();
  }

  carga_info() {
    this.http.get("assets/data/info.pagina.json")
          .subscribe( data =>{
            this.info = data.json();
            this.infoCargada = true;
          })
  }

  carga_equipo_firebase() {
    this.http.get("https://curso-html5-angular.firebaseio.com/equipo.json")
          .subscribe( data =>{
            this.equipo = data.json();
            this.sobrenosotros = true;
          })
  }
}
