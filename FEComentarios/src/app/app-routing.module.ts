import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgregarEditarComentarioComponent } from './components/agregar-editar-comentario/agregar-editar-comentario.component';
import { VerComentariosComponent } from './components/ver-comentarios/ver-comentarios.component';
import { ListComentarionComponent } from './components/list-comentarion/list-comentarion.component';

const routes: Routes = [
  { path: 'agregar', component: AgregarEditarComentarioComponent},
  { path: 'editar/:id', component: AgregarEditarComentarioComponent},
  { path: 'ver/:id', component: VerComentariosComponent},
  { path: '', component: ListComentarionComponent, pathMatch: 'full'},
  { path: '**', redirectTo: '/'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
