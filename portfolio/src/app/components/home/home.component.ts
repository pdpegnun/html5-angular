import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  normalItem:any[] = [1,2,3,6,9,10,13];
  groupItem:any[] = [4,7,11,14];
  specials:any = {4:'rk-size-6 rk-tosize-8',
                7:'rk-size-4 rk-tosize-8',
                11:'rk-size-6 rk-tosize-6',
                14:'rk-size-4 rk-tosize-6'};
  items:any[] = [ 'rk-size-12 rk-tosize-6 rk-landscape',
                  'rk-size-6  rk-portrait',
                  'rk-size-6 rk-tosize-4 rk-portrait rk-tosquare',
                  'rk-size-12 rk-tosize-6 rk-landscape',
                  'rk-size-12 rk-tosize-6 rk-landscape',
                  'rk-size-6 rk-tosize-4 rk-portrait rk-tosquare',
                  'rk-size-12 rk-tosize-6 rk-square',
                  'rk-size-12 rk-tosize-6 rk-square',
                  'rk-size-8 rk-tosize-3 rk-square',
                  'rk-size-6 rk-tosize-3 rk-portrait rk-tosquare',
                  'rk-size-12 rk-tosize-6 rk-landscape',
                  'rk-size-12 rk-tosize-6 rk-landscape',
                  'rk-size-8 rk-tosize-3 rk-square',
                  'rk-size-12 rk-tosize-6 rk-square',
                  'rk-size-12 rk-tosize-6 rk-square'
                ];
  constructor( private _ps:ProductosService ) { }

  ngOnInit() {
  }

}
