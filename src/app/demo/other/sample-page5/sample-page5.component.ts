import { Component } from '@angular/core';
import { AdministradorComponent } from './admin/admin.component';



@Component({
  selector: 'app-sample-page5',
  standalone: true,
  imports: [AdministradorComponent],
  providers: [],
  templateUrl: './sample-page5.component.html',
  styleUrl: './sample-page5.component.scss'
})
export default class SamplePageComponent {
}
