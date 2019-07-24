import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmp-data-binding',
  templateUrl: './cmp-data-binding.component.html',
  styleUrls: ['./cmp-data-binding.component.css']
})
export class CmpDataBindingComponent implements OnInit {

  nombre: string="Andrea";
  editando: boolean=false;
  constructor() { }

  ngOnInit() {
  }

  toggleEditando(){
    this.editando = !this.editando;
  }

  resertNombre(){
    this.nombre = '' ;
  }

  cambiarNombre(event){
    this.nombre = event.target.value;
  }

  mostrar(ref){
    console.log(ref);
  }

}
