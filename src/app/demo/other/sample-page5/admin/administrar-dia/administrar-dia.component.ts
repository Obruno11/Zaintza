import { Component, OnChanges } from '@angular/core';
import { CalendarComponent } from './calendar/calendar.component';


@Component({
  selector: 'app-administrar-dia',
  standalone: true,
  imports: [CalendarComponent],
  providers: [],
  templateUrl: './administrar-dia.component.html',
  styleUrl: './administrar-dia.component.scss'
})
export default class AdministrarDiaComponent {
  hoy = "";
}
