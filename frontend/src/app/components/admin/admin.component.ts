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
  ofertas: any[] = []; // ✅ ¡Esto es fundamental para que los botones aparezcan!

  editIndex: number | null = null;

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
      logo: [null],

      monto: [''],
      moneda: [''],
      modalidad_educativa: [''],
      duracion: [''],
      institucion: [''],
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
    const nuevaOferta = {
      ...this.ofertaForm.value,
      logoPreview: this.logoPreview,
    };

    if (this.editIndex !== null) {
      this.ofertas[this.editIndex] = nuevaOferta;
      this.editIndex = null;
    } else {
      this.ofertas.push(nuevaOferta);
    }

    this.ofertaForm.reset({ tipo: 'Licitaciones' });
    this.logoPreview = null;
  }

editarOferta(index: number) {
  const oferta = this.ofertas[index];
  this.ofertaForm.patchValue(oferta);
  this.logoPreview = oferta.logoPreview;
  this.editIndex = index;

  const tipo = oferta.tipo;
  this.ofertaForm.get('tipo')?.setValue(tipo);
  this.ofertaForm.get('tipo')?.updateValueAndValidity();
}



  eliminarOferta(index: number) {
    this.ofertas.splice(index, 1);
    if (this.editIndex === index) {
      this.editIndex = null;
    }
  }
}
