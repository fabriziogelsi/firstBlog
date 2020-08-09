import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-agregar-editar-comentario',
  templateUrl: './agregar-editar-comentario.component.html',
  styleUrls: ['./agregar-editar-comentario.component.css']
})
export class AgregarEditarComentarioComponent implements OnInit {

  comentarios: FormGroup;
  idComentario = 0;
  action = 'Agregar';

  constructor(private fb: FormBuilder, private route: ActivatedRoute) { 
    this.comentarios = this.fb.group({
      titulo: ['', Validators.required],
      creador: ['', Validators.required],
      texto: ['', Validators.required],
    });
    if (+this.route.snapshot.paramMap.get('id') > 0){
      this.idComentario = +this.route.snapshot.paramMap.get('id');
    }
  }

  ngOnInit(): void {
    this.editar();
  }

  guardarComentario(){
    console.log(this.comentarios);
  }

  editar(){
    if (this.idComentario > 0){
      this.action = 'Editar';
      this.comentarios.patchValue({
        titulo: 'Gladiador',
        creador: 'Fabrizio',
        texto: 'Gano un Oscar en e 2000'
      })
    }
  }

}
