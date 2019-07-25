import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mi-cv',
  templateUrl: './mi-cv.component.html',
  styleUrls: ['./mi-cv.component.css']
})
export class MiCvComponent implements OnInit {

  nombre = ''
  apellidos = ''
  email = ''
  foto = ' '
  skills: Array<string>=[]

  constructor() { }

  ngOnInit() {
  }

  cambiarNombre(event){
    this.nombre=event
  }

  cambiarApellidos(event){
    this.apellidos=event
  }

  cambiarEmail(event){
    this.email=event
  }

  cambiarFoto(event){
    this.foto=event
  }

  cambiarSkills(skill){
    this.skills.push(skill)
  }
}
