import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FechaHoyService } from './fecha-hoy.service';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(
    private http: HttpClient,
    private fecha: FechaHoyService
  ) {}

  getAllZaintza() {
    let url = 'https://angular.lhusurbil.eus/GetAllZaintza?eguna=2024-11-19&ikaslea=oroitz';
    return this.http.get<any>(url);
  }

  updateSinadura(id: any, sinaduraImg: any, ikaslea = 'oroitz') {
    let body = {
      Id: id,
      Sinadura_img: sinaduraImg,
      Ikaslea: ikaslea
    };

    console.log(body);

    let url = 'https://angular.lhusurbil.eus/SetOneZaintza';
    return this.http.put<any>(url, body);
  }

  getAllProfesores(){
    
  }
}
