import { Component } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import AdministrarDiaComponent from "./administrar-dia/administrar-dia.component";
import { AdministrarProfComponent } from "./administrar-prof/administrar-prof.component";
import { AdministrarPlantillasComponent } from "./administrar-plantillas/administrar-plantillas.component";


@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [MatTabsModule, AdministrarDiaComponent, AdministrarProfComponent, AdministrarPlantillasComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdministradorComponent {

}
