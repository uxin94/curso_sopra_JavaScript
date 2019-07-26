import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Meme } from '../meme';
import {ServicioMemeService} from '../servicio-meme.service'

@Component({
  selector: 'app-memeform',
  templateUrl: './memeform.component.html',
  styleUrls: ['./memeform.component.css']
})
export class MemeformComponent implements OnInit {

  @Input() textoArriba='';
  @Input() textoAbajo='';
  @Input() color='';

  public id:string='';
  @Output() public textoArribaC= new EventEmitter<string>()
  @Output() public textoAbajoC= new EventEmitter<string>()
  public imagenUrl: string='';
  @Output() public colorC= new EventEmitter<string>()
  public isFav: boolean=false;

  constructor(public servicio:ServicioMemeService) { }

  ngOnInit() {
  }

  mostrarTextoArriba(event){
    this.textoArribaC.emit(event.target.value);
  }

  mostrarTextoAbajo(event){
    this.textoAbajoC.emit(event.target.value);
  }

  cambiarColorTexto(event){
    this.colorC.emit(event.target.value);
  }

  crearMeme():void{
    let meme=new Meme("1",this.textoArriba,this.textoAbajo,this.imagenUrl,this.color,this.isFav);
    this.servicio.addMeme(meme)
 
  }

  buscarMeme():Array<Meme>{
    return this.servicio.getMeme();
 
  }


}
