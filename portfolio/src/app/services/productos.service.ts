import { Injectable } from '@angular/core';
import { Http } from '@angular/http'

@Injectable()
export class ProductosService {
  productos:any[] = [];
  cargandoProductos:boolean = false;

  constructor( private http:Http ) { 
    this.cargarProductos();
  }

  public cargarProductos(){
    
    if(this.productos.length == 0){
      this.cargandoProductos = true;
      this.http.get("https://curso-html5-angular.firebaseio.com/productos_idx.json")
            .subscribe( data =>{
              this.productos = data.json();
              console.log(this.productos);
              this.cargandoProductos = false;
            })
    }
  }
}
