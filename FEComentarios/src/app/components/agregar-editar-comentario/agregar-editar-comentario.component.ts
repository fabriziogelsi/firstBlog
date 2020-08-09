import { ComentarioService } from './../../services/comentario.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';
import { comentario } from '../../models/comentario';

@Component({
  selector: 'app-agregar-editar-comentario',
  templateUrl: './agregar-editar-comentario.component.html',
  styleUrls: ['./agregar-editar-comentario.component.css']
})
export class AgregarEditarComentarioComponent implements OnInit {

  comentarios: FormGroup;
  idComentario = 0;
  action = 'Agregar';

  constructor(private fb: FormBuilder, 
              private route: ActivatedRoute, 
              private comentarioService: ComentarioService,
              private router: Router) { 
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
    if (this.action === "Agregar"){
      const comentarioData: comentario = {
        fechaCreacion: new Date(),
        creador: this.comentarios.get('creador').value,
        titulo: this.comentarios.get('titulo').value,
        texto: this.comentarios.get('texto').value,
      };
      this.comentarioService.guardarComentario(comentarioData).subscribe(data =>{
        this.router.navigate(['/']);
      });
    }
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
