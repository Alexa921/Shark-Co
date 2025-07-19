import { Routes } from '@angular/router';
import { RegistroComponent } from './components/registro/registro.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // ← ESTA LÍNEA ES CLAVE
  { path: 'home', component: HomeComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'login', component: LoginComponent },
];
