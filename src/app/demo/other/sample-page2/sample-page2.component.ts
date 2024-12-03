// angular import
import { Component } from '@angular/core';

// project import
import { SharedModule } from 'src/app/theme/shared/shared.module';

@Component({
  selector: 'app-sample-page2',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './sample-page2.component.html',
  styleUrls: ['./sample-page2.component.scss']
})
export default class SamplePageComponent {}
