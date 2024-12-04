import { Component, LOCALE_ID } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [CommonModule, MatDatepickerModule, MatNativeDateModule],
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  providers: [
    { provide: LOCALE_ID, useValue: 'es' } // Locale español
  ]
})
export default class CalendarComponent {
  diasCargados = [
    new Date(2024, 11, 25), // Navidad
    new Date(2024, 11, 1), // Año Nuevo
    new Date(2024, 11, 6), // Año Nuevo
    new Date(2024, 11, 4), // Año Nuevo
  ];

  highlightDates = (date: Date): string | null => {
    const today = new Date();
    const startOfWeek = this.getStartOfWeek(today);
    const endOfWeek = this.getEndOfWeek(today);

    // Destacar días específicos
    if (this.diasCargados.some((d) => this.isSameDate(d, date))) {
      return 'hihglighted-date';
    }

    // Destacar días de la semana actual
    if (date >= startOfWeek && date <= endOfWeek) {
      return 'current-week';
    }
    
    return null;
  };

  getStartOfWeek(date: Date): Date {
    const day = date.getDay();
    const diff = date.getDate() - day + (day === 0 ? -6 : 1); // Semana empieza lunes
    return new Date(date.setDate(diff));
  }

  getEndOfWeek(date: Date): Date {
    const startOfWeek = this.getStartOfWeek(date);
    return new Date(startOfWeek.setDate(startOfWeek.getDate() + 6)); // Termina domingo
  }

  isSameDate(d1: Date, d2: Date): boolean {
    return d1.getDate() === d2.getDate() && d1.getMonth() === d2.getMonth() && d1.getFullYear() === d2.getFullYear();
  }

  fechaSeleccionada: Date | null = null;
}
