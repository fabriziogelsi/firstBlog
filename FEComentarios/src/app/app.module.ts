import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgregarEditarComentarioComponent } from './components/agregar-editar-comentario/agregar-editar-comentario.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListComentarionComponent } from './components/list-comentarion/list-comentarion.component';
import { VerComentariosComponent } from './components/ver-comentarios/ver-comentarios.component';

@NgModule({
  declarations: [
    AppComponent,
    AgregarEditarComentarioComponent,
    NavbarComponent,
    ListComentarionComponent,
    VerComentariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
