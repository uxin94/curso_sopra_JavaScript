import { Component, OnInit } from '@angular/core';
import { Meme } from '../meme';

@Component({
  selector: 'app-lista-memes',
  templateUrl: './lista-memes.component.html',
  styleUrls: ['./lista-memes.component.css']
})
export class ListaMemesComponent implements OnInit {

    public id:string
    public textoArriba: string
    public textoAbajo:string
    public imagenUrl: string
    public color: string
    public isFav: boolean


  constructor() { }

  ngOnInit() {
  }

}
