import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { NgFor, NgIf } from '@angular/common';

//Material
import { MatExpansionModule } from '@angular/material/expansion';

//Servicios

@Component({
  selector: 'app-profesores-lista',
  standalone: true,
  imports: [MatExpansionModule, NgFor, NgIf],
  templateUrl: './profesores-lista.component.html',
  styleUrl: './profesores-lista.component.scss'
})
export class ProfesoresListaComponent implements OnInit {
  @Input() ordua: string;
  @Input() profesores: Observable<any>;
  listaProfesores: any;

  ngOnInit(): void {
    this.profesores.subscribe((profesor) => {
      this.listaProfesores=profesor;
      console.log(profesor)
    });
  }
}
