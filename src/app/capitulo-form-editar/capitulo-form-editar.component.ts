import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Capitulo } from '../models/capitulo';
import { CapituloService } from '../services/capitulo.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-capitulo-form-editar',
  templateUrl: './capitulo-form-editar.component.html',
  imports: [FormsModule, CommonModule, RouterModule],
  styleUrls: ['./capitulo-form-editar.component.scss']
})
export class CapituloFormEditarComponent implements OnInit {
  capitulo: Capitulo = {
    id: 0,
    nombre: '',
    numero: 0
  };

  constructor(
    private capituloService: CapituloService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.cargarCapitulo(+id);
    }
  }

  cargarCapitulo(id: number) {
    this.capituloService.buscarCapitulo(id).subscribe(
      (data) => {
        this.capitulo = data;
      },
      (error) => {
        console.error('Error al cargar el capítulo', error);
      }
    );
  }

  actualizarCapitulo() {
    if (!this.capitulo.id) {
      console.error('Error: El capítulo no tiene ID');
      return;
    }

    this.capituloService.actualizarCapitulo(this.capitulo).subscribe(
      (response) => {
        console.log('Capítulo actualizado', response);
        this.router.navigate(['/capitulos']);
      },
      (error) => {
        console.error('Error al actualizar el capítulo', error);
      }
    );
  }
}
