import { Component, OnInit } from '@angular/core';
import {ComponentCanDeactivate} from './editar-usuario.guard';

@Component({
  selector: 'app-editar-usuarios',
  templateUrl: './editar-usuarios.component.html',
  styleUrls: ['./editar-usuarios.component.css']
})
export class EditarUsuariosComponent implements OnInit, ComponentCanDeactivate {

  datosGuardados: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  canDeactivate(): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree>{
    if(this.datosGuardados){
      return true
    }

    return confirm('Estás seguro de que quieres salir? Perderás los cambios');

  }

}
