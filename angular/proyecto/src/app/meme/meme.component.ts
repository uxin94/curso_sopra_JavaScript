import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meme',
  templateUrl: './meme.component.html',
  styleUrls: ['./meme.component.css']
})
export class MemeComponent implements OnInit {

  textoArriba= '';
  textoAbajo= '';
  color= '';

  constructor() { }

  ngOnInit() {
  }

  cambiarTextoArriba(event){
    this.textoArriba=event;
  }

  cambiarTextoAbajo(event){
    this.textoAbajo=event;
  }

  cambiarColor(event){
    this.color=event;
  }
}
