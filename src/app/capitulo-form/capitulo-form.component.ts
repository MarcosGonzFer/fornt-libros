import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CapituloService } from '../services/capitulo.service';
import { Capitulo } from '../models/capitulo';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-capitulo-form',
  templateUrl: './capitulo-form.component.html',
  styleUrls: ['./capitulo-form.component.scss'],
  imports: [FormsModule, RouterModule],
})
export class CapituloFormComponent {
  capitulo: Capitulo = {
    id: 0,
    nombre: '',
    numero: 0
  };

  constructor(
    private capituloService: CapituloService,
    private router: Router,
    private route: ActivatedRoute  
  ) {}
 

  guardarCapitulo() {
    this.capituloService.guardarCapitulo(this.capitulo).subscribe(() => {
      this.router.navigate(['/capitulos']); 
    });
    }
  
}
