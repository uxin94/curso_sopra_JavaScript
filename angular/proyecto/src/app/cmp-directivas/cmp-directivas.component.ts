import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmp-directivas',
  templateUrl: './cmp-directivas.component.html',
  styleUrls: ['./cmp-directivas.component.css']
})
export class CmpDirectivasComponent implements OnInit {

  items=['Un', 'Dos', 'Tres', 'Caramba']
  nombre = 'Andrea'
  negrita = false
  color = 'black'
  mostrarItem=true


  constructor() { }

  toggleMostrarItem(){
    this.mostrarItem= !this.mostrarItem
  }

  ngOnInit() {
    
  }

}
