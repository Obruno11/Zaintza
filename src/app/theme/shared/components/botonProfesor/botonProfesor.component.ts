
import { Component, Input} from '@angular/core';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'app-collapse',
	standalone: true,
	imports: [NgbCollapseModule],
	templateUrl: './botonProfesor.component.html',
})
export class NgbdCollapseBasic {
	isCollapsed = true;

  @Input() collapseZaintza : string;
  @Input() collapseOrdezkatua : string;
  @Input() collapseTaldea : string;
  @Input() collapseGela : string;
  @Input() collapseOharrak : string;
}


