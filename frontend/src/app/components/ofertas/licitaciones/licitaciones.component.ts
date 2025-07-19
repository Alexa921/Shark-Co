import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Para *ngIf y *ngFor

@Component({
  selector: 'app-licitaciones',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './licitaciones.component.html',
  styleUrls: ['./licitaciones.component.css'],
})
export class LicitacionesComponent {
  expanded = false;

  // Campos de la oferta
  organizador = 'Inter-American Development Bank';
  titulo =
    'Diseño de la Política de Gobernanza de Datos de la plataforma Agritech Nexus';
  descripcion =
    'Esta licitación busca diseñar una política integral de gobernanza de datos para apoyar el desarrollo tecnológico agrícola en la región.';
  tipo_oferta = 'Licitación pública internacional';
  fecha_de_publicacion = 'Jul 10, 2025';
  fecha_de_cierre = 'Jul 24, 2025';
  estado = 'Abierta';
  ubicacion = 'México';
  ciudades_elegibles = 'Ciudad de México, Guadalajara, Monterrey';
  sector = 'Tecnología Agrícola';
  categoria = 'Consultoría';
  idioma = 'Español';
  link_oportunidad =
    'https://www.iadb.org/en/opportunities/agritech-governance';
  presupuesto = 'USD 20,000';
  contactos = 'licitation@iadb.org';

  // Campos adicionales (si decides mantenerlos)
  oficina = 'México';
  entidades = 'Inter-American Development Bank (Bahamas), Inter American';
  direccion = '1300 New York Avenue, N.W. Washington, D.C';
  sitio = 'https://www.iadb.org/en';
  sectores = 'Finance & Accounting, Humanitarian Aid';
  empleados = '1001-5000';
  tipo = 'Financial Institution';
  estadoGeneral = 'Activo';

  toggleCard() {
    this.expanded = !this.expanded;
  }

  onApply(event: Event) {
    event.stopPropagation();
    window.open(this.link_oportunidad, '_blank');
  }
}
