import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrfAccordionComponent } from '../prf-accordion/prf-accordion.component';
import { FechaHoyService } from 'src/app/demo/other/fecha-hoy.service';

@Component({
  selector: 'app-nav-horas',
  standalone: true,
  imports: [CommonModule, PrfAccordionComponent],
  templateUrl: './nav-horas.component.html',
  styleUrl: '../../sample-page3/sample-page3.component.css'
})
export class NavHorasComponent implements OnInit {
  ordua: string;
  fechaHoy: any;

  constructor(private fecha: FechaHoyService) {}

  ngOnInit(): void {
    this.fechaHoy = this.fecha.fecha;    
    this.changeOrdua('1');
  }

  changeOrdua(newOrdua: string) {
    this.ordua = newOrdua;
    this.changeActive();
  }

  changeActive() {
    const buttonList = document.querySelectorAll('button');
    buttonList.forEach((item) => {
      item.classList.remove('btn-custom-active');
    });

    let button = document.getElementById('bot' + this.ordua);
    button.classList.toggle('btn-custom-active');
  }
}
