import { Component } from '@angular/core';
import { Libro } from '../models/libro';
import { LibroService } from '../services/libro.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [RouterModule, CommonModule],  
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  libro: Libro[] = [];
  constructor(private libroService: LibroService) { }
  ngOnInit(): void {
    this.libroService.listarLibros().subscribe(libros => this.libro = libros);
  }
  listarLibros() {
    this.libroService.listarLibros().subscribe((data) => {
      this.libro = data;
    });
  }

  eliminarLibro(id: number) {
    this.libroService.eliminarLibro(id).subscribe(() => {
      this.libro = this.libro.filter(libro => libro.id !== id);
    });
  }
}
