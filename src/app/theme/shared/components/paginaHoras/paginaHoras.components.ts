import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ApiService } from 'src/app/demo/other/api.service';
import { NgbdCollapseBasic } from '../botonProfesor/botonProfesor.component';

@Component({
  selector: 'app-horas',
  standalone: true,
  imports: [CommonModule, NgbdCollapseBasic],
  templateUrl: './paginaHoras.component.html'
})
export class paginaHoras {
  @Input() ordua: string;
  profesores: any;

}
