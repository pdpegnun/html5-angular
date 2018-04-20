import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styles: []
})
export class ItemComponent implements OnInit {

  constructor( private _route:ActivatedRoute) { 
    _route.params.subscribe(parametros =>{
      console.log(parametros['id']);
      console.log(parametros);
    })
  }

  ngOnInit() {
  }

}
