import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';

//Material
import { MatExpansionModule } from '@angular/material/expansion';

//Component
import { SignaturePadComponent } from "../signature-pad/signature-pad.component";

//Servicios

@Component({
  selector: 'app-profesores-lista',
  standalone: true,
  imports: [MatExpansionModule, SignaturePadComponent],
  templateUrl: './profesores-lista.component.html',
  styleUrl: '../sample-page4.component.css'
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
