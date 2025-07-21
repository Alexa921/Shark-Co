import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Necesario para ngModel
import { OfertasService } from '../../../services/ofertas.service';

@Component({
  selector: 'app-ofertas',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ofertas.component.html',
  styleUrls: ['./ofertas.component.css'],
})
export class OfertasComponent {
  oferta = {
    titulo: '',
    tipo_oferta: '',
  };

  ofertasGuardadas: any[] = [];

  constructor(private ofertasService: OfertasService) {}

  guardarOferta() {
    this.ofertasGuardadas.push({ ...this.oferta });
    this.oferta = { titulo: '', tipo_oferta: '' };
  }
}
