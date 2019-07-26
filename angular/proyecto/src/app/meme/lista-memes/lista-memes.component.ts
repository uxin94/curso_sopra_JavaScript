import { Component, OnInit } from '@angular/core';
import { Meme } from '../meme';

@Component({
  selector: 'app-lista-memes',
  templateUrl: './lista-memes.component.html',
  styleUrls: ['./lista-memes.component.css']
})
export class ListaMemesComponent implements OnInit {

  OnInit{
    memes: Array<Meme>=[new Meme('0', 'Texto1', 'Texto 2', 'https://i.imgflip.com/1otk96.jpg']
  }

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
