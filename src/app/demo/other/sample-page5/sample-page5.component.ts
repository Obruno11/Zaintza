import { Component } from '@angular/core';
import  CalendarComponent  from "./calendar/calendar.component";


@Component({
  selector: 'app-sample-page5',
  standalone: true,
  imports: [CalendarComponent],
  providers: [],
  templateUrl: './sample-page5.component.html',
  styleUrl: './sample-page5.component.scss'
})
export default class SamplePageComponent {
}
