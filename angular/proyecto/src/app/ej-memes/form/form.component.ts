import { Component, OnInit, Input } from '@angular/core';
import { Meme } from '../meme';
import { MemesService } from '../memes.service';
import { FormBuilder, Validators, FormGroup} from '@angular/forms'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Input() meme: Meme;
  form: FormGroup;
  constructor(private memesServ: MemesService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({ //new FormGroup
      textoArriba:this.formBuilder.control(this.meme.textoArriba, Validators.required),
      textoAbajo: this.formBuilder.control(this.meme.textoAbajo, Validators.required),
      color: this.formBuilder.control(this.meme.color),
      imagenUrl: this.form.controls(this.meme.imagenUrl, Validators.required)

    });
  }


  guardar() {
    this.memesServ.addMeme(this.form.value.textoArriba, this.form.value.textoAbajo, this.form.value.color, this.form.value.imagenUrl);
  }

}
