import { Component } from '@angular/core';
import { EscribirComentariosComponent } from '../escribir-comentarios/escribir-comentarios.component';

@Component({
  selector: 'app-comentarios',
  standalone: true,
  imports: [EscribirComentariosComponent],
  templateUrl: './comentarios.component.html',
  styleUrl: './comentarios.component.css'
})
export class ComentariosComponent {

  comentarios: string[] = [];

  addComentario(comentario:string){
    this.comentarios.push(comentario);
  }
}
