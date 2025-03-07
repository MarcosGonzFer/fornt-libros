import { Component, NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { LibroService } from '../services/libro.service';
import { Libro } from '../models/libro';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-libro-form',
  templateUrl: './libro-form.component.html',
  imports: [FormsModule],
  styleUrls: ['./libro-form.component.scss']
})
export class LibroFormComponent {
  libro: Libro = {
    id: 0,
    titulo: '',
    autor: '',
    paginas: 0,
    precio: 0
  };

  constructor(private libroService: LibroService, private router: Router) { }

  guardarLibro() {
    this.libroService.guardarLibro(this.libro).subscribe(() => {
      this.router.navigate(['/']); 
    });
  }
}
