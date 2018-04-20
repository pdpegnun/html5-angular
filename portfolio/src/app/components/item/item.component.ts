import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { InformacionService } from '../../services/informacion.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styles: []
})
export class ItemComponent implements OnInit {
  options:any = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  date:string = new Date().toLocaleDateString('es-ES', this.options);

  producto:any=undefined;
  cod:string=undefined;
  id:string=undefined;
  constructor( private _route:ActivatedRoute,
              private _ps:ProductosService,
              private _is:InformacionService) { 
    
    _route.params.subscribe(parametros =>{
      _ps.cargarProducto(parametros['id'])
            .subscribe( data =>{
              this.cod = parametros['id'];
              this.id = this.cod.replace(/[^0-9]/g, '');
              this.producto = data.json();
            });
    })
  }

  ngOnInit() {
  }

}
