import { Component, ChangeDetectionStrategy, model, Output, EventEmitter, signal, input } from "@angular/core";
import { provideNativeDateAdapter } from "@angular/material/core";
import { MatCalendarCellClassFunction, MatDatepickerModule } from "@angular/material/datepicker";
import { MatCardModule } from "@angular/material/card"


/** @title Basic datepicker */
@Component({
  selector: 'app-calendar',
  standalone: true,
  templateUrl: 'calendar.component.html',
  styleUrl: 'calendar.component.scss',
  providers: [provideNativeDateAdapter()],
  imports: [MatDatepickerModule, MatCardModule],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CalendarComponent {
  selectedDate = model();

  diasCargados = [
    new Date(2024, 11, 25), // Navidad
    new Date(2024, 11, 1), // Año Nuevo
    new Date(2024, 11, 6), // Año Nuevo
    new Date(2024, 11, 4), // Año Nuevo
  ];
  
  // Insertar clase a los dias entre semana para mostrar notificación
  dateClass: MatCalendarCellClassFunction<Date> = (cellDate, view)=>{
    if (view == 'month'){
      if (cellDate.getDay() !== 0 && cellDate.getDay() !== 6 ){ //descarta los días de fines de semana
        return this.diasCargados.some((d) => this.isSameDate(d, cellDate)) ? 'diaCargado' : 'diaNoCargado';
      }
    }

    return '';
  }

  dateFilter = (d: Date | null): boolean => { //deshabilita los días de fines de semana
    const day = (d || new Date()).getDay();
    return day !== 0 && day !== 6;
  };

  isSameDate(d1: Date, d2: Date): boolean {
    return d1.getDate() === d2.getDate() && d1.getMonth() === d2.getMonth() && d1.getFullYear() === d2.getFullYear();
  };
}
