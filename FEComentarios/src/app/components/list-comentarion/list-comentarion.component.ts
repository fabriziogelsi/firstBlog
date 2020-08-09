import { Component, OnInit } from '@angular/core';
import { comentario } from '../../models/comentario';
import { ComentarioService } from '../../services/comentario.service';

@Component({
  selector: 'app-list-comentarion',
  templateUrl: './list-comentarion.component.html',
  styleUrls: ['./list-comentarion.component.css']
})
export class ListComentarionComponent implements OnInit {

  listComentarios: comentario[];
  loading = false;

  constructor(private comentarioService: ComentarioService) { }

  ngOnInit(): void {
    this.cargarComentario();
  }

  cargarComentario(){
    this.loading = true;
    this.comentarioService.getListComentarios().subscribe(data => {
        this.loading = false;
        this.listComentarios = data;
    })
  }

  delete(id: number){
    this.loading = true;
    this.comentarioService.deleteComentario(id).subscribe(data => {
      this.loading = false;
      this.cargarComentario();
    })
  }

}
