import { Injectable } from '@angular/core';
import { Meme } from './meme';

@Injectable({
  providedIn: 'root'
})
export class ServicioMemeService {

  memes: Array<Meme>=[new Meme('0', 'Texto1', 'Texto 2', 'https://i.imgflip.com/1otk96.jpg')]

  constructor() { }

  getMeme(): Array<Meme>{
    //return this.listaDeMemes.filter(m=>m.id==id);
    return this.listaDeMemes;
  } 

  addMeme(meme: Meme): void{
    this.listaDeMemes.push(meme);
    console.log(this.listaDeMemes)
  }

  deleteMeme(idMeme:string):void{
    const pos = this.memes.findIndex(meme=>{meme.id===idMeme})
    this.memes.splice(pos,1)
  }
}
