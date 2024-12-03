// angular import
import { Component, OnInit } from '@angular/core';

// project import
import { SharedModule } from 'src/app/theme/shared/shared.module';

//Material
import {MatTabsModule} from '@angular/material/tabs';

//Componentes
import { ProfesoresListaComponent } from './profesores-lista/profesores-lista.component';

//Servicios
import { ApiService } from '../api.service';


@Component({
  selector: 'app-sample-page4',
  standalone: true,
  imports: [SharedModule, MatTabsModule, ProfesoresListaComponent],
  templateUrl: './sample-page4.component.html',
  styleUrls: ['./sample-page4.component.scss']
})
export default class SamplePageComponent implements OnInit{
  profesores: any;

  constructor (private api: ApiService) {}

  ngOnInit(): void {
    this.profesores = this.api.getAllZaintza()
  }
}
