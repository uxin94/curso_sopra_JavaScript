import { Directive, HostBinding, Input, OnInit, OnDestroy } from '@angular/core';

@Directive({
  selector: '[appBlink]'
})
export class BlinkDirective implements OnInit, OnDestroy{

  @Input('appBlink') colorLetra
  @HostBinding('style.color') color
  itnervalId=null
  constructor() { }

  ngOnInit(){
    if (!this.colorLetra){
      this.colorLetra='yellow'
    }
    let i = 0;
    this.itnervalId=setInterval(() => {
      // console.log(i) 
      // i++; 
      this.color=this.color === 'black' ? this.colorLetra : 'black' }, 300)
  }

  ngOnDestroy(){
    clearInterval(this.itnervalId)
  }

}
