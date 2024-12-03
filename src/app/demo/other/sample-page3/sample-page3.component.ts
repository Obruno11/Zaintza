import { Component } from '@angular/core';

// project import
import { SharedModule } from 'src/app/theme/shared/shared.module';

//import components
import { NavHorasComponent } from './nav-horas/nav-horas.component';

@Component({
  selector: 'app-sample-page3',
  standalone: true,
  imports: [SharedModule, NavHorasComponent],
  templateUrl: './sample-page3.component.html',
  styleUrls: ['./sample-page3.component.css']
})
export default class SamplePageComponent {
  
}
