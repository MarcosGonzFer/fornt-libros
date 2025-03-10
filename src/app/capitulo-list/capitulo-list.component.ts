import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CapituloService } from '../services/capitulo.service';
import { Capitulo } from '../models/capitulo';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-capitulo-list',
  templateUrl: './capitulo-list.component.html',
  imports: [FormsModule, RouterModule, CommonModule],
  styleUrls: ['./capitulo-list.component.scss']
})
export class CapituloListComponent {
  capitulos: Capitulo[] = [];


  constructor(
    private capituloService: CapituloService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.capituloService.listarCapitulos().subscribe(capitulos => this.capitulos = capitulos);
  }

  listarCapitulos() {
    this.capituloService.listarCapitulos().subscribe((data) => {
      this.capitulos = data;
    });
  }
  eliminarCapitulo(id: number) {
    this.capituloService.eliminarCapitulo(id).subscribe(() => {
      this.capitulos = this.capitulos.filter(capitulo => capitulo.id !== id);
    });
  }
}
