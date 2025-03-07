import { Title } from '@angular/platform-browser';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LibroFormComponent } from './libro-form/libro-form.component';
import { LibroFormEditarComponent } from './libro-form-editar/libro-form-editar.component';


export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Página de inicio'
    },
    {
        path: 'libro-form/:id',
        component: LibroFormComponent,
        title: 'Formulario de libros'
    },

    { path: 'libro-form', component: LibroFormComponent, title: 'Formulario de libros' },
    { path: 'libro-form-editar/:id', component: LibroFormEditarComponent, title: 'Formulario para editar los libros' }
];
