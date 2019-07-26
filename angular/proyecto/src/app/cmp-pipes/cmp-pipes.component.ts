import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmp-pipes',
  templateUrl: './cmp-pipes.component.html',
  styleUrls: ['./cmp-pipes.component.css']
})
export class CmpPipesComponent implements OnInit {

  precio: number = 10;
  nombreProducto: string="Auriculares malos"
  descripcionProducto:string = "Unos auriculares de mierda"
  fechaCompra: Date = new Date(2019, 1, 12);

  mascotas = ['pez', 'perro', 'tortuga', 'gato']
  txtFiltro = ''
  msg=new Promise<string>((resolve, reject)=>{
    setTimeout(()=>{ resolve('Es un mensaje...')} , 3000)
  })

  constructor() { }

  ngOnInit() {
  }

  addMascota(mascota){
    this.mascotas.push(mascota)
  }

}
