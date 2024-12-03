import { NgFor, NgIf } from '@angular/common';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Input } from '@angular/core';
import { PrfAccordionBodyComponent } from '../prf-accordion-body/prf-accordion-body.component';
import { ApiService } from 'src/app/demo/other/api.service';

@Component({
  selector: 'app-prf-accordion',
  standalone: true,
  imports: [NgFor, NgIf, PrfAccordionBodyComponent],
  templateUrl: './prf-accordion.component.html',
  styleUrl: './prf-accordion.component.scss'
})
export class PrfAccordionComponent implements OnChanges {
  @Input() ordua: any;
  profesores: any;

  constructor(private api: ApiService) {}

  ngOnChanges(): void {
    this.api.getAllZaintza().subscribe((profesor) => {
      console.log(profesor);
      this.profesores = profesor;
    });
  }
}
