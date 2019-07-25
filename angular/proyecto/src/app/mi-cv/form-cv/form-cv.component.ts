import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-form-cv',
  templateUrl: './form-cv.component.html',
  styleUrls: ['./form-cv.component.css']
})
export class FormCvComponent implements OnInit {

  @Input() miNombre = ''
  @Input() misApellidos = ''
  @Input() miEmail = ''
  @Input() miFoto=''
  @Input() misSkills = ''

  @Output() miNombreCambiado = new EventEmitter<string>()
  @Output() misApellidosCambiados = new EventEmitter<string>()
  @Output() miEmailCambiado = new EventEmitter<string>()
  @Output() miFotoCambiada=new EventEmitter<string>()
  @Output() misSkillsCambiadas = new EventEmitter<Array<string>>()

  constructor() { }

  ngOnInit() {
  }

  cambiarNombre(event){
    this.miNombreCambiado.emit(event.target.value)
  }

  cambiarApellidos(event){
    this.misApellidosCambiados.emit(event.target.value)
  }

  cambiarEmail(event){
    this.miEmailCambiado.emit(event.target.value)
  }

  cambiarFoto(event){
    this.miFotoCambiada.emit("assets/"+event.target.files[0].name)
    console.dir(event.target)
  }

  cambiarSkills(skill){
    this.misSkillsCambiadas.emit(skill)
  }

}
