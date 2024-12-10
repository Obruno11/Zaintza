import { Component, OnChanges } from '@angular/core';
import { CalendarComponent } from './calendar/calendar.component';
import { TableComponent } from './table/table.component';

@Component({
  selector: 'app-sample-page5',
  standalone: true,
  imports: [CalendarComponent, TableComponent],
  providers: [],
  templateUrl: './sample-page5.component.html',
  styleUrl: './sample-page5.component.scss'
})
export default class SamplePageComponent {
  hoy = "";
}
