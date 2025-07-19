import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent {
  ofertaForm: FormGroup;
  tiposOferta: string[] = ['Licitaciones', 'Capital', 'Educación'];
  logoPreview: string | ArrayBuffer | null = null;

  constructor(private fb: FormBuilder) {
    this.ofertaForm = this.fb.group({
      tipo: ['Licitaciones'],
      titulo: [''],
      descripcion: [''],
      organizador: [''],
      fecha_de_publicacion: [''],
      fecha_de_cierre: [''],
      estado: [''],
      ubicacion: [''],
      ciudades_elegibles: [''],
      sector: [''],
      categoria: [''],
      idioma: [''],
      link_oportunidad: [''],
      logo: [null], // archivo o base64

      // Capital
      monto: [''],
      moneda: [''],

      // Educación
      modalidad_educativa: [''],
      duracion: [''],
      institucion: [''],

      // Licitaciones
      oficina: [''],
      entidades: [''],
      direccion: [''],
      sitio: [''],
      empleados: [''],
      tipoLicitacion: [''],
    });
  }

  get tipoSeleccionado(): string {
    return this.ofertaForm.get('tipo')?.value;
  }

  onLogoChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.ofertaForm.patchValue({ logo: file });
      const reader = new FileReader();
      reader.onload = () => {
        this.logoPreview = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }

  guardarOferta() {
    console.log('Oferta guardada:', this.ofertaForm.value);
    console.log('Logo (archivo):', this.ofertaForm.get('logo')?.value);
  }
}
