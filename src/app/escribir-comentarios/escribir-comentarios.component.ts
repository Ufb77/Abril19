import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-escribir-comentarios',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './escribir-comentarios.component.html',
  styleUrl: './escribir-comentarios.component.css'
})
export class EscribirComentariosComponent {

  @Output() comentarioEnviar:EventEmitter<string> = new EventEmitter;

  comentarioEscrito:string = "";

  enviarComentario(comentario: string){
    this.comentarioEnviar.emit(comentario);
  }

}
