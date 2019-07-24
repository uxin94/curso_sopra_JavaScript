import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-preview-cv',
  templateUrl: './preview-cv.component.html',
  styleUrls: ['./preview-cv.component.css']
})
export class PreviewCvComponent implements OnInit {

  @Input() miNombre = ' '
  @Input() misApellidos = ''
  @Input() miEmail = ''
  @Input() miFoto=''
  @Input() misSkills = ''
  
  constructor() { }

  ngOnInit() {
  }

}
