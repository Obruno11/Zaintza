// angular import
import { Component, OnInit } from '@angular/core';

// project import
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { paginaHoras } from 'src/app/theme/shared/components/paginaHoras/paginaHoras.components';

//import collapse

@Component({
  selector: 'app-sample-page',
  standalone: true,
  imports: [SharedModule, paginaHoras],
  templateUrl: './sample-page.component.html',
  styleUrls: ['./sample-page.component.scss']
})
export default class SamplePageComponent {
  orduaToSend = 1;
  aldatuordua(ord: any) {
    this.orduaToSend = ord;

    const boton = document.getElementsByClassName('nav-link');

    Array.from(boton).forEach(element => {
      if (element.id == ord) element.classList.add('active');
      else  element.classList.remove('active');
    });
  }
}
