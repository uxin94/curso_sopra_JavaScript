import { Component, OnInit, Input } from '@angular/core';
import { Meme } from '../meme';

@Component({
  selector: 'app-memes',
  templateUrl: './memes.component.html',
  styleUrls: ['./memes.component.css']
})
export class MemesComponent implements OnInit {

  @Input() meme: Meme = new Meme();
  @Input() creando:boolean=false;

  constructor(){}
  
  ngOnInit() {
  }

  eliminar(){
    this.service.deleteMeme(this.meme.id)
  }

  toggleFav(){
    this.service.favMeme(this.meme.id)
  }

}
