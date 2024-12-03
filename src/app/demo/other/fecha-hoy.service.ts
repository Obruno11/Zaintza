import { Injectable } from '@angular/core';
import { formatDate } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class FechaHoyService {
  fecha: any;
  
  constructor() { 
    this.fecha = formatDate(new Date(), 'yyyy-MM-dd', 'en-US')
  }
}
