import { Component, OnInit } from '@angular/core';
import { Observable, interval, Subscription, Observer } from 'rxjs';
import {filter, map} from 'rxjs/operators';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css']
})
export class ObservablesComponent implements OnInit {

  subscripciones: Array<Subscription>=[];

  constructor() { }

  ngOnInit() {
    //this.getNums();
    //this.miInterval();
    //this.conError();
    this.obsNumsPares();
  }

  getNums(){
    const numObs=interval(500);
    const s = numObs.subscribe((num)=>{
      console.log(num)
    })
    this.subscripciones.push(s);
  }

  ngOnDestroy() {
    this.subscripciones.forEach(sub => sub.unsubscribe())  
  };

  miInterval(){
    const miIntervalObs = Observable.create((observer: Observer<number>)=>{
      let i = 0;
      setInterval(()=>{
        observer.next(i); //envia un dato
        i++;
      }, 500)
    });
    const s = miIntervalObs.subscribe((n)=>{
      console.log(n);
    })
    this.subscripciones.push(s);

  }

  conError(){
    const obsConError = Observable.create((observer: Observer<string>)=>{

      setTimeout(()=>{
        observer.next('Mensaje 1')
      }, 300);

      setTimeout(()=>{
        observer.next('Mensaje 2')
      }, 700);

      setTimeout(()=>{
        observer.next('Mensaje 3')
      }, 1300);

      setTimeout(()=>{
        observer.complete()
      }, 2000);
    })

    const s =obsConError.subscribe(
      msg=>console.log('Msg: ',msg),
      err=>console.log('Error: ', err), // cuando ocurra el error
      ()=>console.log('El observable ha terminado') // Cuando va a terminar
      ) 
  
    this.subscripciones.push(s);
  }

  obsNumsPares(){
    const obsNumsPares=Observable.create((observer:Observer<number>)=>{
      setInterval(()=>{
        const num = Math.floor(Math.random()*101); //Math.floor redonde para obtener un numero entero, con todo conseguimos un random (0,100)
        observer.next(num);
      }, 200)
    });

    const s = obsNumsPares.pipe(filter((n:number)=>n%2===0), map((n:number)=>n/2)).subscribe((n)=>{
      console.log('Num par: ', n)
    })
    this.subscripciones.push(s);

  }



}
