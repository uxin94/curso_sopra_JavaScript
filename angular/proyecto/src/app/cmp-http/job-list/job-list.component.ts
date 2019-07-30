import { Component, OnInit } from '@angular/core';

export interface Oferta{
  ciudad: string,
  descripcion: string,
  imgUrl: string,
  nombre: string,
  salario: number,
  skills: Array<string>
}


@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {

  ofertas: Array<Oferta> = [
    {
      ciudad: 'Madrid',
      nombre: 'Senior Employee Services Generalist',
      descripcion: 'Descripcion del puesto de trabajo',
      salario: 25000,
      imgUrl: 'https://www.primerempleo.com/storage/info/buscar-trabajo.jpg',
      skills: ['java', 'js', ' html']
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
