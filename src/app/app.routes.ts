import { Title } from '@angular/platform-browser';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LibroFormComponent } from './libro-form/libro-form.component';


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

    { path: 'libro-form', component: LibroFormComponent, title: 'Formulario de libros' }
];
