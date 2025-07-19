import { Routes } from '@angular/router';
import { RegistroComponent } from './components/registro/registro.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { LicitacionesComponent } from './components/ofertas/licitaciones/licitaciones.component';
import { EducacionComponent } from './components/ofertas/educacion/educacion.component';
import { CapitalComponent } from './components/ofertas/capital/capital.component';
import { AdminComponent } from './components/admin/admin.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // ← ESTA LÍNEA ES CLAVE
  { path: 'home', component: HomeComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'login', component: LoginComponent },
  { path: 'educacion', component: EducacionComponent },
  { path: 'licitaciones', component: LicitacionesComponent },
  { path: 'capital', component: CapitalComponent },
  { path: 'admin', component: AdminComponent },
];
