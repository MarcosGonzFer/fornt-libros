import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Libro } from '../models/libro';
import { LibroService } from '../services/libro.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-libro-form-editar',
  templateUrl: './libro-form-editar.component.html',
    imports: [FormsModule],
  styleUrls: ['./libro-form-editar.component.scss']
})
export class LibroFormEditarComponent implements OnInit {
  libro: Libro = {
    id: 0,
    titulo: '',
    autor: '',
    paginas: 0,
    precio: 0
  };

  constructor(
    private libroService: LibroService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.cargarLibro(+id);
    }
  }

  cargarLibro(id: number) {
    this.libroService.buscarLibro(id).subscribe(
      (data) => {
        this.libro = data;
      },
      (error) => {
        console.error('Error al cargar el libro', error);
      }
    );
  }

  actualizarLibro() {
    if (!this.libro.id) {
      console.error('Error: El libro no tiene ID');
      return;
    }
    
    this.libroService.actualizarLibro(this.libro).subscribe(
      response => {
        console.log('Libro actualizado', response);
        this.router.navigate(['/']);
      },
      error => {
        console.error('Error al actualizar el libro', error);
      }
    );
  }
}
