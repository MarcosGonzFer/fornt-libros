import { Title } from '@angular/platform-browser';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LibroFormComponent } from './libro-form/libro-form.component';
import { LibroFormEditarComponent } from './libro-form-editar/libro-form-editar.component';
import { CapituloFormComponent } from './capitulo-form/capitulo-form.component';
import { CapituloListComponent } from './capitulo-list/capitulo-list.component'; 
import { CapituloFormEditarComponent } from './capitulo-form-editar/capitulo-form-editar.component';

export const routes: Routes = [
  { path: 'libros', component: HomeComponent },
  { path: 'libro-form', component: LibroFormComponent },
  { path: 'libro-form-editar/:id', component: LibroFormEditarComponent },
  { path: 'capitulo-form', component: CapituloFormComponent },
  {path: 'capitulos', component: CapituloListComponent},
  {path: 'capitulo-form-editar/:id', component: CapituloFormEditarComponent},
  { path: '', redirectTo: '/libros', pathMatch: 'full' }
];
