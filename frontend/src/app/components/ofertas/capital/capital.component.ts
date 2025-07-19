import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-capital',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './capital.component.html',
  styleUrls: ['./capital.component.css'],
})
export class CapitalComponent {
  expanded = false;

  organizador = 'Banco Interamericano de Desarrollo';
  titulo = 'Financiación para iniciativas de impacto social en América Latina';
  descripcion =
    'Esta convocatoria busca financiar proyectos innovadores que generen impacto positivo en comunidades vulnerables.';
  agencia_financiadora = 'BID Invest';
  presupuesto = 'USD 150,000';
  tipo_oferta = 'Capital semilla';
  fecha_de_publicacion = 'Jul 5, 2025';
  fecha_de_cierre = 'Aug 10, 2025';
  estado = 'Abierta';
  ubicacion = 'Colombia';
  ciudades_elegibles = 'Bogotá, Medellín, Cali';
  sector = 'Desarrollo social';
  categoria = 'Financiación';
  idioma = 'Español';
  link_oportunidad = 'https://www.bid.org/capital-social-2025';

  toggleCard() {
    this.expanded = !this.expanded;
  }

  onApply(event: Event) {
    event.stopPropagation();
    window.open(this.link_oportunidad, '_blank');
  }
}
