import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-educacion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css'],
})
export class EducacionComponent {
  expanded = false;

  organizador = 'UNESCO';
  titulo = 'Curso en línea sobre sostenibilidad para jóvenes líderes';
  descripcion =
    'Un programa formativo gratuito dirigido a jóvenes entre 18 y 30 años.';
  modalidad = 'Virtual';
  duracion = '6 semanas';
  contactos = 'educacion@unesco.org';
  tipo_oferta = 'Curso en línea';
  fecha_de_publicacion = 'Jul 1, 2025';
  fecha_de_cierre = 'Aug 5, 2025';
  estado = 'Abierta';
  ubicacion = 'Global';
  ciudades_elegibles = 'Todos los países hispanohablantes';
  sector = 'Educación y Desarrollo Sostenible';
  categoria = 'Formación';
  idioma = 'Español';
  link_oportunidad = 'https://www.unesco.org/es/educacion/sostenibilidad-curso';

  toggleCard() {
    this.expanded = !this.expanded;
  }

  onApply(event: Event) {
    event.stopPropagation();
    window.open(this.link_oportunidad, '_blank');
  }
}
