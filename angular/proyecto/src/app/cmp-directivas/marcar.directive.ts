import { Directive, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appMarcar]'
})
export class MarcarDirective {

  @Input('appMarcar') colorFondo='yellow' // si el alias del Input se llama igual que el selector, recibe el atributo al a vez que se usa la directiva, todo en un mismo paso
  colorInicial='white'

  @HostBinding('style.backgroundColor') color
  @HostListener('mouseover') onMouseOver(){
    this.color=this.colorFondo
  }  
  @HostListener('mouseleave') onmouseleave(){
    this.color=this.colorInicial
  }

  ngOnInit(){
    this.colorFondo=this.colorFondo ? this.colorFondo:'yellow'
  }
  // constructor() { 
  //   this.color = this.colorFondo
  // }

}
